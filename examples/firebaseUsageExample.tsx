// Example: How to use Firebase in your components
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import {
  registerUser,
  signInUser,
  signOutUser,
  getCurrentUser,
  onAuthChange,
  createOrder,
  getUserOrders,
  addUserAddress,
  getUserAddresses,
} from '../services/firebaseService';

const FirebaseExample = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = onAuthChange((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleRegister = async () => {
    try {
      setLoading(true);
      await registerUser('user@example.com', 'password123', 'John Doe');
      Alert.alert('Success', 'User registered successfully!');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await signInUser('user@example.com', 'password123');
      Alert.alert('Success', 'Signed in successfully!');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser();
      Alert.alert('Success', 'Signed out successfully!');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  const handleCreateOrder = async () => {
    if (!user) {
      Alert.alert('Error', 'Please sign in first');
      return;
    }

    try {
      setLoading(true);
      // Orders are stored in Realtime Database for real-time updates
      const order = await createOrder({
        items: [
          { id: '1', name: 'Pizza', quantity: 2, price: 500 },
          { id: '2', name: 'Burger', quantity: 1, price: 200 },
        ],
        total: 1200,
        address: {
          street: '123 Main St',
          city: 'Mumbai',
          pincode: '400001',
        },
        paymentMethod: 'Razorpay',
      });
      Alert.alert('Success', `Order created: ${order.id}`);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGetOrders = async () => {
    if (!user) {
      Alert.alert('Error', 'Please sign in first');
      return;
    }

    try {
      setLoading(true);
      const orders = await getUserOrders(user.uid);
      Alert.alert('Success', `Found ${orders.length} orders`);
      console.log('Orders:', orders);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Firebase Example
      </Text>

      {user ? (
        <>
          <Text style={{ marginBottom: 10 }}>
            Signed in as: {user.email}
          </Text>
          <Button title="Sign Out" onPress={handleSignOut} disabled={loading} />
          <View style={{ marginTop: 10 }}>
            <Button
              title="Create Order"
              onPress={handleCreateOrder}
              disabled={loading}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Button
              title="Get My Orders"
              onPress={handleGetOrders}
              disabled={loading}
            />
          </View>
        </>
      ) : (
        <>
          <Button
            title="Register"
            onPress={handleRegister}
            disabled={loading}
          />
          <View style={{ marginTop: 10 }}>
            <Button
              title="Sign In"
              onPress={handleSignIn}
              disabled={loading}
            />
          </View>
        </>
      )}

      {loading && <Text>Loading...</Text>}
    </View>
  );
};

export default FirebaseExample;

