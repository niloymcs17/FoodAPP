import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Ongoingorder from "../components/Ongoingorder";
import OrderHistory from "../components/OrderHistory";
import { FontSize,  Color, Border } from "../GlobalStyles";
import { ORDER } from "../Const/Order.const";

const MyOrders = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [activeTab, setActiveTab] = useState('Ongoing');
  const order = ORDER;

  return (
    <View style={styles.myOrdersContainer}>
      <View style={styles.navbar}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </Pressable>
        <Text style={styles.myOrdersText}>My Orders</Text>
      </View>
      <View style={styles.tabs}>
        <Pressable
          style={[styles.tab, activeTab === 'Ongoing' && styles.activeTab]}
          onPress={() => setActiveTab('Ongoing')}
        >
          <Text style={[styles.tabText, activeTab === 'Ongoing' && styles.activeTabText]}>
            Ongoing
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, activeTab === 'History' && styles.activeTab]}
          onPress={() => setActiveTab('History')}
        >
          <Text style={[styles.tabText, activeTab === 'History' && styles.activeTabText]}>
            History
          </Text>
        </Pressable>
      </View>
      {activeTab === 'Ongoing' ? <Ongoingorder  data={order} /> : <OrderHistory />}
    </View>
  );
};

const styles = StyleSheet.create({
  myOrdersContainer: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    padding: 20,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  myOrdersText: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    color: Color.colorGray_200,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_md,
    borderColor: Color.mainColor
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: Border.br_md,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: Color.mainColor,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  tabText: {
    fontSize: FontSize.size_sm,
    color: Color.mainColor,
  },
  activeTabText: {
    color: Color.colorWhite,
    fontWeight: "600",
  },
});

export default MyOrders;
