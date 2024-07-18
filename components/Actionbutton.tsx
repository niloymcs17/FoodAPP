import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

export type ActionbuttonType = {
  trackOrder?: string;
  cancel?: string;

  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Actionbutton = ({ trackOrder, cancel, propTop }: ActionbuttonType) => {
  const actionbuttonStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.actionbutton, actionbuttonStyle]}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Text style={[styles.trackOrder, styles.cancelTypo]}>{trackOrder}</Text>
      </View>
      <View style={styles.rectangleGroup}>
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <Text style={[styles.cancel, styles.cancelTypo]}>{cancel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    left: 0,
    width: 135,
    top: 0,
    height: 43,
    position: "absolute",
  },
  cancelTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sofiaPro,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    top: "34.88%",
    height: "27.91%",
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(254, 114, 76, 0.25)",
    borderRadius: Border.br_9xl_5,
    backgroundColor: Color.mainColor,
  },
  trackOrder: {
    width: "70.37%",
    left: "14.81%",
    color: Color.colorWhite,
  },
  rectangleParent: {
    left: 152,
    width: 135,
    top: 0,
    height: 43,
    position: "absolute",
  },
  groupItem: {
    shadowColor: "rgba(211, 209, 216, 0.25)",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhite,
  },
  cancel: {
    width: "37.78%",
    left: "31.11%",
    color: Color.colorGray_200,
  },
  rectangleGroup: {
    left: 0,
    width: 135,
    top: 0,
    height: 43,
    position: "absolute",
  },
  actionbutton: {
    top: 177,
    left: 18,
    width: 287,
    height: 43,
    position: "absolute",
  },
});

export default Actionbutton;
