// Firebase Service - Common Firebase operations
import {
  auth,
  db,
  realtimeDb,
  storage,
} from '../config/firebase';
import {
  // Auth
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  User,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  // Firestore
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
  onSnapshot,
} from 'firebase/firestore';
import {
  // Storage
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

// ==================== AUTHENTICATION ====================

/**
 * Register a new user with email and password
 */
export const registerUser = async (
  email: string,
  password: string,
  displayName?: string
): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Update user profile with display name
    if (displayName) {
      await updateProfile(user, { displayName });
    }

    // Create user document in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      displayName: displayName || '',
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });

    return user;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to register user');
  }
};

/**
 * Sign in with email and password
 */
export const signInUser = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to sign in');
  }
};

/**
 * Sign out current user
 */
export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message || 'Failed to sign out');
  }
};

/**
 * Send password reset email
 */
export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error: any) {
    throw new Error(error.message || 'Failed to send password reset email');
  }
};

/**
 * Get current user
 */
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

/**
 * Listen to auth state changes
 */
export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// ==================== FIRESTORE - USERS ====================

/**
 * Get user document from Firestore
 */
export const getUserData = async (userId: string) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return { id: userDoc.id, ...userDoc.data() };
    }
    return null;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to get user data');
  }
};

/**
 * Update user document in Firestore
 */
export const updateUserData = async (userId: string, data: any) => {
  try {
    await updateDoc(doc(db, 'users', userId), {
      ...data,
      updatedAt: Timestamp.now(),
    });
  } catch (error: any) {
    throw new Error(error.message || 'Failed to update user data');
  }
};

// ==================== FIRESTORE - ORDERS ====================

/**
 * Order status type (for order fulfillment)
 */
export type OrderStatus = 'pending' | 'processing' | 'on the way' | 'delivered' | 'cancelled';

/**
 * Payment status type (for payment processing)
 */
export type PaymentStatus = 'success' | 'failed' | 'pending';

/**
 * Create a new order (uses Firestore)
 * Saves to orders/{userId}/orders/{orderId}
 * @param orderData - Order data to save
 * @param paymentStatus - Payment status: 'success' | 'failed' | 'pending' (default: 'success')
 * @returns Promise with order ID and data, or throws error
 */
