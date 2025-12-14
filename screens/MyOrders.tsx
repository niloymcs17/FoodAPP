import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Ongoingorder from "../components/Ongoingorder";
import OrderHistory from "../components/OrderHistory";
import { FontSize, Color, Border } from "../GlobalStyles";
import { ORDER } from "../Const/Order.const";
import { SafeAreaView } from "react-native-safe-area-context";

const MyOrders = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [activeTab, setActiveTab] = useState<'Ongoing' | 'History'>('Ongoing');
  const ongoingOrder = ORDER.filter((item: any) => item.status !== 'delivered') || [];
  const pastOrder = ORDER.filter((item: any) => item.status == 'delivered');

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
            <Image
              style={styles.backIcon}
              contentFit="contain"
              source={require("../assets/back.png")}
            />
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
        {activeTab === 'Ongoing' ? (
          <Ongoingorder data={ongoingOrder} />
        ) : (
          <OrderHistory data={pastOrder} />
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
});

export default MyOrders;
