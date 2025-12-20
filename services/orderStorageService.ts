// Order Storage Service - Handle offline order persistence
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createOrder } from './firebaseService';
import { Timestamp } from 'firebase/firestore';

const PENDING_ORDERS_KEY = 'pending_orders';
const MAX_RETRY_ATTEMPTS = 3;

export interface PendingOrder {
  id: string;
  orderData: any;
  timestamp: number;
  retryCount: number;
}

/**
 * Save order to AsyncStorage when Firestore write fails
 */
export const savePendingOrder = async (orderData: any): Promise<string> => {
  try {
    const pendingOrders = await getPendingOrders();
    const orderId = `pending_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const pendingOrder: PendingOrder = {
      id: orderId,
      orderData: {
        ...orderData,
        paymentStatus: orderData.paymentStatus || 'success',
        createdAt: Timestamp.now().toMillis(), // Store as milliseconds for JSON serialization
      },
      timestamp: Date.now(),
      retryCount: 0,
    };

    pendingOrders.push(pendingOrder);
    await AsyncStorage.setItem(PENDING_ORDERS_KEY, JSON.stringify(pendingOrders));
    
    console.log('Order saved to local storage:', orderId);
    return orderId;
  } catch (error: any) {
    console.error('Error saving pending order:', error);
    throw new Error(error.message || 'Failed to save pending order');
  }
};

/**
 * Get all pending orders from AsyncStorage
 */
export const getPendingOrders = async (): Promise<PendingOrder[]> => {
  try {
    const data = await AsyncStorage.getItem(PENDING_ORDERS_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch (error: any) {
    console.error('Error getting pending orders:', error);
    return [];
  }
};

/**
 * Remove a pending order from AsyncStorage after successful upload
 */
export const removePendingOrder = async (orderId: string): Promise<void> => {
  try {
    const pendingOrders = await getPendingOrders();
    const filtered = pendingOrders.filter(order => order.id !== orderId);
    await AsyncStorage.setItem(PENDING_ORDERS_KEY, JSON.stringify(filtered));
    console.log('Pending order removed from local storage:', orderId);
  } catch (error: any) {
    console.error('Error removing pending order:', error);
    throw new Error(error.message || 'Failed to remove pending order');
  }
};

/**
 * Retry uploading pending orders to Firestore
 */
export const retryPendingOrders = async (): Promise<{ success: number; failed: number }> => {
  const results = { success: 0, failed: 0 };
  
  try {
    const pendingOrders = await getPendingOrders();
    
    if (pendingOrders.length === 0) {
      console.log('No pending orders to retry');
      return results;
    }

    console.log(`Retrying ${pendingOrders.length} pending orders...`);

    for (const pendingOrder of pendingOrders) {
      // Skip if max retry attempts reached
      if (pendingOrder.retryCount >= MAX_RETRY_ATTEMPTS) {
        console.warn(`Skipping order ${pendingOrder.id} - max retry attempts reached`);
        results.failed++;
        continue;
      }

      try {
        // Convert timestamp back to Firestore Timestamp if it's stored as milliseconds
        const orderData = {
          ...pendingOrder.orderData,
          createdAt: typeof pendingOrder.orderData.createdAt === 'number' 
            ? Timestamp.fromMillis(pendingOrder.orderData.createdAt)
            : pendingOrder.orderData.createdAt || Timestamp.now(),
        };

        // Attempt to create order in Firestore
        await createOrder(orderData, pendingOrder.orderData.paymentStatus || 'success');
        
        // Remove from AsyncStorage on success
        await removePendingOrder(pendingOrder.id);
        results.success++;
        console.log(`Successfully uploaded pending order: ${pendingOrder.id}`);
      } catch (error: any) {
        // Increment retry count
        pendingOrder.retryCount++;
        
        // Update the order in AsyncStorage with new retry count
        const allOrders = await getPendingOrders();
        const updatedOrders = allOrders.map(order => 
          order.id === pendingOrder.id ? pendingOrder : order
        );
        await AsyncStorage.setItem(PENDING_ORDERS_KEY, JSON.stringify(updatedOrders));
        
        console.error(`Failed to upload pending order ${pendingOrder.id} (attempt ${pendingOrder.retryCount}/${MAX_RETRY_ATTEMPTS}):`, error);
        results.failed++;
      }
    }

    console.log(`Retry complete: ${results.success} succeeded, ${results.failed} failed`);
    return results;
  } catch (error: any) {
    console.error('Error retrying pending orders:', error);
    return results;
  }
};

/**
 * Clear all pending orders (use with caution)
 */
export const clearPendingOrders = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(PENDING_ORDERS_KEY);
    console.log('All pending orders cleared');
  } catch (error: any) {
    console.error('Error clearing pending orders:', error);
    throw new Error(error.message || 'Failed to clear pending orders');
  }
};

