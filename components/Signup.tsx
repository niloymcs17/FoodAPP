import * as React from "react";
import { View, StyleSheet, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

export type SignupType = {
  path?: ImageSourcePropType;
};

const Signup = ({ path }: SignupType) => {
  return (
    <View style={styles.signup}>
      <View style={[styles.groupParent, styles.groupPosition]}>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={styles.groupShadowBox} />
          <Text style={[styles.facebook, styles.googleTypo]}>FACEBOOK</Text>
          <View style={styles.rectangleGroup}>
            <View style={[styles.groupItem, styles.rectanglePosition]} />
            <Image
              style={[styles.pathIcon, styles.iconLayout]}
              contentFit="cover"
              source={path}
            />
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
          <View style={styles.groupShadowBox} />
          <Text style={[styles.google, styles.googleTypo]}>GOOGLE</Text>
          <Image
            style={[styles.superGIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/super-g.png")}
          />
        </View>
      </View>
      <Text style={[styles.signUpWith, styles.googleTypo]}>Sign up with</Text>
      <View style={styles.lineParent}>
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <View style={[styles.groupChild1, styles.lineViewLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    width: "100%",
    left: "0%",
    right: "0%",
  },
  rectanglePosition: {
    top: "0%",
    position: "absolute",
  },
  googleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sofiaPro,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    width: "31.79%",
    position: "absolute",
  },
  groupShadowBox: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xl_5,
    shadowOpacity: 1,
    elevation: 37.17,
    shadowRadius: 37.17,
    shadowOffset: {
      width: 18.586957931518555,
      height: 18.586957931518555,
    },
    shadowColor: "rgba(211, 209, 216, 0.25)",
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  facebook: {
    left: "40.14%",
    color: Color.colorBlack,
    letterSpacing: 0.7,
    fontSize: FontSize.size_smi,
    top: "42.11%",
    width: "57.14%",
    height: "19.3%",
    textAlign: "left",
    fontFamily: FontFamily.sofiaPro,
    fontWeight: "500",
  },
  groupItem: {
    height: "96.46%",
    bottom: "3.54%",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorRoyalblue,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  pathIcon: {
    height: "82.53%",
    width: "45.67%",
    top: "17.47%",
    right: "25.72%",
    left: "28.61%",
    bottom: "0%",
  },
  rectangleGroup: {
    height: "69.3%",
    width: "25.92%",
    top: "19.3%",
    right: "66.6%",
    bottom: "11.4%",
    left: "7.48%",
    position: "absolute",
  },
  rectangleParent: {
    right: "54.77%",
    width: "45.23%",
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
  },
  google: {
    left: "39.46%",
    color: Color.colorBlack,
    letterSpacing: 0.7,
    fontSize: FontSize.size_smi,
    top: "42.11%",
    width: "57.14%",
    height: "19.3%",
    textAlign: "left",
    fontFamily: FontFamily.sofiaPro,
    fontWeight: "500",
  },
  superGIcon: {
    height: "52.98%",
    width: "20.54%",
    top: "24.56%",
    right: "70.07%",
    bottom: "22.46%",
    left: "9.39%",
  },
  rectangleContainer: {
    left: "54.77%",
    width: "45.23%",
    height: "100%",
    top: "0%",
    bottom: "0%",
    right: "0%",
  },
  groupParent: {
    height: "66.28%",
    top: "33.72%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  signUpWith: {
    left: "37.85%",
    fontSize: FontSize.size_sm,
    color: Color.as,
    textAlign: "left",
    fontFamily: FontFamily.sofiaPro,
    fontWeight: "500",
    top: "0%",
  },
  lineView: {
    right: "68.36%",
    left: "-0.15%",
  },
  groupChild1: {
    right: "-0.15%",
    left: "68.36%",
  },
  lineParent: {
    width: "99.69%",
    top: "5.81%",
    left: "0.31%",
    height: 0,
    right: "0%",
    position: "absolute",
  },
  signup: {
    top: 698,
    left: 25,
    width: 325,
    height: 86,
    position: "absolute",
  },
});

export default Signup;
