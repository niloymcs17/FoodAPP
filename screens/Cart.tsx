import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Items from "../components/Items";
import {  Color, Border, FontSize, Padding } from "../GlobalStyles";

const Cart = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.cart, styles.cartLayout]}>
      <View style={styles.topBar}>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </Pressable>
        <Text style={styles.cart1}>Cart</Text>
      </View>
      <Items maskGroup={require("../assets/mask-group2.png")} />
      <Items
        maskGroup={require("../assets/mask-group2.png")}
        spicyChickenBeefAlignSelf="stretch"
        spicyChickenBeefMarginTop={20}
        spicyChickenBeefWidth="unset"
        spicyChickenBeefHeight="unset"
      />
      <View style={[styles.rectangleParent, styles.rectangleSpaceBlock]}>
        <View style={[styles.groupChild, styles.iconLayout]} />
        <Text style={[styles.promoCode, styles.totalTypo]}>Promo Code</Text>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.apply, styles.applyTypo]}>Apply</Text>
        </View>
      </View>
      <Image
        style={[styles.vectorIcon, styles.rectangleSpaceBlock]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={[styles.rectangleContainer, styles.rectangleSpaceBlock]}>
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Text style={[styles.checkout, styles.applyTypo]}>Checkout</Text>
      </View>
      <Text style={[styles.total, styles.applyTypo1]}>Total</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartLayout: {
    overflow: "hidden",
    width: "100%",
  },
  rectangleSpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  totalTypo: {
    height: 16,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 44,
    width: 97,
  },
  groupPosition: {
    backgroundColor: Color.mainColor,
    borderRadius: Border.br_9xl_5,
    left: 0,
    top: 0,
    position: "absolute",
  },
  applyTypo: {
    color: Color.colorWhite,
    position: "absolute",
    textAlign: "center",
  },
  applyTypo1: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
  },
  back: {
    width: 38,
    height: 38,
  },
  cart1: {
    fontSize: FontSize.size_lg,
    color: Color.colorGray_200,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    marginLeft: 20,
    textAlign: "center",
    fontWeight: "500",
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    zIndex: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  groupChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    height: "100%",
  },
  promoCode: {
    top: 25,
    left: 17,
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    color: "#bebebe",
    width: 100,
  },
  groupItem: {
    height: 44,
    width: 97,
  },
  apply: {
    height: "27.21%",
    width: "46.9%",
    top: "34.01%",
    left: "25.93%",
    fontSize: FontSize.size_base,
    fontWeight: "500",
  },
  rectangleGroup: {
    top: 8,
    left: 225,
    position: "absolute",
  },
  rectangleParent: {
    height: 60,
    zIndex: 3,
  },
  vectorIcon: {
    maxWidth: "100%",
    height: 160,
    zIndex: 4,
    overflow: "hidden",
    width: "100%",
  },
  groupInner: {
    shadowColor: "rgba(254, 114, 76, 0.25)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 332,
    height: 57,
  },
  checkout: {
    width: "35.48%",
    top: "38.6%",
    left: "32.26%",
    fontSize: FontSize.size_mini,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  rectangleContainer: {
    zIndex: 5,
    height: 57,
  },
  total: {
    top: 564,
    left: 150,
    color: Color.colorBlack,
    zIndex: 6,
    height: 16,
    textAlign: "left",
    position: "absolute",
    alignSelf: "stretch",
  },
  cart: {
    paddingHorizontal: 19,
    paddingVertical: Padding.p_12xl,
    alignItems: "center",
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Cart;