export const createOrder = async (
  orderData: any,
  paymentStatus: PaymentStatus = 'success'
): Promise<{ id: string; success: boolean }> => {
  try {
    const user = getCurrentUser();
    if (!user) throw new Error('User not authenticated');

    // Save to orders/{userId}/orders/{orderId}
    const ordersCollection = collection(db, 'orders', user.uid, 'orders');
    const orderRef = doc(ordersCollection);
    
    await setDoc(orderRef, {
      ...orderData,
      userId: user.uid,
      status: orderData.status || ('pending' as OrderStatus),
      paymentStatus: paymentStatus,
      createdAt: orderData.createdAt || Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    
    return { id: orderRef.id, success: true };
  } catch (error: any) {
    // Check if it's a network error
    const isNetworkError = 
      error.code === 'unavailable' ||
      error.code === 'deadline-exceeded' ||
      error.message?.toLowerCase().includes('network') ||
      error.message?.toLowerCase().includes('offline') ||
      error.message?.toLowerCase().includes('failed to get document');
    
    if (isNetworkError) {
      // Re-throw with a specific error code for network errors
      const networkError: any = new Error(error.message || 'Network error: Failed to create order');
      networkError.code = 'NETWORK_ERROR';
      networkError.isNetworkError = true;
      throw networkError;
    }
    
    throw new Error(error.message || 'Failed to create order');
  }
};

/**
 * Get user orders (uses Firestore)
 * Reads from orders/{userId}/orders
 */
export const getUserOrders = async (userId: string) => {
  try {
    const ordersCollection = collection(db, 'orders', userId, 'orders');
    const ordersQuery = query(
      ordersCollection,
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(ordersQuery);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error: any) {
    throw new Error(error.message || 'Failed to get orders');
  }
};

/**
 * Update order status (uses Firestore)
 * Updates in orders/{userId}/orders/{orderId}
 * @param orderId - The order ID to update
 * @param status - The new status: 'pending' | 'processing' | 'on the way' | 'delivered' | 'cancelled'
 */
export const updateOrderStatus = async (orderId: string, status: OrderStatus) => {
  try {
    const user = getCurrentUser();
    if (!user) throw new Error('User not authenticated');

    const orderRef = doc(db, 'orders', user.uid, 'orders', orderId);
    await updateDoc(orderRef, {
      status,
      updatedAt: Timestamp.now(),
    });
  } catch (error: any) {
    throw new Error(error.message || 'Failed to update order');
  }
};

/**
 * Get order by ID (uses Firestore)
 * Reads from orders/{userId}/orders/{orderId}
 */
export const getOrderById = async (userId: string, orderId: string) => {
  try {
    const orderRef = doc(db, 'orders', userId, 'orders', orderId);
    const orderDoc = await getDoc(orderRef);
    if (orderDoc.exists()) {
      return { id: orderDoc.id, ...orderDoc.data() };
    }
    return null;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to get order');
  }
};

/**
 * Delete order (uses Firestore)
 * Note: Users cannot delete orders per security rules
 * This function is kept for admin/backend use only
 */
export const deleteOrder = async (orderId: string) => {
  try {
    const user = getCurrentUser();
    if (!user) throw new Error('User not authenticated');

    const orderRef = doc(db, 'orders', user.uid, 'orders', orderId);
    await deleteDoc(orderRef);
  } catch (error: any) {
    throw new Error(error.message || 'Failed to delete order');
  }
};

// ==================== FIRESTORE - ADDRESSES ====================

/**
 * Add user address
 * Saves to users/{userId}/addresses/{addressId}
 */
export const addUserAddress = async (addressData: any) => {
  try {
    const user = getCurrentUser();
    if (!user) throw new Error('User not authenticated');

    // Save to users/{userId}/addresses/{addressId}
    const addressesCollection = collection(db, 'users', user.uid, 'addresses');
    const addressRef = doc(addressesCollection);
    
    await setDoc(addressRef, {
      ...addressData,
      userId: user.uid,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return { id: addressRef.id, ...addressData };
  } catch (error: any) {
    throw new Error(error.message || 'Failed to add address');
  }
};

/**
 * Get user addresses
 * Reads from users/{userId}/addresses
 */
export const getUserAddresses = async (userId: string) => {
  try {
    const addressesCollection = collection(db, 'users', userId, 'addresses');
    const addressesQuery = query(
      addressesCollection,
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(addressesQuery);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error: any) {
    throw new Error(error.message || 'Failed to get addresses');
  }
};

/**
 * Update user address
 * Updates in users/{userId}/addresses/{addressId}
 */
export const updateUserAddress = async (userId: string, addressId: string, addressData: any) => {
  try {
    const addressRef = doc(db, 'users', userId, 'addresses', addressId);
    await updateDoc(addressRef, {
      ...addressData,
      updatedAt: Timestamp.now(),
    });
  } catch (error: any) {
    throw new Error(error.message || 'Failed to update address');
  }
};

/**
 * Delete user address
 * Deletes from users/{userId}/addresses/{addressId}
 */
export const deleteUserAddress = async (userId: string, addressId: string) => {
  try {
    const addressRef = doc(db, 'users', userId, 'addresses', addressId);
    await deleteDoc(addressRef);
  } catch (error: any) {
    throw new Error(error.message || 'Failed to delete address');
  }
};

// ==================== STORAGE ====================

/**
 * Upload image to Firebase Storage
 */
export const uploadImage = async (
  imageUri: string,
  path: string
): Promise<string> => {
  try {
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const imageRef = storageRef(storage, path);
    await uploadBytes(imageRef, blob);
    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to upload image');
  }
};

/**
 * Delete image from Firebase Storage
 */
export const deleteImage = async (path: string): Promise<void> => {
  try {
    const imageRef = storageRef(storage, path);
    await deleteObject(imageRef);
  } catch (error: any) {
    throw new Error(error.message || 'Failed to delete image');
  }
};

// ==================== REALTIME DATABASE ====================

import {
  ref as databaseRef,
  set,
  get,
  update,
  remove,
  push,
  onValue,
  off,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  serverTimestamp,
  query as databaseQuery,
  orderByChild,
  equalTo,
  limitToFirst,
  limitToLast,
  startAt,
  endAt,
  onDisconnect,
} from 'firebase/database';

/**
 * Write data to Realtime Database
 */
export const writeRealtimeData = async (path: string, data: any): Promise<void> => {
  try {
    if (!realtimeDb) {
      throw new Error('Realtime Database is not initialized. Please set EXPO_PUBLIC_FIREBASE_DATABASE_URL in your .env file.');
    }
    const dbRef = databaseRef(realtimeDb, path);
    await set(dbRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
  } catch (error: any) {
    throw new Error(error.message || 'Failed to write data');
  }
};

/**
 * Read data from Realtime Database
 */
export const readRealtimeData = async (path: string): Promise<any> => {
  try {
    if (!realtimeDb) {
      throw new Error('Realtime Database is not initialized. Please set EXPO_PUBLIC_FIREBASE_DATABASE_URL in your .env file.');
    }
    const dbRef = databaseRef(realtimeDb, path);
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    }
    return null;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to read data');
  }
};

/**
 * Update data in Realtime Database
 */
export const updateRealtimeData = async (path: string, data: any): Promise<void> => {
  try {
    if (!realtimeDb) {
      throw new Error('Realtime Database is not initialized. Please set EXPO_PUBLIC_FIREBASE_DATABASE_URL in your .env file.');
    }
    const dbRef = databaseRef(realtimeDb, path);
    await update(dbRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
  } catch (error: any) {
    throw new Error(error.message || 'Failed to update data');
  }
};

/**
 * Delete data from Realtime Database
 */
export const deleteRealtimeData = async (path: string): Promise<void> => {
  try {
    if (!realtimeDb) {
      throw new Error('Realtime Database is not initialized. Please set EXPO_PUBLIC_FIREBASE_DATABASE_URL in your .env file.');
    }
    const dbRef = databaseRef(realtimeDb, path);
    await remove(dbRef);
  } catch (error: any) {
    throw new Error(error.message || 'Failed to delete data');
  }
};

/**
 * Push data to a list in Realtime Database (auto-generates key)
 */
export const pushRealtimeData = async (path: string, data: any): Promise<string> => {
  try {
    if (!realtimeDb) {
      throw new Error('Realtime Database is not initialized. Please set EXPO_PUBLIC_FIREBASE_DATABASE_URL in your .env file.');
    }
    const dbRef = databaseRef(realtimeDb, path);
    const newRef = push(dbRef);
    await set(newRef, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return newRef.key || '';
  } catch (error: any) {
    throw new Error(error.message || 'Failed to push data');
  }
};

/**
 * Listen to real-time changes at a path
 */
export const listenToRealtimeData = (
  path: string,
  callback: (data: any) => void
): (() => void) => {
  if (!realtimeDb) {
    throw new Error('Realtime Database is not initialized. Please set EXPO_PUBLIC_FIREBASE_DATABASE_URL in your .env file.');
  }
  const dbRef = databaseRef(realtimeDb, path);
  
  const unsubscribe = onValue(dbRef, (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    } else {
      callback(null);
    }
  });

  // Return unsubscribe function
  return () => {
    off(dbRef);
    unsubscribe();
  };
};

/**
 * Listen to child added events
 */
export const listenToChildAdded = (
  path: string,
  callback: (data: any, key: string) => void
): (() => void) => {
  if (!realtimeDb) {
    throw new Error('Realtime Database is not initialized. Please set EXPO_PUBLIC_FIREBASE_DATABASE_URL in your .env file.');
  }
  const dbRef = databaseRef(realtimeDb, path);
  
  const unsubscribe = onChildAdded(dbRef, (snapshot) => {
    callback(snapshot.val(), snapshot.key || '');
  });

  return () => {
    off(dbRef);
    unsubscribe();
  };
};

/**
 * Listen to child changed events
 */
export const listenToChildChanged = (
  path: string,
  callback: (data: any, key: string) => void
): (() => void) => {
  if (!realtimeDb) {
    throw new Error('Realtime Database is not initialized. Please set EXPO_PUBLIC_FIREBASE_DATABASE_URL in your .env file.');
  }
  const dbRef = databaseRef(realtimeDb, path);
  
  const unsubscribe = onChildChanged(dbRef, (snapshot) => {
    callback(snapshot.val(), snapshot.key || '');
  });

  return () => {
    off(dbRef);
    unsubscribe();
  };
};

/**
 * Listen to child removed events
 */
export const listenToChildRemoved = (
  path: string,
  callback: (data: any, key: string) => void
): (() => void) => {
  if (!realtimeDb) {
    throw new Error('Realtime Database is not initialized. Please set EXPO_PUBLIC_FIREBASE_DATABASE_URL in your .env file.');
  }
  const dbRef = databaseRef(realtimeDb, path);
  
  const unsubscribe = onChildRemoved(dbRef, (snapshot) => {
    callback(snapshot.val(), snapshot.key || '');
  });

  return () => {
    off(dbRef);
    unsubscribe();
  };
};

/**
 * Query Realtime Database with filters
 */
export const queryRealtimeData = async (
  path: string,
  options?: {
    orderBy?: string;
    equalTo?: any;
    startAt?: any;
    endAt?: any;
    limitToFirst?: number;
    limitToLast?: number;
  }
): Promise<any[]> => {
  try {
    if (!realtimeDb) {
      throw new Error('Realtime Database is not initialized. Please set EXPO_PUBLIC_FIREBASE_DATABASE_URL in your .env file.');
    }
    let dbRef: any = databaseRef(realtimeDb, path);

    // Apply query filters
    if (options?.orderBy) {
      dbRef = databaseQuery(dbRef, orderByChild(options.orderBy));
      
      if (options?.equalTo !== undefined) {
        dbRef = databaseQuery(dbRef, equalTo(options.equalTo));
      }
      
      if (options?.startAt !== undefined) {
        dbRef = databaseQuery(dbRef, startAt(options.startAt));
      }
      
      if (options?.endAt !== undefined) {
        dbRef = databaseQuery(dbRef, endAt(options.endAt));
      }
    }

    if (options?.limitToFirst) {
      dbRef = databaseQuery(dbRef, limitToFirst(options.limitToFirst));
    }

    if (options?.limitToLast) {
      dbRef = databaseQuery(dbRef, limitToLast(options.limitToLast));
    }

    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      // Convert object to array if needed
      if (typeof data === 'object' && !Array.isArray(data)) {
        return Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
      }
      return Array.isArray(data) ? data : [data];
    }
    return [];
  } catch (error: any) {
    throw new Error(error.message || 'Failed to query data');
  }
};


/**
 * Listen to user orders in real-time (uses Firestore)
 * Listens to orders/{userId}/orders
 */
export const listenToUserOrders = (
  userId: string,
  callback: (orders: any[]) => void
): (() => void) => {
  const ordersCollection = collection(db, 'orders', userId, 'orders');
  const ordersQuery = query(ordersCollection, orderBy('createdAt', 'desc'));
  
  return onSnapshot(ordersQuery, (querySnapshot) => {
    const orders = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(orders);
  });
};

// ==================== CART ====================
// NOTE: Cart should be stored locally (Redux/AsyncStorage) and NOT in database
// These functions are kept for backward compatibility but should not be used
// Use Redux store for cart management instead

/**
 * @deprecated Cart should be stored locally, not in database
 * Save user cart to Realtime Database (DEPRECATED - use Redux instead)
 */
export const saveUserCart = async (cartData: any): Promise<void> => {
  console.warn('saveUserCart is deprecated. Cart should be stored locally using Redux.');
  // Function kept for backward compatibility but should not be used
  // Cart should be managed through Redux store
};

/**
 * @deprecated Cart should be stored locally, not in database
 * Get user cart from Realtime Database (DEPRECATED - use Redux instead)
 */
export const getUserCart = async (userId: string): Promise<any> => {
  console.warn('getUserCart is deprecated. Cart should be stored locally using Redux.');
  return null;
};

/**
 * @deprecated Cart should be stored locally, not in database
 * Listen to user cart in real-time (DEPRECATED - use Redux instead)
 */
export const listenToUserCart = (
  userId: string,
  callback: (cart: any) => void
): (() => void) => {
  console.warn('listenToUserCart is deprecated. Cart should be stored locally using Redux.');
  return () => {}; // Return empty unsubscribe function
};

// ==================== REALTIME DATABASE - PRESENCE ====================

/**
 * Set user online status
 */
export const setUserOnline = async (userId: string): Promise<void> => {
  try {
    if (!realtimeDb) {
      throw new Error('Realtime Database is not initialized. Please set EXPO_PUBLIC_FIREBASE_DATABASE_URL in your .env file.');
    }
    const presencePath = `presence/${userId}`;
    const connectedRef = databaseRef(realtimeDb, '.info/connected');
    
    onValue(connectedRef, (snapshot) => {
      if (snapshot.val() === true) {
        const userStatusRef = databaseRef(realtimeDb!, presencePath);
        set(userStatusRef, {
          online: true,
          lastSeen: serverTimestamp(),
        });

        // Set offline when disconnected
        onDisconnect(userStatusRef).set({
          online: false,
          lastSeen: serverTimestamp(),
        });
      }
    });
  } catch (error: any) {
    throw new Error(error.message || 'Failed to set user online');
  }
};

/**
 * Set user offline status
 */
export const setUserOffline = async (userId: string): Promise<void> => {
  try {
    const presencePath = `presence/${userId}`;
    await updateRealtimeData(presencePath, {
      online: false,
      lastSeen: serverTimestamp(),
    });
  } catch (error: any) {
    throw new Error(error.message || 'Failed to set user offline');
  }
};

