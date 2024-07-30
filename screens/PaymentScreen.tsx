// PaymentScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from '../Const/ScreenName.const';

const PaymentScreen = () => {
  const navigation = useNavigation();

  const handlePayment = () => {
    // Handle payment logic here
    alert('Payment Successful!');
    navigation.navigate(SCREEN_NAME.HOME);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment</Text>
      <Text style={styles.totalAmount}>Total Amount: $100</Text>
      <Pressable style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  totalAmount: {
    fontSize: 18,
    marginBottom: 20,
  },
  payButton: {
    padding: 16,
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PaymentScreen;
