// PaymentScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import RazorpayCheckout from 'react-native-razorpay';
import { SCREEN_NAME } from '../Const/ScreenName.const';
import { selectCartTotal, selectCartItems } from '../store/selectors';
import { clearCart } from '../store/cartSlice';
import { Color, FontSize, CURRENCY } from '../GlobalStyles';

// Replace with your Razorpay Key ID from Razorpay Dashboard
const RAZORPAY_KEY_ID = 'YOUR_RAZORPAY_KEY_ID'; // Get this from https://dashboard.razorpay.com/app/keys

const PaymentScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (cartTotal <= 0) {
      Alert.alert('Error', 'Cart is empty. Please add items to cart.');
      return;
    }

    if (RAZORPAY_KEY_ID === 'YOUR_RAZORPAY_KEY_ID') {
      Alert.alert(
        'Configuration Required',
        'Please set your Razorpay Key ID in PaymentScreen.tsx. Get it from https://dashboard.razorpay.com/app/keys'
      );
      return;
    }

    setIsProcessing(true);

    try {
      // Create order options
      const options = {
        description: 'Food Order Payment',
        image: 'https://your-logo-url.com/logo.png', // Optional: Add your app logo
        currency: 'INR',
        key: RAZORPAY_KEY_ID,
        amount: Math.round(cartTotal * 100), // Amount in paise (multiply by 100)
        name: 'Food App',
        prefill: {
          email: 'customer@example.com', // You can get this from user profile
          contact: '9999999999', // You can get this from user profile
          name: 'Customer Name', // You can get this from user profile
        },
        theme: { color: Color.mainColor },
        order_id: '', // You can generate this from your backend
        notes: {
          order_items: cartItems.map(item => `${item.label} x${item.quantity}`).join(', '),
        },
      };

      // Open Razorpay checkout
      const data = await RazorpayCheckout.open(options);

      // Handle successful payment
      console.log('Payment Success:', data);
      
      // Verify payment on your backend (recommended)
      // await verifyPayment(data.razorpay_payment_id, data.razorpay_order_id, data.razorpay_signature);

      // Clear cart after successful payment
      dispatch(clearCart());

      Alert.alert(
        'Payment Successful!',
        `Payment ID: ${data.razorpay_payment_id}`,
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate(SCREEN_NAME.HOME as never),
          },
        ]
      );
    } catch (error: any) {
      console.log('Payment Error:', error);
      
      // Handle payment cancellation or error
      if (error.code === 'NETWORK_ERROR') {
        Alert.alert('Network Error', 'Please check your internet connection and try again.');
      } else if (error.code === 'BAD_REQUEST_ERROR') {
        Alert.alert('Payment Error', 'Invalid payment details. Please try again.');
      } else if (error.code === 'SERVER_ERROR') {
        Alert.alert('Server Error', 'Something went wrong. Please try again later.');
      } else if (error.code !== 'PAYMENT_CANCELLED') {
        Alert.alert('Payment Failed', error.description || 'Payment could not be completed. Please try again.');
      }
      // If payment was cancelled, we don't show an error
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Payment</Text>
        
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryLabel}>Order Summary</Text>
          <View style={styles.itemRow}>
            <Text style={styles.itemLabel}>Items:</Text>
            <Text style={styles.itemValue}>{cartItems.length}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Amount:</Text>
            <Text style={styles.totalAmount}>{CURRENCY.INR}{cartTotal.toFixed(2)}</Text>
          </View>
        </View>

        <Pressable
          style={[styles.payButton, isProcessing && styles.payButtonDisabled]}
          onPress={handlePayment}
          disabled={isProcessing || cartTotal <= 0}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: FontSize.size_5xl,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: Color.colorBlack,
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
