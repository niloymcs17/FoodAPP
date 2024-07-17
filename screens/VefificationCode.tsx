import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const VefificationCode = () => {
  return (
    <View style={[styles.vefificationCode, styles.vefificationLayout]}>
      <View style={[styles.vefificationCodeChild, styles.vefificationLayout]} />
      <Text style={[styles.vefificationCode1, styles.pleaseTypeThePosition]}>
        Vefification Code
      </Text>
      <Image
        style={styles.vefificationCodeItem}
        contentFit="cover"
        source={require("../assets/ellipse-126.png")}
      />
      <Image
        style={styles.vefificationCodeInner}
        contentFit="cover"
        source={require("../assets/ellipse-127.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-128.png")}
      />
      <Text style={[styles.pleaseTypeThe, styles.pleaseTypeThePosition]}>
        Please type the verification code sent to prelookstudio@gmail.com
      </Text>
      <View style={[styles.groupParent, styles.groupPosition2]}>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.text, styles.textTypo]}>5</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <Text style={[styles.text, styles.textTypo]}>3</Text>
        </View>
        <View style={[styles.groupInner, styles.groupPosition]} />
        <View style={[styles.rectangleView, styles.groupPosition]} />
        <View style={styles.lineView} />
      </View>
      <Text style={[styles.iDontRecevieContainer, styles.textTypo]}>
        <Text style={styles.iDontRecevie}>{`I don’t recevie a code! `}</Text>
        <Text style={styles.pleaseResend}>Please resend</Text>
      </Text>
      <Image
        style={[styles.groupIcon, styles.groupPosition2]}
        contentFit="cover"
        source={require("../assets/group-17955.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vefificationLayout: {
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  pleaseTypeThePosition: {
    left: 26,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition2: {
    left: "7.2%",
    position: "absolute",
  },
  rectanglePosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "20.31%",
    position: "absolute",
  },
  groupPosition: {
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    borderStyle: "solid",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  vefificationCodeChild: {
    top: 0,
    left: 0,
    width: 375,
    position: "absolute",
  },
  vefificationCode1: {
    top: 180,
    fontSize: FontSize.size_17xl_4,
    lineHeight: 43,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
    width: 296,
    height: 40,
    textAlign: "left",
  },
  vefificationCodeItem: {
    top: -21,
    left: -46,
    width: 96,
    height: 96,
    position: "absolute",
  },
  vefificationCodeInner: {
    top: -99,
    left: -5,
    width: 165,
    height: 165,
    position: "absolute",
  },
  ellipseIcon: {
    top: -109,
    left: 298,
    width: 181,
    height: 181,
    position: "absolute",
  },
  pleaseTypeThe: {
    top: 232,
    fontSize: FontSize.size_sm,
    lineHeight: 19,
    fontFamily: FontFamily.textBox,
    color: Color.subColor,
    width: 289,
    textAlign: "left",
  },
  groupChild: {
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_3xs,
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    right: "0%",
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    left: "0%",
    width: "100%",
  },
  text: {
    top: 22,
    left: 25,
    fontSize: FontSize.size_8xl_2,
    width: 16,
    height: 20,
    color: Color.primaryColor,
    textAlign: "left",
  },
  rectangleParent: {
    right: "79.69%",
    left: "0%",
  },
  groupItem: {
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_3xs,
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    right: "0%",
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    left: "0%",
    width: "100%",
  },
  rectangleGroup: {
    right: "53.13%",
    left: "26.56%",
  },
  groupInner: {
    right: "26.56%",
    left: "53.13%",
    shadowColor: "rgba(211, 209, 216, 0.25)",
    shadowRadius: 30,
    elevation: 30,
    borderRadius: 14,
    borderColor: Color.primaryColor,
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    width: "20.31%",
  },
  rectangleView: {
    left: "79.69%",
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_3xs,
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    right: "0%",
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    width: "20.31%",
  },
  lineView: {
    height: "36.15%",
    width: "0.47%",
    top: "31.23%",
    right: "38.19%",
    bottom: "32.62%",
    left: "61.34%",
    borderColor: "#ffc529",
    borderRightWidth: 1.5,
    borderStyle: "solid",
    position: "absolute",
  },
  groupParent: {
    height: "8%",
    width: "85.33%",
    top: "37.07%",
    right: "7.47%",
    bottom: "54.93%",
  },
  iDontRecevie: {
    color: Color.as,
  },
  pleaseResend: {
    color: Color.primaryColor,
  },
  iDontRecevieContainer: {
    top: 398,
    left: 54,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  groupIcon: {
    height: "4.68%",
    width: "10.13%",
    top: "4.56%",
    right: "82.67%",
    bottom: "90.76%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vefificationCode: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default VefificationCode;
