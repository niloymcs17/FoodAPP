import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Actionbutton from "./Actionbutton";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const OrderHistory = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Actionbutton trackOrder="Re-Order" cancel="Rate" propTop={107} />
      <View style={styles.jimmyJohnsParent}>
        <Text
          style={[styles.jimmyJohns, styles.textTypo]}
        >{`Jimmy John’s `}</Text>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/group-178011.png")}
        />
      </View>
      <Text style={[styles.jun1030, styles.itemsTypo]}>20 Jun, 10:30</Text>
      <Text style={[styles.items, styles.itemsTypo]}>3 Items</Text>
      <Text style={[styles.text, styles.textTypo]}>$17.10</Text>
      <View style={[styles.orderDeliveredParent, styles.orderLayout]}>
        <Text style={[styles.orderDelivered, styles.orderLayout]}>
          Order Delivered
        </Text>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/ellipse-109.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 168,
    width: 323,
  },
  groupChildPosition: {
    top: 0,
    left: 0,
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.sofiaPro,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  itemsTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.sofiaPro,
  },
  orderLayout: {
    height: 9,
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(211, 209, 216, 0.25)",
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    shadowRadius: 36.43,
    elevation: 36.43,
    shadowOpacity: 1,
    borderRadius: 18,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
    height: 168,
    width: 323,
  },
  jimmyJohns: {
    fontWeight: "600",
    color: Color.colorBlack,
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 4,
    left: 96,
    width: 8,
    height: 8,
    position: "absolute",
  },
  jimmyJohnsParent: {
    top: 47,
    width: 104,
    height: 16,
    left: 100,
    position: "absolute",
  },
  jun1030: {
    color: Color.colorDarkgray_100,
    top: 25,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
    left: 100,
  },
  items: {
    left: 190,
    color: Color.colorDarkgray_100,
    top: 25,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text: {
    top: 23,
    left: 263,
    color: Color.mainColor,
  },
  orderDelivered: {
    left: 13,
    color: Color.colorMediumspringgreen,
    width: 89,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.sofiaPro,
    height: 9,
    top: 0,
  },
  groupInner: {
    top: 1,
    width: 7,
    height: 7,
    left: 0,
    position: "absolute",
  },
  orderDeliveredParent: {
    top: 73,
    width: 102,
    left: 100,
  },
  rectangleParent: {
    marginTop: 15,
  },
});

export default OrderHistory;
