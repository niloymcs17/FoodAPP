// src/components/Timeline.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { ORDER, Order } from '../Const/Order.const';
import { CURRENCY } from '../GlobalStyles';

const Ongoingorder = ({data}:Order[] = ORDER) => {

  return (

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
              <Text>{item.quantity} X {item.name}</Text>
              <Text >{CURRENCY.INR}{item.price.toFixed(2)}</Text>
            </View>
          ))}
        </View>
        <View style={styles.instruction}>
          <Text style={styles.instructionHeader}>Order Instruction</Text>
          <Text>{order.instruction}</Text>
        </View>
        <View style={styles.item}>
              <Text>Total: </Text>
              <Text style={styles.totalAmount}> {CURRENCY.INR}{order.total}</Text>
            </View>
            <View  style={styles.item}>
              <Text>Payment Method: </Text>
              <Text >{order.paymentMethod}</Text>
            </View>
        <View style={styles.footer}>
          <View style={styles.total}>
            
            <Text></Text>
          </View>
        </View>
        <View style={styles.actions}>
          <Button mode="contained" style={styles.cancelButton}>Cancel</Button>
          <Button mode="contained" style={styles.trackButton}>Track</Button>
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
    marginBottom: 4,
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
});


export default Ongoingorder;
