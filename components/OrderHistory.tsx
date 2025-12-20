// src/components/Timeline.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { ORDER, Order } from '../Const/Order.const';
import { CURRENCY } from '../GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import { SCREEN_NAME } from '../Const/ScreenName.const';

const OrderHistory = ({ data = ORDER }: { data?: Order[] }) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handlePayment = (order: any) => {
    // Navigate to payment screen for retry
    navigation.navigate(SCREEN_NAME.PAYMENT as never);
  };

  return (

    <ScrollView contentContainerStyle={styles.container}>
      {data.map((order: any, index: number) => (
        <Card key={index} style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.orderId}>#{order.id}</Text>
            <Text style={styles.date}>{order.date}</Text>
          </View>
          <View style={styles.items}>
            <Text style={styles.itemsHeader}>Items - {order.items.length}</Text>
            {order.items.map((item: any, index: number) => (
              <View key={index} style={styles.item}>
                <Text style={styles.itemName}>{item.quantity} X {item.name}</Text>
                <Text style={styles.itemPrice}>{CURRENCY.INR}{typeof item.price === 'number' ? item.price.toFixed(2) : '0.00'}</Text>
              </View>
            ))}
          </View>
          <View style={styles.instruction}>
            <Text style={styles.instructionHeader}>Order Instruction</Text>
            <Text>{order.instruction}</Text>
          </View>
          <View style={styles.item}>
            <Text>Total: </Text>
            <Text style={styles.totalAmount}> {CURRENCY.INR}{typeof order.total === 'number' ? order.total.toFixed(2) : '0.00'}</Text>
          </View>
          <View style={styles.item}>
            <Text>Payment Method: </Text>
            <Text >{order.paymentMethod}</Text>
          </View>
          {order.paymentStatus === 'failed' && (
            <View style={styles.paymentStatusContainer}>
              <Text style={styles.paymentFailedText}>Payment Failed</Text>
              {order.errorMessage && (
                <Text style={styles.errorMessage}>{order.errorMessage}</Text>
              )}
              <Button 
                mode="contained" 
                style={styles.payButton}
                onPress={() => handlePayment(order)}
              >
                Pay Now
              </Button>
            </View>
          )}
          <View style={styles.footer}>
            <View style={styles.total}>

              <Text></Text>
            </View>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    padding: 16,
  },
  card: {
    marginBottom: 10,

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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  total: {
    alignItems: 'flex-end',
  },
  totalAmount: {
    fontWeight: 'bold',
    color: '#e74c3c',
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
    marginBottom: 8,
  },
  payButton: {
    backgroundColor: '#e74c3c',
    marginTop: 8,
  },
});

export default OrderHistory;
