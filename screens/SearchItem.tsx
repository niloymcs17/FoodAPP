import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SearchItem = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.searchItem}>
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
      <Text style={styles.cart}>Cart</Text>
      <Image
        style={[styles.path3391Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/path-33912.png")}
      />
      <View style={styles.maskGroupParent}>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group8.png")}
        />
        <View style={[styles.redNHotPizzaParent, styles.containerPosition]}>
          <Text style={styles.redNHot}>Red n hot pizza</Text>
          <Text style={[styles.spicyChickenBeef, styles.withBakedSalmonTypo]}>
            Spicy chicken, beef
          </Text>
        </View>
        <View style={[styles.container, styles.containerPosition]}>
          <Text style={[styles.text, styles.textTypo]}>$15.30</Text>
        </View>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/group-17840.png")}
          />
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={styles.groupItemShadowBox} />
            <Image
              style={styles.groupInner}
              contentFit="cover"
              source={require("../assets/group-17839.png")}
            />
          </View>
          <Text style={styles.text1}>02</Text>
        </View>
      </View>
      <View style={[styles.searchItemInner, styles.groupLayout]}>
        <View style={[styles.maskGroupGroup, styles.groupLayout]}>
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupPosition]}
            contentFit="cover"
            source={require("../assets/mask-group9.png")}
          />
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <View style={[styles.groupWrapper, styles.groupPosition1]}>
              <View style={[styles.groupView, styles.groupPosition]}>
                <View style={styles.greekSaladParent}>
                  <Text style={styles.redNHot}>{`Greek salad `}</Text>
                  <Text
                    style={[styles.withBakedSalmon, styles.withBakedSalmonTypo]}
                  >
                    with baked salmon
                  </Text>
                </View>
                <Text style={[styles.text2, styles.textTypo]}>$12.00</Text>
              </View>
            </View>
            <View style={[styles.groupParent1, styles.groupParentLayout]}>
              <Image
                style={[styles.groupChild, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/group-17840.png")}
              />
              <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                <View style={styles.groupItemShadowBox} />
                <Image
                  style={styles.groupInner}
                  contentFit="cover"
                  source={require("../assets/group-17839.png")}
                />
              </View>
              <Text style={styles.text1}>02</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.maskGroup}
        onPress={() => navigation.navigate("Cart")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/mask-group.png")}
        />
      </Pressable>
      <Image
        style={[styles.searchItemChild, styles.searchItemLayout]}
        contentFit="cover"
        source={require("../assets/group-17920.png")}
      />
      <Image
        style={[styles.searchItemItem, styles.searchItemLayout]}
        contentFit="cover"
        source={require("../assets/group-17481.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  maskGroupPosition: {
    top: 0,
    left: 0,
  },
  containerPosition: {
    left: "31.4%",
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
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    left: "0%",
    position: "absolute",
  },
  groupParentLayout: {
    height: 28,
    width: 89,
    position: "absolute",
  },
  groupChildLayout: {
    width: 28,
    height: 28,
    top: 0,
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
  groupPosition1: {
    left: "0%",
    top: "0%",
  },
  searchItemLayout: {
    width: "7.55%",
    height: "3.49%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  cart: {
    top: "5.79%",
    left: "45.07%",
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.ffffff,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  path3391Icon: {
    height: "1.11%",
    width: "1.33%",
    top: "6.4%",
    right: "87.2%",
    bottom: "92.49%",
    left: "11.47%",
    maxHeight: "100%",
    position: "absolute",
  },
  maskGroupIcon: {
    width: 82,
    height: 82,
    left: 0,
    position: "absolute",
  },
  redNHot: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    fontSize: FontSize.size_lg,
    position: "absolute",
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
  text: {
    top: "0%",
    color: Color.primaryColor,
  },
  container: {
    height: "19.21%",
    width: "14.33%",
    top: "70.83%",
    right: "54.27%",
    bottom: "9.96%",
  },
  groupChild: {
    left: 61,
  },
  groupItemShadowBox: {
    borderWidth: 1,
    borderColor: Color.primaryColor,
    borderStyle: "solid",
    borderRadius: Border.br_mid,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "#eef0f2",
    width: 28,
    height: 28,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    top: 15,
    left: 9,
    width: 10,
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
  },
  text1: {
    top: 8,
    left: 36,
    width: 20,
    height: 14,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupParent: {
    top: 55,
    left: 239,
  },
  maskGroupParent: {
    top: 105,
    width: 328,
    height: 83,
    left: 22,
    position: "absolute",
  },
  withBakedSalmon: {
    top: "63.16%",
    left: "0.82%",
  },
  greekSaladParent: {
    height: "55.88%",
    bottom: "44.12%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  text2: {
    top: "76.47%",
  },
  groupView: {
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  groupWrapper: {
    height: "89.12%",
    width: "56.22%",
    right: "43.78%",
    bottom: "10.88%",
    position: "absolute",
  },
  groupParent1: {
    top: 48,
    left: 128,
  },
  groupContainer: {
    height: "91.6%",
    width: "66.56%",
    top: "8.4%",
    left: "33.44%",
  },
  maskGroupGroup: {
    left: 0,
    top: 0,
  },
  searchItemInner: {
    top: 214,
    left: 22,
    width: 326,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  maskGroup: {
    left: 318,
    top: 14,
    width: 38,
    height: 38,
    position: "absolute",
  },
  searchItemChild: {
    top: "12.81%",
    right: "70.85%",
    bottom: "83.71%",
    left: "21.6%",
  },
  searchItemItem: {
    top: "25.99%",
    right: "72.72%",
    bottom: "70.53%",
    left: "19.73%",
  },
  searchItem: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SearchItem;
