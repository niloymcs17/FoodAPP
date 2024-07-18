import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

export type ItemsType = {
  maskGroup?: ImageSourcePropType;

  /** Style props */
  spicyChickenBeefAlignSelf?: string;
  spicyChickenBeefMarginTop?: number | string;
  spicyChickenBeefWidth?: number | string;
  spicyChickenBeefHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Items = ({
  maskGroup,
  spicyChickenBeefAlignSelf,
  spicyChickenBeefMarginTop,
  spicyChickenBeefWidth,
  spicyChickenBeefHeight,
}: ItemsType) => {
  const itemsStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", spicyChickenBeefAlignSelf),
      ...getStyleValue("marginTop", spicyChickenBeefMarginTop),
      ...getStyleValue("width", spicyChickenBeefWidth),
      ...getStyleValue("height", spicyChickenBeefHeight),
    };
  }, [
    spicyChickenBeefAlignSelf,
    spicyChickenBeefMarginTop,
    spicyChickenBeefWidth,
    spicyChickenBeefHeight,
  ]);

  return (
    <View style={[styles.items, styles.itemsFlexBox, itemsStyle]}>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={maskGroup}
      />
      <View style={styles.groupParent}>
        <View style={styles.redNHotPizzaParent}>
          <Text style={[styles.redNHot, styles.redNHotTypo]}>
            Red n hot pizza
          </Text>
          <Text style={[styles.spicyChickenBeef, styles.redNHotTypo]}>
            Spicy chicken, beef
          </Text>
        </View>
        <View style={[styles.itempriceParent, styles.itemsFlexBox]}>
          <Text style={[styles.itemprice, styles.textTypo]}>$15.30</Text>
          <View style={styles.addParent}>
            <Image
              style={[styles.addIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/add.png")}
            />
            <Image
              style={[styles.minusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/minus.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>02</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  redNHotTypo: {
    width: 154,
    textAlign: "left",
    fontFamily: FontFamily.sofiaPro,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.sofiaPro,
    fontWeight: "600",
  },
  iconLayout: {
    maxHeight: "100%",
    bottom: "0%",
    top: "0%",
    width: "31.72%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    maxWidth: "100%",
  },
  maskGroupIcon: {
    height: 82,
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
  },
  redNHot: {
    top: 0,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    fontWeight: "600",
    width: 154,
    textAlign: "left",
    fontFamily: FontFamily.sofiaPro,
    left: 0,
  },
  spicyChickenBeef: {
    top: 26,
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    color: Color.colorLightslategray_200,
    width: 154,
    textAlign: "left",
    fontFamily: FontFamily.sofiaPro,
    left: 0,
  },
  redNHotPizzaParent: {
    height: 40,
    alignSelf: "stretch",
  },
  itemprice: {
    color: Color.mainColor,
    width: 49,
  },
  addIcon: {
    right: "0.11%",
    left: "68.17%",
  },
  minusIcon: {
    right: "68.28%",
    left: "0%",
  },
  text: {
    height: "48.76%",
    width: "22.26%",
    top: "27.92%",
    left: "40%",
    color: Color.colorBlack,
    position: "absolute",
    fontSize: FontSize.size_base,
  },
  addParent: {
    width: 93,
    height: 28,
  },
  itempriceParent: {
    justifyContent: "space-between",
    marginTop: 9,
  },
  groupParent: {
    justifyContent: "center",
    marginLeft: 15,
    flex: 1,
  },
  items: {
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_3xs,
    zIndex: 1,
    marginTop: 20,
  },
});

export default Items;
