import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RessetPassword = () => {
  return (
    <View style={[styles.ressetPassword, styles.ressetLayout]}>
      <View style={[styles.ressetPasswordChild, styles.groupPosition]} />
      <Text style={styles.ressetPassword1}>Resset Password</Text>
      <Image
        style={styles.ressetPasswordItem}
        contentFit="cover"
        source={require("../assets/ellipse-126.png")}
      />
      <Image
        style={styles.ressetPasswordInner}
        contentFit="cover"
        source={require("../assets/ellipse-127.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-128.png")}
      />
      <Text style={[styles.pleaseEnterYour, styles.pleaseEnterYourTypo]}>
        Please enter your email address to request a password reset
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text
          style={[styles.prelookstudiogmailcom, styles.pleaseEnterYourTypo]}
        >
          prelookstudio@gmail.com
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupWrapper, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text style={styles.sendNewPassword}>Send new password</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-17955.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ressetLayout: {
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  pleaseEnterYourTypo: {
    fontFamily: FontFamily.textBox,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 60,
    width: 248,
    position: "absolute",
  },
  ressetPasswordChild: {
    width: 375,
    position: "absolute",
    height: 812,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  ressetPassword1: {
    top: 180,
    fontSize: FontSize.size_17xl_4,
    lineHeight: 43,
    color: Color.colorBlack,
    width: 296,
    height: 40,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    left: 26,
    position: "absolute",
  },
  ressetPasswordItem: {
    top: -21,
    left: -46,
    width: 96,
    height: 96,
    position: "absolute",
  },
  ressetPasswordInner: {
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
  pleaseEnterYour: {
    top: 234,
    fontSize: FontSize.size_sm,
    lineHeight: 19,
    color: Color.subColor,
    width: 236,
    height: 29,
    left: 26,
    fontFamily: FontFamily.textBox,
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    shadowColor: "rgba(211, 209, 216, 0.25)",
    shadowRadius: 30,
    elevation: 30,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.primaryColor,
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  prelookstudiogmailcom: {
    width: "82.41%",
    top: "36.92%",
    left: "6.17%",
    fontSize: FontSize.size_lg,
    color: Color.ffffff,
    display: "flex",
    alignItems: "center",
  },
  rectangleParent: {
    height: "8%",
    width: "86.4%",
    top: "37.07%",
    right: "6.67%",
    bottom: "54.93%",
    left: "6.93%",
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_9xl_5,
    backgroundColor: Color.primaryColor,
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(122, 129, 190, 0.16)",
    width: 248,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 15,
    },
    left: 0,
    top: 0,
  },
  sendNewPassword: {
    height: "18.33%",
    width: "64.11%",
    top: "41.67%",
    left: "18.15%",
    fontSize: FontSize.size_mini,
    letterSpacing: 1.2,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupWrapper: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 417,
    left: 65,
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(122, 129, 190, 0.16)",
    width: 248,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 15,
    },
  },
  groupIcon: {
    height: "4.68%",
    width: "10.13%",
    top: "4.56%",
    right: "82.67%",
    bottom: "90.76%",
    left: "7.2%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ressetPassword: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default RessetPassword;
