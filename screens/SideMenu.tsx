import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SideMenu = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.sideMenu}>
      <View style={styles.frame}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <View style={styles.farionWickParent}>
              <Text style={styles.farionWick}>Farion Wick</Text>
              <Text style={styles.farionwickgmailcom}>
                farionwick@gmail.com
              </Text>
            </View>
            <View style={styles.frame3}>
              <View style={styles.groupParent}>
                <Pressable
                  style={styles.myOrdersParent}
                  onPress={() => navigation.navigate("MyOrdersUpcoming")}
                >
                  <Text style={styles.myOrders}>My Orders</Text>
                  <Image
                    style={styles.iconlybulkdocument}
                    contentFit="cover"
                    source={require("../assets/iconlybulkdocument.png")}
                  />
                </Pressable>
                <Pressable
                  style={styles.myProfileParent}
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Text style={styles.myOrders}>My Profile</Text>
                  <Image
                    style={styles.iconlybulkprofile}
                    contentFit="cover"
                    source={require("../assets/iconlybulkprofile.png")}
                  />
                </Pressable>
                <Pressable
                  style={styles.deliveryAddressParent}
                  onPress={() => navigation.navigate("AddNewAddress")}
                >
                  <Text style={styles.myOrders}>Delivery Address</Text>
                  <Image
                    style={styles.iconlybulklocation}
                    contentFit="cover"
                    source={require("../assets/iconlybulklocation.png")}
                  />
                </Pressable>
                <View style={styles.paymentMethodsParent}>
                  <Text style={styles.myOrders}>Payment Methods</Text>
                  <Image
                    style={styles.iconlybulkwallet}
                    contentFit="cover"
                    source={require("../assets/iconlybulkwallet.png")}
                  />
                </View>
                <View style={styles.contactUsParent}>
                  <Text style={styles.myOrders}>Contact Us</Text>
                  <Image
                    style={styles.iconlybulkmessage}
                    contentFit="cover"
                    source={require("../assets/iconlybulkmessage.png")}
                  />
                </View>
                <View style={styles.settingsParent}>
                  <Text style={styles.myOrders}>Settings</Text>
                  <Image
                    style={styles.iconlybulksetting}
                    contentFit="cover"
                    source={require("../assets/iconlybulksetting.png")}
                  />
                </View>
                <View style={styles.helpsFaqsParent}>
                  <Text style={styles.helpsFaqs}>{`Helps & FAQs`}</Text>
                  <View style={styles.iconlybulkhelps}>
                    <View style={styles.frame4}>
                      <Image
                        style={styles.vectorIcon}
                        contentFit="cover"
                        source={require("../assets/vector6.png")}
                      />
                      <View style={styles.frameChild} />
                    </View>
                    <View style={styles.iconlybulkhelpsChild} />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={styles.rectangleParent}
            onPress={() => navigation.navigate("Welcome")}
          >
            <View style={styles.groupChild} />
            <Text style={styles.logOut}>Log Out</Text>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/group-18072.png")}
            />
          </Pressable>
        </View>
      </View>
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "relative",
    width: 99,
    height: 90,
    overflow: "hidden",
  },
  farionWick: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.sofiaPro,
    color: Color.colorBlack,
    textAlign: "left",
    width: 120,
    height: 20,
  },
  farionwickgmailcom: {
    position: "absolute",
    top: 27,
    left: 0,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.sofiaPro,
    color: "#9ea1b1",
    textAlign: "left",
  },
  farionWickParent: {
    width: 148,
    height: 41,
    marginLeft: 9,
  },
  myOrders: {
    position: "absolute",
    top: 4,
    left: 37,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sofiaPro,
    color: Color.colorBlack,
    textAlign: "left",
  },
  iconlybulkdocument: {
    position: "absolute",
    height: "100%",
    width: "20%",
    top: "0%",
    right: "80%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  myOrdersParent: {
    position: "relative",
    width: 115,
    height: 23,
  },
  iconlybulkprofile: {
    position: "absolute",
    height: "100%",
    width: "20.54%",
    top: "0%",
    right: "79.46%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  myProfileParent: {
    position: "relative",
    width: 112,
    height: 23,
    marginTop: 25,
  },
  iconlybulklocation: {
    position: "absolute",
    height: "100%",
    width: "14.47%",
    top: "0%",
    right: "85.53%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  deliveryAddressParent: {
    position: "relative",
    width: 159,
    height: 23,
    marginTop: 25,
  },
  iconlybulkwallet: {
    position: "absolute",
    height: "100%",
    width: "13.53%",
    top: "0%",
    right: "86.47%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  paymentMethodsParent: {
    position: "relative",
    width: 170,
    height: 23,
    marginTop: 25,
  },
  iconlybulkmessage: {
    position: "absolute",
    height: "100%",
    width: "19.66%",
    top: "0%",
    right: "80.34%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  contactUsParent: {
    position: "relative",
    width: 117,
    height: 23,
    marginTop: 25,
  },
  iconlybulksetting: {
    position: "absolute",
    height: "100%",
    width: "23.96%",
    top: "0%",
    right: "76.04%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  settingsParent: {
    position: "relative",
    width: 96,
    height: 23,
    marginTop: 25,
  },
  helpsFaqs: {
    position: "absolute",
    top: 295,
    left: 35,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sofiaPro,
    color: Color.colorBlack,
    textAlign: "left",
  },
  vectorIcon: {
    position: "relative",
    width: 19,
    height: 19,
  },
  frameChild: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    width: 11,
    height: 13,
    marginTop: -17,
  },
  frame4: {
    width: 19,
    height: 19,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlybulkhelpsChild: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    width: 11,
    height: 11,
    marginTop: -17,
  },
  iconlybulkhelps: {
    position: "absolute",
    height: "6.17%",
    width: "14.44%",
    top: "0%",
    right: "85.56%",
    bottom: "93.83%",
    left: "0%",
    backgroundColor: Color.colorDarkgray_100,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  helpsFaqsParent: {
    position: "relative",
    width: 133,
    height: 311,
    marginTop: 25,
  },
  groupParent: {
    width: 170,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame3: {
    width: 175,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 43,
  },
  frame2: {
    width: 175,
    height: 391,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupChild: {
    position: "absolute",
    top: 0,
    left: 0,
    shadowColor: "rgba(254, 114, 76, 0.2)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderRadius: Border.br_9xl_5,
    backgroundColor: Color.mainColor,
    width: 117,
    height: 43,
  },
  logOut: {
    position: "absolute",
    top: 15,
    left: 44,
    fontSize: FontSize.size_base,
    lineHeight: 16,
    fontFamily: FontFamily.sofiaPro,
    color: Color.colorWhite,
    textAlign: "left",
    width: 59,
    height: 16,
  },
  groupItem: {
    position: "absolute",
    top: 9,
    left: 9,
    width: 26,
    height: 26,
  },
  rectangleParent: {
    position: "relative",
    width: 117,
    height: 43,
    marginTop: 192,
  },
  frame1: {
    width: 175,
    height: 627,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 21,
  },
  frame: {
    width: 740,
    height: 738,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 2,
  },
  frameIcon1: {
    position: "relative",
    width: 38,
    height: 750,
    overflow: "hidden",
    marginLeft: 126,
  },
  sideMenu: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 17,
    paddingVertical: Padding.p_12xl,
  },
});

export default SideMenu;
