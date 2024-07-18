import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Ongoingorder from "../components/Ongoingorder";
import OrderHistory from "../components/OrderHistory";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const MyOrdersUpcoming = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.myOrdersUpcoming}>
      <View style={styles.navbarParent}>
        <View style={styles.navbar}>
          <Pressable
            style={styles.back}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/back.png")}
            />
          </Pressable>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={styles.myOrders}>My Orders</Text>
        </View>
        <View style={[styles.tabs, styles.tabsLayout]}>
          <View style={[styles.tabsChild, styles.tabsLayout]} />
          <View style={styles.tabsItem} />
          <Text style={[styles.upcoming, styles.historyTypo]}>Upcoming</Text>
          <Text style={[styles.history, styles.historyTypo]}>History</Text>
        </View>
        <Ongoingorder />
        <OrderHistory />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsLayout: {
    height: 55,
    width: 323,
  },
  historyTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: 21,
    fontFamily: FontFamily.sofiaPro,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    width: 38,
    height: 38,
    zIndex: 0,
  },
  vectorIcon: {
    width: 59,
    height: 57,
    zIndex: 1,
    marginLeft: 226,
  },
  myOrders: {
    marginTop: -18.5,
    marginLeft: -59.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_lg,
    color: Color.colorGray_200,
    textAlign: "left",
    zIndex: 2,
    fontFamily: FontFamily.sofiaPro,
    fontWeight: "500",
    position: "absolute",
  },
  navbar: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  tabsChild: {
    top: 0,
    left: 0,
    borderRadius: 28,
    borderStyle: "solid",
    borderColor: "#f2eaea",
    borderWidth: 1,
    position: "absolute",
  },
  tabsItem: {
    top: 4,
    left: 6,
    shadowColor: "rgba(211, 209, 216, 0.25)",
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    borderRadius: 24,
    backgroundColor: Color.mainColor,
    width: 160,
    height: 47,
    position: "absolute",
  },
  upcoming: {
    left: 50,
    color: Color.colorGray_100,
    width: 70,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 21,
  },
  history: {
    left: 207,
    color: Color.mainColor,
    width: 67,
  },
  tabs: {
    marginTop: 15,
  },
  navbarParent: {
    alignSelf: "stretch",
  },
  myOrdersUpcoming: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    paddingHorizontal: 26,
    paddingVertical: 37,
    width: "100%",
  },
});

export default MyOrdersUpcoming;
