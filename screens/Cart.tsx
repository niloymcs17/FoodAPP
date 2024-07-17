import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Cart = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cart}>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-105.png")}
        />
      </Pressable>
      <Text style={styles.cart1}>Cart</Text>
      <Pressable
        style={styles.path3391}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/path-33912.png")}
        />
      </Pressable>
      <Button
        style={styles.cartChild}
        mode="outlined"
        labelStyle={styles.groupButtonBtn}
        contentStyle={styles.groupButtonBtn1}
      >
        Checkout
      </Button>
      <Text style={[styles.total, styles.totalLayout]}>Total</Text>
      <View style={styles.groupParent}>
        <View style={[styles.taxAndFeesParent, styles.parentLayout]}>
          <Text style={[styles.taxAndFees, styles.promoCodeLayout]}>
            Tax and Fees
          </Text>
          <Text style={[styles.text, styles.textTypo1]}>$5.30</Text>
          <Text style={[styles.usd, styles.usdTypo]}>USD</Text>
        </View>
        <View style={[styles.deliveryParent, styles.parentLayout]}>
          <Text style={[styles.delivery, styles.deliveryTypo]}>Delivery</Text>
          <Text style={[styles.text1, styles.textTypo1]}>$1.00</Text>
          <Text style={[styles.usd, styles.usdTypo]}>USD</Text>
        </View>
        <Text style={[styles.text2, styles.textTypo1]}>$33.60</Text>
        <Text style={[styles.usd2, styles.usd2Position]}>USD</Text>
        <Text style={[styles.items, styles.itemsTypo]}>(2 items)</Text>
        <View style={[styles.subtotalParent, styles.parentLayout]}>
          <Text style={[styles.delivery, styles.deliveryTypo]}>Subtotal</Text>
          <Text style={[styles.text, styles.textTypo1]}>$27.30</Text>
          <Text style={[styles.usd, styles.usdTypo]}>USD</Text>
        </View>
        <View style={[styles.groupChild, styles.groupLayout3]} />
        <View style={[styles.groupItem, styles.groupLayout3]} />
        <View style={[styles.groupInner, styles.groupLayout3]} />
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.rectangleView} />
        <Text style={[styles.promoCode, styles.itemsTypo]}>Promo Code</Text>
        <Button
          style={styles.groupButton}
          mode="outlined"
          labelStyle={styles.groupButton1Btn}
          contentStyle={styles.groupButton1Btn1}
        >
          Apply
        </Button>
      </View>
      <View style={styles.maskGroupParent}>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group8.png")}
        />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-17248.png")}
        />
        <View style={[styles.redNHotPizzaParent, styles.containerPosition]}>
          <Text style={[styles.redNHot, styles.text5Typo]}>
            Red n hot pizza
          </Text>
          <Text style={[styles.spicyChickenBeef, styles.withBakedSalmonTypo]}>
            Spicy chicken, beef
          </Text>
        </View>
        <View style={[styles.container, styles.containerPosition]}>
          <Text style={[styles.text4, styles.textTypo]}>$15.30</Text>
        </View>
        <View style={[styles.groupContainer, styles.groupLayout1]}>
          <Image
            style={[styles.groupChild1, styles.groupLayout1]}
            contentFit="cover"
            source={require("../assets/group-17840.png")}
          />
          <View style={[styles.rectangleGroup, styles.groupLayout1]}>
            <View style={styles.groupChildShadowBox} />
            <Image
              style={styles.groupChild3}
              contentFit="cover"
              source={require("../assets/group-17839.png")}
            />
          </View>
          <Text style={[styles.text5, styles.text5Typo]}>02</Text>
        </View>
      </View>
      <View style={[styles.cartInner, styles.groupLayout]}>
        <View style={[styles.maskGroupGroup, styles.groupLayout]}>
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupPosition]}
            contentFit="cover"
            source={require("../assets/mask-group9.png")}
          />
          <View style={[styles.groupView, styles.groupPosition]}>
            <Button
              style={styles.groupChild4}
              mode="contained"
              contentStyle={styles.groupIcon3Btn}
            />
            <View style={styles.groupWrapper}>
              <View style={[styles.groupParent1, styles.groupPosition]}>
                <View style={styles.greekSaladParent}>
                  <Text
                    style={[styles.redNHot, styles.text5Typo]}
                  >{`Greek salad `}</Text>
                  <Text
                    style={[styles.withBakedSalmon, styles.withBakedSalmonTypo]}
                  >
                    with baked salmon
                  </Text>
                </View>
                <Text style={[styles.text6, styles.textTypo]}>$12.00</Text>
              </View>
            </View>
            <View style={[styles.groupParent2, styles.groupLayout1]}>
              <Image
                style={[styles.groupChild1, styles.groupLayout1]}
                contentFit="cover"
                source={require("../assets/group-17840.png")}
              />
              <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                <View style={styles.groupChildShadowBox} />
                <Image
                  style={styles.groupChild3}
                  contentFit="cover"
                  source={require("../assets/group-17839.png")}
                />
              </View>
              <Text style={[styles.text5, styles.text5Typo]}>02</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupButtonBtn: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Roboto-Bold",
  },
  groupButtonBtn1: {
    height: 57,
    width: 248,
  },
  groupButton1Btn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Montserrat-Medium",
  },
  groupButton1Btn1: {
    height: 44,
    width: 97,
  },
  groupIcon3Btn: {
    height: "21.96%",
    width: "7.74%",
  },
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  totalLayout: {
    height: 16,
    width: 69,
  },
  parentLayout: {
    height: 21,
    left: 0,
    width: 331,
    position: "absolute",
  },
  promoCodeLayout: {
    width: 100,
    height: 16,
  },
  textTypo1: {
    width: 68,
    textAlign: "right",
    height: 21,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  usdTypo: {
    color: Color.subColor,
    fontSize: FontSize.size_sm,
    width: 28,
    fontFamily: FontFamily.textBox,
    textAlign: "left",
    position: "absolute",
  },
  deliveryTypo: {
    fontFamily: FontFamily.textBox,
    top: 1,
    left: 0,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  usd2Position: {
    top: 145,
    height: 14,
  },
  itemsTypo: {
    color: Color.colorSilver_100,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout3: {
    height: 1,
    width: 332,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  maskGroupPosition: {
    left: 0,
    top: 0,
  },
  containerPosition: {
    left: "31.4%",
    position: "absolute",
  },
  text5Typo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  withBakedSalmonTypo: {
    color: Color.colorLightslategray_100,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    color: Color.primaryColor,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    left: "0%",
    textAlign: "left",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupLayout1: {
    height: 28,
    position: "absolute",
  },
  groupLayout: {
    width: 326,
    height: 83,
    position: "absolute",
  },
  groupPosition: {
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "6.93%",
    top: "4.56%",
    right: "82.93%",
    bottom: "90.76%",
    width: "10.13%",
    height: "4.68%",
    position: "absolute",
  },
  cart1: {
    top: "5.79%",
    left: "45.07%",
    color: Color.ffffff,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  path3391: {
    left: "11.47%",
    top: "6.4%",
    right: "87.2%",
    bottom: "92.49%",
    width: "1.33%",
    height: "1.11%",
    position: "absolute",
  },
  cartChild: {
    top: 724,
    left: 64,
    position: "absolute",
  },
  total: {
    top: 564,
    textAlign: "left",
    color: Color.colorBlack,
    height: 16,
    width: 69,
    fontSize: FontSize.size_base,
    left: 22,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  taxAndFees: {
    fontFamily: FontFamily.textBox,
    top: 1,
    left: 0,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  text: {
    left: 232,
    fontSize: FontSize.size_lgi,
    width: 68,
    textAlign: "right",
    top: 0,
  },
  usd: {
    left: 303,
    height: 14,
    width: 28,
    top: 1,
    color: Color.subColor,
    fontSize: FontSize.size_sm,
  },
  taxAndFeesParent: {
    top: 51,
  },
  delivery: {
    height: 16,
    width: 69,
  },
  text1: {
    left: 229,
    fontSize: FontSize.size_lgi,
    width: 68,
    textAlign: "right",
    top: 0,
  },
  deliveryParent: {
    top: 100,
  },
  text2: {
    top: 144,
    left: 226,
    fontSize: FontSize.textBox_size,
  },
  usd2: {
    left: 297,
    width: 28,
    color: Color.subColor,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.textBox,
    textAlign: "left",
    position: "absolute",
  },
  items: {
    left: 43,
    width: 56,
    top: 145,
    height: 14,
  },
  subtotalParent: {
    top: 0,
  },
  groupChild: {
    top: 34,
  },
  groupItem: {
    top: 84,
  },
  groupInner: {
    top: 131,
  },
  groupParent: {
    top: 419,
    height: 165,
    width: 331,
    left: 22,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_81xl,
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    borderStyle: "solid",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  promoCode: {
    top: 25,
    left: 17,
    width: 100,
    height: 16,
  },
  groupButton: {
    left: 224,
    top: 8,
    position: "absolute",
  },
  rectangleParent: {
    height: "7.39%",
    width: "88.27%",
    top: "40.64%",
    right: "5.87%",
    bottom: "51.97%",
    left: "5.87%",
    position: "absolute",
  },
  maskGroupIcon: {
    width: 82,
    height: 82,
    top: 0,
    position: "absolute",
  },
  groupIcon: {
    height: "20.17%",
    width: "5.12%",
    top: "10.56%",
    right: "0.7%",
    bottom: "69.27%",
    left: "94.18%",
    maxHeight: "100%",
    position: "absolute",
  },
  redNHot: {
    left: "0%",
    top: "0%",
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  spicyChickenBeef: {
    top: "65%",
    left: "0.79%",
  },
  redNHotPizzaParent: {
    height: "48.02%",
    width: "38.72%",
    top: "7.2%",
    right: "29.88%",
    bottom: "44.78%",
  },
  text4: {
    top: "0%",
  },
  container: {
    height: "19.21%",
    width: "14.33%",
    top: "70.83%",
    right: "54.27%",
    bottom: "9.96%",
  },
  groupChild1: {
    left: 61,
    width: 28,
    top: 0,
  },
  groupChildShadowBox: {
    borderColor: Color.primaryColor,
    borderRadius: Border.br_mid,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "#eef0f2",
    height: 28,
    borderWidth: 1,
    borderStyle: "solid",
    width: 28,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupChild3: {
    top: 15,
    left: 9,
    width: 10,
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleGroup: {
    width: 28,
    top: 0,
    left: 0,
  },
  text5: {
    left: 36,
    width: 20,
    top: 8,
    height: 14,
    fontSize: FontSize.size_base,
    fontWeight: "600",
  },
  groupContainer: {
    top: 55,
    left: 239,
    width: 89,
    height: 28,
  },
  maskGroupParent: {
    top: 105,
    width: 328,
    height: 83,
    left: 22,
    position: "absolute",
  },
  groupChild4: {
    right: "1.06%",
    bottom: "78.04%",
    left: "91.2%",
    top: "0%",
    position: "absolute",
  },
  withBakedSalmon: {
    top: "63.16%",
    left: "0.82%",
  },
  greekSaladParent: {
    height: "55.88%",
    bottom: "44.12%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  text6: {
    top: "76.47%",
  },
  groupParent1: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  groupWrapper: {
    height: "88.89%",
    width: "56.22%",
    top: "0.26%",
    right: "43.78%",
    bottom: "10.85%",
    left: "0%",
    position: "absolute",
  },
  groupParent2: {
    top: 48,
    left: 128,
    width: 89,
    height: 28,
  },
  groupView: {
    height: "91.84%",
    width: "66.56%",
    top: "8.16%",
    left: "33.44%",
  },
  maskGroupGroup: {
    top: 0,
    left: 0,
  },
  cartInner: {
    top: 214,
    left: 22,
    width: 326,
  },
  cart: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Cart;
