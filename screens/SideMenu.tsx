import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SideMenu = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.sideMenu}>
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.myOrdersParent, styles.parentPosition]}
          onPress={() => navigation.navigate("MyOrdersUpcoming")}
        >
          <Text style={[styles.myOrders, styles.logOutFlexBox]}>My Orders</Text>
          <Image
            style={[styles.iconlybulkdocument, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/iconlybulkdocument.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.myProfileParent, styles.parentPosition]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.myOrders, styles.logOutFlexBox]}>
            My Profile
          </Text>
          <Image
            style={[styles.iconlybulkprofile, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/iconlybulkprofile.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.deliveryAddressParent, styles.parentPosition]}
          onPress={() => navigation.navigate("AddNewAddress")}
        >
          <Text style={[styles.myOrders, styles.logOutFlexBox]}>
            Delivery Address
          </Text>
          <Image
            style={[styles.iconlybulklocation, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/iconlybulklocation.png")}
          />
        </Pressable>
        <View style={[styles.paymentMethodsParent, styles.parentPosition]}>
          <Text style={[styles.myOrders, styles.logOutFlexBox]}>
            Payment Methods
          </Text>
          <Image
            style={[styles.iconlybulkwallet, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/iconlybulkwallet.png")}
          />
        </View>
        <View style={styles.contactUsParent}>
          <Text style={[styles.myOrders, styles.logOutFlexBox]}>
            Contact Us
          </Text>
          <Image
            style={[styles.iconlybulkmessage, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/iconlybulkmessage.png")}
          />
        </View>
        <View style={[styles.settingsParent, styles.parentPosition]}>
          <Text style={[styles.myOrders, styles.logOutFlexBox]}>Settings</Text>
          <Image
            style={[styles.iconlybulksetting, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/iconlybulksetting.png")}
          />
        </View>
        
      </View>
      
      
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    height: 23,
    left: 0,
    position: "absolute",
  },
  logOutFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconlybulkhelpsPosition1: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  vectorIconPosition: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconlybulkhelpsPosition: {
    left: "25%",
    right: "20.31%",
    top: "9.9%",
    width: "54.69%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  maskGroupIconPosition: {
    left: 26,
    position: "absolute",
  },
  groupChildLayout: {
    height: 43,
    width: 117,
    position: "absolute",
  },
  myOrders: {
    top: 4,
    left: 37,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.textBox,
    fontSize: FontSize.size_base,
  },
  iconlybulkdocument: {
    width: "20%",
    right: "80%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  myOrdersParent: {
    width: 115,
    top: 0,
  },
  iconlybulkprofile: {
    width: "20.54%",
    right: "79.46%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  myProfileParent: {
    top: 56,
    width: 112,
  },
  iconlybulklocation: {
    width: "14.47%",
    right: "85.53%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  deliveryAddressParent: {
    top: 112,
    width: 159,
  },
  iconlybulkwallet: {
    width: "13.53%",
    right: "86.47%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  paymentMethodsParent: {
    top: 168,
    width: 170,
  },
  iconlybulkmessage: {
    width: "19.66%",
    right: "80.34%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  contactUsParent: {
    top: 224,
    width: 117,
    height: 23,
    left: 0,
    position: "absolute",
  },
  iconlybulksetting: {
    width: "23.96%",
    right: "76.04%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  settingsParent: {
    top: 280,
    width: 96,
  },
  helpsFaqs: {
    top: 2,
    left: 35,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.textBox,
    fontSize: FontSize.size_base,
  },
  iconlybulkhelpsChild: {
    borderRadius: 7,
    backgroundColor: Color.subColor,
  },
  iconlybulkhelpsItem: {
    height: "69.79%",
    bottom: "20.31%",
  },
  iconlybulkhelpsInner: {
    height: "54.69%",
    bottom: "35.42%",
  },
  vectorIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconlybulkhelps: {
    width: "14.44%",
    right: "85.56%",
  },
  helpsFaqsParent: {
    top: 336,
    left: 2,
    width: 133,
    height: 19,
    position: "absolute",
  },
  groupParent: {
    top: 231,
    height: 355,
    width: 170,
    left: 22,
    position: "absolute",
  },
  farionWick: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    width: 120,
    height: 20,
    color: Color.colorBlack,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  farionwickgmailcom: {
    top: 27,
    fontSize: FontSize.size_sm,
    color: "#9ea1b1",
    fontFamily: FontFamily.textBox,
    left: 0,
  },
  farionWickParent: {
    top: 147,
    width: 148,
    height: 41,
  },
  maskGroupIcon: {
    top: 36,
    width: 90,
    height: 90,
  },
  groupChild: {
    shadowColor: "rgba(254, 114, 76, 0.2)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderRadius: Border.br_9xl_5,
    backgroundColor: Color.primaryColor,
    left: 0,
    top: 0,
  },
  logOut: {
    top: 15,
    left: 44,
    lineHeight: 16,
    color: Color.colorWhite,
    width: 59,
    height: 16,
    fontFamily: FontFamily.textBox,
    fontSize: FontSize.size_base,
  },
  groupItem: {
    top: 9,
    left: 9,
    width: 26,
    height: 26,
    position: "absolute",
  },
  rectangleParent: {
    top: 737,
    left: 22,
  },
  sideMenuChild: {
    height: "4.68%",
    width: "10.13%",
    top: "3.82%",
    right: "5.07%",
    bottom: "91.5%",
    left: "84.8%",
    position: "absolute",
  },
  sideMenu: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default SideMenu;
