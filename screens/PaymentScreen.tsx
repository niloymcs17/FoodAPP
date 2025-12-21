// PaymentScreen.tsx
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { SCREEN_NAME } from '../Const/ScreenName.const';
import { selectCartTotal, selectCartItems } from '../store/selectors';
import { clearCart } from '../store/cartSlice';
import { Color, FontSize, CURRENCY } from '../GlobalStyles';
import { createOrder, getCurrentUser, getUserData } from '../services/firebaseService';
import { savePendingOrder } from '../services/orderStorageService';
import { selectSelectedAddress } from '../store/addressSlice';
import { User } from 'firebase/auth';
import ErrorPopup from '../modals/ErrorPopup';
import SuccessPopup from '../modals/SuccessPopup';
import processPayment from '../services/paymentService';

type PaymentScreenRouteProp = RouteProp<{ params: { order?: any } }, 'params'>;

const PaymentScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<PaymentScreenRouteProp>();
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const selectedAddress = useSelector(selectSelectedAddress);
  
  // Get order from route params if available (for retry payment from My Orders)
  const orderFromRoute = route.params?.order;
  
  // Use order data if available, otherwise use cart data
  const paymentTotal = orderFromRoute ? orderFromRoute.total : cartTotal;
  const paymentItems = orderFromRoute 
    ? orderFromRoute.items.map((item: any) => ({
        id: item.id || '',
        label: item.name || item.label || 'Unknown Item',
        price: typeof item.price === 'number' ? item.price : parseFloat(item.price) || 0,
        quantity: item.quantity || 1,
      }))
    : cartItems;
  const paymentAddress = orderFromRoute ? orderFromRoute.address : selectedAddress;
  const [isProcessing, setIsProcessing] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorPopupTitle, setErrorPopupTitle] = useState('Error');
  const [errorPopupMessage, setErrorPopupMessage] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch user and userData on component mount
  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);

    if (currentUser) {
      getUserData(currentUser.uid)
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          // Continue without userData - payment service will handle empty values
        });
    }

    // Cleanup timeout on unmount
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  const handlePayment = async () => {
    if (paymentTotal <= 0) {
      setErrorPopupTitle('Error');
      setErrorPopupMessage(orderFromRoute 
        ? 'Order amount is invalid. Please contact support.' 
        : 'Cart is empty. Please add items to cart.');
      setShowErrorPopup(true);
      return;
    }

    // Check if user is authenticated
    const currentUser = user || getCurrentUser();
    if (!currentUser) {
      setErrorPopupTitle('Authentication Required');
      setErrorPopupMessage('Please sign in to proceed with payment.');
      setShowErrorPopup(true);
      return;
    }

    setIsProcessing(true);

    try {
      // Use payment service to process payment
      const data = await processPayment(paymentTotal, currentUser, userData);

      // Handle successful payment
      console.log('Payment Success:', data);

      // Verify payment on your backend (recommended)
      // await verifyPayment(data.razorpay_payment_id, data.razorpay_order_id, data.razorpay_signature);

      // Prepare order data
      const orderData = {
        items: paymentItems.map((item: any) => ({
          id: item.id,
          label: item.label,
          price: item.price,
          quantity: item.quantity,
        })),
        total: paymentTotal,
        address: paymentAddress || {},
        paymentMethod: 'Razorpay',
        paymentId: data.razorpay_payment_id,
        razorpayOrderId: data.razorpay_order_id,
        razorpaySignature: data.razorpay_signature,
        // Include order ID if retrying payment for existing order
        ...(orderFromRoute?.id && { orderId: orderFromRoute.id }),
      };

      // Try to create order in Firestore
      let orderCreated = false;
      try {
        await createOrder(orderData, 'success');
        console.log('Order created successfully in Firestore');
        orderCreated = true;
      } catch (orderError: any) {
        console.error('Error creating order in Firestore:', orderError);

        // Check if it's a network error
        if (orderError.isNetworkError || orderError.code === 'NETWORK_ERROR') {
          // Save to AsyncStorage for retry later
          try {
            await savePendingOrder(orderData);
            console.log('Order saved to local storage for retry');
            // Still show success since payment was successful
            orderCreated = true; // Consider it handled
          } catch (storageError: any) {
            console.error('Error saving order to local storage:', storageError);
            // Payment succeeded but we couldn't save order anywhere
            // Still show success but log the issue
          }
        } else {
          // Non-network error - log but don't block success flow
          console.error('Non-network error creating order:', orderError);
        }
      }

      // Clear cart after successful payment (only if order was created or saved, and it's not a retry)
      if (orderCreated) {
        // Only clear cart if it's a new order, not a retry payment
        if (!orderFromRoute) {
          dispatch(clearCart());
        }
        setSuccessMessage(`Payment ID: ${data.razorpay_payment_id}`);
        setShowSuccessPopup(true);
        // Navigate to My Orders page after 2 seconds
        navigationTimeoutRef.current = setTimeout(() => {
          setShowSuccessPopup(false);
          navigation.navigate(SCREEN_NAME.ORDER as never);
          navigationTimeoutRef.current = null;
        }, 2000);
      } else {
        // This shouldn't happen, but handle it just in case
        setErrorPopupTitle('Payment Successful');
        setErrorPopupMessage('Payment was successful, but there was an issue saving your order. Please contact support.');
        setShowErrorPopup(true);
      }
    } catch (error: any) {
      console.log('Payment Error:', error);
      console.log('Error code:', error.code);
      console.log('Error message:', error.message);
      console.log('Error description:', error.description);

      // Handle payment cancellation or error
      if (error.code === 'PAYMENT_CANCELLED') {
        // Payment was cancelled by user - don't show error, just stop loading
        console.log('Payment cancelled by user');
      } else {
        // Payment failed - create order with paymentStatus: "failed"
        const errorMessage = error.message || error.description || 'Payment could not be completed.';

        // Prepare order data with failed payment status
        const orderData = {
          items: paymentItems.map((item: any) => ({
            id: item.id,
            label: item.label,
            price: item.price,
            quantity: item.quantity,
          })),
          total: paymentTotal,
          address: paymentAddress || {},
          paymentMethod: 'Razorpay',
          errorMessage: errorMessage,
          // Include order ID if retrying payment for existing order
          ...(orderFromRoute?.id && { orderId: orderFromRoute.id }),
        };

        // Try to create order in Firestore with paymentStatus: "failed"
        try {
          await createOrder(orderData, 'failed');
          console.log('Order created with failed payment status');
        } catch (orderError: any) {
          console.error('Error creating failed payment order:', orderError);
          // If Firestore write fails, try to save to AsyncStorage
          if (orderError.isNetworkError || orderError.code === 'NETWORK_ERROR') {
            try {
              await savePendingOrder({ ...orderData, paymentStatus: 'failed' });
              console.log('Failed payment order saved to local storage');
            } catch (storageError) {
              console.error('Error saving failed payment order to local storage:', storageError);
            }
          }
        }

        // Don't clear cart on payment failure - user may want to retry
        // Show error message
        if (error.code === 'NETWORK_ERROR') {
          setErrorPopupTitle('Network Error');
          setErrorPopupMessage('Please check your internet connection and try again.');
          setShowErrorPopup(true);
        } else if (error.code === 'BAD_REQUEST_ERROR') {
          setErrorPopupTitle('Payment Error');
          setErrorPopupMessage('Invalid payment details. Please try again.');
          setShowErrorPopup(true);
        } else if (error.code === 'SERVER_ERROR') {
          setErrorPopupTitle('Server Error');
          setErrorPopupMessage('Something went wrong. Please try again later.');
          setShowErrorPopup(true);
        } else {
          setErrorPopupTitle('Payment Failed');
          setErrorPopupMessage(errorMessage);
          setShowErrorPopup(true);
        }
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header with Back Button */}
      <View style={styles.headerContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.backButtonPressed
          ]}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.backButtonContainer}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </View>
        </Pressable>
        <Text style={styles.headerTitle}>Payment</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryLabel}>Order Summary</Text>
          <View style={styles.itemRow}>
            <Text style={styles.itemLabel}>Items:</Text>
            <Text style={styles.itemValue}>{paymentItems.length}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Amount:</Text>
            <Text style={styles.totalAmount}>{CURRENCY.INR}{paymentTotal.toFixed(2)}</Text>
          </View>
        </View>

        <Pressable
          style={[styles.payButton, isProcessing && styles.payButtonDisabled]}
          onPress={handlePayment}
          disabled={isProcessing || paymentTotal <= 0}
        >
          {isProcessing ? (
            <ActivityIndicator color={Color.colorWhite} />
          ) : (
            <Text style={styles.payButtonText}>Pay with Razorpay</Text>
          )}
        </Pressable>

        <Text style={styles.note}>
          Note: You'll be redirected to Razorpay secure payment gateway
        </Text>
      </View>
      <ErrorPopup
        isVisible={showErrorPopup}
        title={errorPopupTitle}
        message={errorPopupMessage}
        onClose={() => {
          setShowErrorPopup(false);
          navigation.navigate(SCREEN_NAME.ORDER as never);
          dispatch(clearCart());
        }}
      />
      <SuccessPopup
        isVisible={showSuccessPopup}
        message={successMessage}
        onClose={() => {
          // Clear the timeout if user manually closes the popup
          if (navigationTimeoutRef.current) {
            clearTimeout(navigationTimeoutRef.current);
            navigationTimeoutRef.current = null;
          }
          setShowSuccessPopup(false);
          navigation.navigate(SCREEN_NAME.ORDER as never);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: Color.colorWhite,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorWhitesmoke_100,
  },
  backButton: {
    marginRight: 12,
  },
  backButtonContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Color.colorWhitesmoke_100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.95 }],
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: Color.colorBlack,
  },
  headerTitle: {
    fontSize: FontSize.size_5xl,
    fontWeight: '700',
    color: Color.colorBlack,
    letterSpacing: 0.3,
    flex: 1,
  },
  headerSpacer: {
    width: 52, // Same width as back button + margin for alignment
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  summaryContainer: {
    backgroundColor: Color.colorGray_100,
    padding: 20,
    borderRadius: 10,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
  },
  summaryLabel: {
    fontSize: FontSize.size_lg,
    fontWeight: '600',
    marginBottom: 16,
    color: Color.colorBlack,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  itemLabel: {
    fontSize: FontSize.size_base,
    color: Color.colorLightslategray_100,
  },
  itemValue: {
    fontSize: FontSize.size_base,
    fontWeight: '500',
    color: Color.colorBlack,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: Color.colorWhitesmoke_100,
  },
  totalLabel: {
    fontSize: FontSize.size_lg,
    fontWeight: '600',
    color: Color.colorBlack,
  },
  totalAmount: {
    fontSize: FontSize.size_lg,
    fontWeight: 'bold',
    color: Color.mainColor,
  },
  payButton: {
    padding: 16,
    backgroundColor: Color.mainColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    minHeight: 50,
  },
  payButtonDisabled: {
    opacity: 0.6,
  },
  payButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
    fontWeight: 'bold',
  },
  note: {
    fontSize: FontSize.size_sm,
    color: Color.colorLightslategray_100,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default PaymentScreen;
