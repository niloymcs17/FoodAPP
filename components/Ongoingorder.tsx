import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Actionbutton from "./Actionbutton";
import {  FontSize, Color } from "../GlobalStyles";

const Ongoingorder = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <Actionbutton trackOrder="Track Order" cancel="Cancel" />
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.starbuckParent, styles.starbuckLayout]}>
          <Text style={[styles.starbuck, styles.textTypo]}>{`Starbuck `}</Text>
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/group-17801.png")}
          />
        </View>
        <Text style={[styles.items, styles.nowTypo]}>3 Items</Text>
      </View>
      <Text style={[styles.text, styles.textTypo]}>#264100</Text>
      <View style={styles.eta}>
        <Text style={[styles.estimatedArrival, styles.nowTypo]}>
          Estimated Arrival
        </Text>
        <View style={[styles.minParent, styles.text1Position]}>
          <Text style={[styles.min, styles.minClr]}>min</Text>
          <Text style={[styles.text1, styles.minClr]}>25</Text>
        </View>
      </View>
      <View style={[styles.status, styles.statusLayout]}>
        <Text style={[styles.now, styles.nowTypo]}>Now</Text>
        <Text style={[styles.foodOnThe, styles.statusLayout]}>
          Food on the way
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 98,
    position: "absolute",
  },
  starbuckLayout: {
    height: 24,
    left: 0,
  },
  textTypo: {
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  nowTypo: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  text1Position: {
    height: 29,
    left: 0,
    position: "absolute",
  },
  minClr: {
    color: Color.colorGray_200,
  },
  statusLayout: {
    width: 109,
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
    top: 0,
    position: "absolute",
    height: 238,
    width: 323,
  },
  starbuck: {
    color: Color.colorBlack,
    width: 83,
    textAlign: "left",
    fontWeight: "600",
    top: 0,
    height: 24,
    left: 0,
  },
  groupItem: {
    top: 6,
    left: 88,
    width: 10,
    height: 12,
    position: "absolute",
  },
  starbuckParent: {
    top: 34,
    width: 98,
    position: "absolute",
  },
  items: {
    textAlign: "center",
    width: 50,
    height: 18,
    left: 0,
  },
  groupParent: {
    left: 22,
    height: 58,
    top: 23,
  },
  text: {
    left: 241,
    color: Color.mainColor,
    textAlign: "right",
    top: 23,
  },
  estimatedArrival: {
    fontWeight: "500",
    textAlign: "left",
    left: 0,
  },
  min: {
    top: 18,
    left: 50,
    fontSize: FontSize.size_mini,
    width: 26,
    height: 11,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_20xl_3,
    width: 51,
    height: 29,
    left: 0,
    position: "absolute",
    textAlign: "left",
    fontWeight: "600",
    top: 0,
  },
  minParent: {
    width: 76,
    top: 23,
  },
  eta: {
    left: 18,
    width: 95,
    height: 52,
    top: 104,
    position: "absolute",
  },
  now: {
    left: 31,
    width: 78,
    fontWeight: "500",
    textAlign: "right",
  },
  foodOnThe: {
    top: 17,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.colorGray_200,
    fontWeight: "500",
    textAlign: "right",
    height: 24,
    left: 0,
  },
  status: {
    left: 196,
    height: 41,
    top: 104,
  },
  rectangleParent: {
    marginTop: 15,
    height: 238,
    width: 323,
  },
});

export default Ongoingorder;
