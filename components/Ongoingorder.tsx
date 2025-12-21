// src/components/Timeline.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { ORDER, Order } from '../Const/Order.const';
import { CURRENCY } from '../GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { getCurrentUser, getUserData, updateOrderPaymentStatus, updateOrderStatus } from '../services/firebaseService';
import processPayment from '../services/paymentService';
import SuccessPopup from '../modals/SuccessPopup';
import ErrorPopup from '../modals/ErrorPopup';
import ConfirmationPopup from '../modals/ConfirmationPopup';

const STATUS_MESSAGES: { [key: string]: string } = {
  'pending': 'Your order is pending and will be processed soon.',
  'processing': 'Your order is being prepared.',
  'on the way': 'Your order is on the way to you.',
  'delivered': 'Your order has been delivered.',
  'cancelled': 'This order has been cancelled.',
};

const Ongoingorder = ({data = ORDER}: {data?: Order[]}) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [processingOrderId, setProcessingOrderId] = useState<string | null>(null);
  const [cancellingOrderId, setCancellingOrderId] = useState<string | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorPopupTitle, setErrorPopupTitle] = useState('Error');
  const [errorPopupMessage, setErrorPopupMessage] = useState('');
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);
  const [orderToCancel, setOrderToCancel] = useState<any>(null);

  const handlePayment = async (order: any) => {
    if (!order.id) {
      setErrorPopupTitle('Error');
      setErrorPopupMessage('Order ID is missing');
      setShowErrorPopup(true);
      return;
    }

    const currentUser = getCurrentUser();
    if (!currentUser) {
      setErrorPopupTitle('Authentication Required');
      setErrorPopupMessage('Please sign in to proceed with payment.');
      setShowErrorPopup(true);
      return;
    }

    setProcessingOrderId(order.id);

    try {
      // Get user data for payment
      let userData;
      try {
        userData = await getUserData(currentUser.uid);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Continue without userData
      }

      // Process payment directly with Razorpay
      const paymentData = await processPayment(order.total, currentUser, userData);

      // Update order in Firestore with successful payment
      await updateOrderPaymentStatus(order.id, 'success', {
        paymentId: paymentData.razorpay_payment_id,
        razorpayOrderId: paymentData.razorpay_order_id,
        razorpaySignature: paymentData.razorpay_signature,
      });

      setSuccessMessage(`Payment ID: ${paymentData.razorpay_payment_id}`);
      setShowSuccessPopup(true);
    } catch (error: any) {
      console.error('Payment error:', error);
      
      // Update order with failed payment status if it's not a cancellation
      if (error.code !== 'PAYMENT_CANCELLED') {
        try {
          await updateOrderPaymentStatus(order.id, 'failed', {
            errorMessage: error.message || error.description || 'Payment could not be completed.',
          });
        } catch (updateError) {
          console.error('Error updating order payment status:', updateError);
        }
      }

      // Show error message
      if (error.code === 'PAYMENT_CANCELLED') {
        // Payment was cancelled by user - don't show error
        console.log('Payment cancelled by user');
      } else {
        const errorMessage = error.message || error.description || 'Payment could not be completed.';
        setErrorPopupTitle('Payment Failed');
        setErrorPopupMessage(errorMessage);
        setShowErrorPopup(true);
      }
    } finally {
      setProcessingOrderId(null);
    }
  };

  const handleCancel = (order: any) => {
    if (!order.id) {
      setErrorPopupTitle('Error');
      setErrorPopupMessage('Order ID is missing');
      setShowErrorPopup(true);
      return;
    }

    const currentUser = getCurrentUser();
    if (!currentUser) {
      setErrorPopupTitle('Authentication Required');
      setErrorPopupMessage('Please sign in to cancel the order.');
      setShowErrorPopup(true);
      return;
    }

    // Show confirmation popup
    setOrderToCancel(order);
    setShowCancelConfirmation(true);
  };

  const confirmCancel = async () => {
    if (!orderToCancel || !orderToCancel.id) {
      setShowCancelConfirmation(false);
      return;
    }

    setShowCancelConfirmation(false);
    setCancellingOrderId(orderToCancel.id);

    try {
      await updateOrderStatus(orderToCancel.id, 'cancelled');
      setSuccessMessage('Order has been cancelled successfully.');
      setShowSuccessPopup(true);
    } catch (error: any) {
      console.error('Cancel order error:', error);
      setErrorPopupTitle('Cancel Failed');
      setErrorPopupMessage(error.message || 'Failed to cancel the order. Please try again.');
      setShowErrorPopup(true);
    } finally {
      setCancellingOrderId(null);
      setOrderToCancel(null);
    }
  };

  const handleTrack = (order: any) => {
    // Show order tracking information
    const statusMessage = STATUS_MESSAGES[order.status] || 'Order status: ' + order.status;
    setSuccessMessage(`Order #${order.id}\nStatus: ${order.status}\n\n${statusMessage}`);
    setShowSuccessPopup(true);
  };

  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
       {data.map((order:any, index:number) => (
      <Card key={index} style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.orderId}>#{order.id}</Text>
          <Text style={styles.date}>{order.date}</Text>
        </View>
        <View style={styles.items}>
          <Text style={styles.itemsHeader}>Items - {order.items.length}</Text>
          {order.items.map((item:any, index:number) => (
            <View key={index} style={styles.item}>
              <Text style={styles.itemName}>{item.quantity} X {item.name}</Text>
              <Text style={styles.itemPrice}>{CURRENCY.INR}{typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}</Text>
            </View>
          ))}
        </View>
        {order.instruction && (
          <View style={styles.instruction}>
            <Text style={styles.instructionHeader}>Order Instruction</Text>
            <Text>{order.instruction}</Text>
          </View>
        )}
        <View style={styles.item}>
              <Text>Total: </Text>
              <Text style={styles.totalAmount}> {CURRENCY.INR}{typeof order.total === 'number' ? order.total.toFixed(2) : '0.00'}</Text>
            </View>
            <View  style={styles.item}>
              <Text>Payment Method: </Text>
              <Text >{order.paymentMethod}</Text>
            </View>
            {order.paymentStatus === 'failed' && (
              <View style={styles.paymentStatusContainer}>
                <Text style={styles.paymentFailedText}>Payment Failed</Text>
                {order.errorMessage && (
                  <Text style={styles.errorMessage}>{order.errorMessage}</Text>
                )}
              </View>
            )}
        
        <View style={styles.actions}>
          {order.paymentStatus === 'failed' ? (
            <Button 
              mode="contained" 
              style={styles.payButton}
              onPress={() => handlePayment(order)}
              disabled={processingOrderId === order.id}
            >
              {processingOrderId === order.id ? (
                <ActivityIndicator color="#fff" />
              ) : (
                'Pay Now'
              )}
            </Button>
          ) : (
            <>
              <Button 
                mode="contained" 
                style={styles.cancelButton}
                onPress={() => handleCancel(order)}
                disabled={cancellingOrderId === order.id}
              >
                {cancellingOrderId === order.id ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  'Cancel'
                )}
              </Button>
              <Button 
                mode="contained" 
                style={styles.trackButton}
                onPress={() => handleTrack(order)}
              >
                Track
              </Button>
            </>
          )}
        </View>
      </Card>
        ))}
    </ScrollView>
    <SuccessPopup
      isVisible={showSuccessPopup}
      message={successMessage}
      onClose={() => setShowSuccessPopup(false)}
    />
    <ErrorPopup
      isVisible={showErrorPopup}
      title={errorPopupTitle}
      message={errorPopupMessage}
      onClose={() => setShowErrorPopup(false)}
    />
    <ConfirmationPopup
      isVisible={showCancelConfirmation}
      title="Cancel Order"
      message={`Are you sure you want to cancel order #${orderToCancel?.id}? This action cannot be undone.`}
      confirmText="Yes, Cancel"
      cancelText="No, Keep Order"
      confirmButtonColor="#e74c3c"
      onConfirm={confirmCancel}
      onCancel={() => {
        setShowCancelConfirmation(false);
        setOrderToCancel(null);
      }}
    />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    padding: 16,
  },
  card: {
    marginBottom:10,

    padding: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderId: {
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    color: '#999',
  },
  items: {
    marginBottom: 16,
  },
  itemsHeader: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  itemName: {
    flex: 0.75,
    maxWidth: '75%',
  },
  itemPrice: {
    flexShrink: 0,
    marginLeft: 8,
    alignSelf: 'flex-start',
  },
  instruction: {
    marginBottom: 16,
  },
  instructionHeader: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  totalAmount: {
    fontWeight: 'bold',
    color: '#ff9800',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#e74c3c',
  },
  trackButton: {
    backgroundColor: '#2ecc71',
  },
  paymentStatusContainer: {
    backgroundColor: '#fff3cd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  paymentFailedText: {
    color: '#856404',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  errorMessage: {
    color: '#856404',
    fontSize: 12,
  },
  payButton: {
    backgroundColor: '#e74c3c',
    flex: 1,
  },
});


export default Ongoingorder;
