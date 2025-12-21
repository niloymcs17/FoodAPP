import React, { useState, useEffect } from "react";
import { StyleSheet, Pressable, Text, View, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Ongoingorder from "../components/Ongoingorder";
import OrderHistory from "../components/OrderHistory";
import { FontSize, Color, Border } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { getCurrentUser, listenToUserOrders } from "../services/firebaseService";
import { Timestamp } from "firebase/firestore";

// Transform Firestore order to component format
const transformOrder = (firestoreOrder: any) => {
  // Format date from Timestamp
  let dateString = 'Date not available';
  if (firestoreOrder.createdAt) {
    const timestamp = firestoreOrder.createdAt instanceof Timestamp 
      ? firestoreOrder.createdAt 
      : Timestamp.fromMillis(firestoreOrder.createdAt);
    const date = timestamp.toDate();
    dateString = date.toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  // Transform items: label → name
  const transformedItems = (firestoreOrder.items || []).map((item: any) => {
    // Ensure price is a valid number
    const price = typeof item.price === 'number' 
      ? item.price 
      : typeof item.price === 'string' 
        ? parseFloat(item.price) || 0 
        : 0;
    
    return {
      name: item.label || item.name || 'Unknown Item',
      quantity: item.quantity || 1,
      price: price,
    };
  });

  return {
    id: firestoreOrder.id || '',
    date: dateString,
    customerName: firestoreOrder.customerName || 'User',
    status: firestoreOrder.status || 'pending',
    items: transformedItems,
    instruction: firestoreOrder.address?.notes || firestoreOrder.instruction || '',
    total: firestoreOrder.total || 0,
    paymentMethod: firestoreOrder.paymentMethod || 'Unknown',
    paymentStatus: firestoreOrder.paymentStatus || 'success',
    address: firestoreOrder.address,
  };
};

const MyOrders = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [activeTab, setActiveTab] = useState<'Ongoing' | 'History'>('Ongoing');
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter orders based on status
  const ongoingOrder = orders.filter((item: any) => item.status !== 'delivered' && item.status !== 'cancelled');
  const pastOrder = orders.filter((item: any) => item.status === 'delivered');

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      setError('Please sign in to view your orders');
      setLoading(false);
      return;
    }

    // Use real-time listener for automatic updates
    const unsubscribe = listenToUserOrders(currentUser.uid, (firestoreOrders) => {
      try {
        const transformedOrders = firestoreOrders.map(transformOrder);
        setOrders(transformedOrders);
        setError(null);
      } catch (err: any) {
        console.error('Error transforming orders:', err);
        setError('Error loading orders');
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.myOrdersContainer} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
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
        <View style={styles.headerTitleContainer}>
          <Text style={styles.myOrdersText}>My Orders</Text>
          <Text style={styles.ordersCount}>
            {activeTab === 'Ongoing' ? `${ongoingOrder.length} Active` : `${pastOrder.length} Completed`}
          </Text>
        </View>
      </View>

      {/* Modern Tab Selector */}
      <View style={styles.tabContainer}>
        <View style={styles.tabs}>
          <Pressable
            style={({ pressed }) => [
              styles.tab,
              activeTab === 'Ongoing' && styles.activeTab,
              pressed && styles.tabPressed
            ]}
            onPress={() => setActiveTab('Ongoing')}
          >
            <Text style={[
              styles.tabText,
              activeTab === 'Ongoing' && styles.activeTabText
            ]}>
              Ongoing
            </Text>
            {activeTab === 'Ongoing' && <View style={styles.activeIndicator} />}
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.tab,
              activeTab === 'History' && styles.activeTab,
              pressed && styles.tabPressed
            ]}
            onPress={() => setActiveTab('History')}
          >
            <Text style={[
              styles.tabText,
              activeTab === 'History' && styles.activeTabText
            ]}>
              History
            </Text>
            {activeTab === 'History' && <View style={styles.activeIndicator} />}
          </Pressable>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {loading ? (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color={Color.mainColor} />
            <Text style={styles.loadingText}>Loading orders...</Text>
          </View>
        ) : error ? (
          <View style={styles.centerContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : activeTab === 'Ongoing' ? (
          ongoingOrder.length > 0 ? (
            <Ongoingorder data={ongoingOrder} />
          ) : (
            <View style={styles.centerContainer}>
              <Text style={styles.emptyText}>No ongoing orders</Text>
            </View>
          )
        ) : pastOrder.length > 0 ? (
          <OrderHistory data={pastOrder} />
        ) : (
          <View style={styles.centerContainer}>
            <Text style={styles.emptyText}>No order history</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  myOrdersContainer: {
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
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
    justifyContent: "center",
    alignItems: "center",
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
  headerTitleContainer: {
    flex: 1,
  },
  myOrdersText: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    color: Color.colorBlack,
    letterSpacing: 0.3,
    marginBottom: 4,
  },
  ordersCount: {
    fontSize: FontSize.size_sm,
    color: Color.colorLightslategray_100,
    fontWeight: "400",
  },
  tabContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: Color.colorWhite,
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: 12,
    padding: 4,
    position: "relative",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  activeTab: {
    backgroundColor: Color.colorWhite,
    shadowColor: Color.colorBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tabPressed: {
    opacity: 0.8,
  },
  tabText: {
    fontSize: FontSize.size_base,
    color: Color.colorLightslategray_100,
    fontWeight: "500",
    letterSpacing: 0.2,
  },
  activeTabText: {
    color: Color.mainColor,
    fontWeight: "600",
  },
  activeIndicator: {
    position: "absolute",
    bottom: 4,
    left: "50%",
    marginLeft: -15,
    width: 30,
    height: 3,
    backgroundColor: Color.mainColor,
    borderRadius: 2,
  },
  content: {
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 12,
    fontSize: FontSize.size_base,
    color: Color.colorLightslategray_100,
  },
  errorText: {
    fontSize: FontSize.size_base,
    color: '#FF3B30',
    textAlign: 'center',
  },
  emptyText: {
    fontSize: FontSize.size_lg,
    color: Color.colorLightslategray_100,
    textAlign: 'center',
  },
});

export default MyOrders;
