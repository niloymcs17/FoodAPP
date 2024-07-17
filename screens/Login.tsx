import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <View style={[styles.loginChild, styles.groupItemPosition]} />
      <View style={styles.groupParent}>
        <View style={styles.groupContainer}>
          <View style={[styles.rectangleParent, styles.rectangleLayout]}>
            <View style={styles.groupShadowBox} />
            <Text style={[styles.facebook, styles.googleTypo]}>FACEBOOK</Text>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Image
                style={[styles.pathIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/path.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View style={styles.groupShadowBox} />
            <Text style={[styles.google, styles.googleTypo]}>GOOGLE</Text>
            <Image
              style={[styles.superGIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/super-g.png")}
            />
          </View>
        </View>
        <Text style={styles.signInWith}>Sign in with</Text>
        <View style={styles.lineParent}>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View style={[styles.groupChild1, styles.lineViewLayout]} />
        </View>
      </View>
      <Button
        style={styles.loginItem}
        mode="contained"
        labelStyle={styles.groupButtonBtn}
        contentStyle={styles.groupButtonBtn1}
      >
        Login
      </Button>
      <Text style={[styles.dontHaveAnContainer, styles.forgotPasswordTypo]}>
        <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
        <Text style={styles.signUp}>Sign Up</Text>
      </Text>
      <Text style={[styles.forgotPassword, styles.forgotPasswordTypo]}>
        Forgot password?
      </Text>
      <Text style={[styles.login1, styles.textTypo]}>Login</Text>
      <Text style={[styles.text, styles.textTypo]}>$ 1679.30</Text>
      <View style={[styles.eMailParent, styles.parentPosition]}>
        <Text style={[styles.eMail, styles.eMailTypo]}>E-mail</Text>
        <View style={styles.groupChild2ShadowBox} />
        <Text style={styles.yourEmailOr}>Your email or phone</Text>
      </View>
      <View style={[styles.passwordParent, styles.parentPosition]}>
        <Text style={[styles.password, styles.eMailTypo]}>Password</Text>
        <View style={styles.groupChild2ShadowBox} />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
        <Text style={styles.yourEmailOr}>Password</Text>
      </View>
      <Image
        style={styles.loginInner}
        contentFit="cover"
        source={require("../assets/ellipse-126.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-127.png")}
      />
      <Image
        style={styles.loginChild1}
        contentFit="cover"
        source={require("../assets/ellipse-128.png")}
      />
      <Image
        style={[styles.loginChild2, styles.parentPosition]}
        contentFit="cover"
        source={require("../assets/group-17955.png")}
      />
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
    height: 60,
    width: 248,
  },
  groupItemPosition: {
    top: 0,
    left: 0,
  },
  rectangleLayout: {
    width: 147,
    height: 57,
    top: 0,
    position: "absolute",
  },
  googleTypo: {
    height: 11,
    width: 84,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    letterSpacing: 0.7,
    fontSize: FontSize.size_smi,
    top: 24,
    color: Color.colorBlack,
    position: "absolute",
  },
  groupLayout: {
    width: 38,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  lineViewLayout: {
    height: 1,
    width: 103,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  forgotPasswordTypo: {
    height: 10,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    position: "absolute",
  },
  parentPosition: {
    left: "7.2%",
    position: "absolute",
  },
  eMailTypo: {
    color: Color.subColor,
    fontSize: FontSize.size_base,
    left: "0.62%",
    top: "0%",
    fontFamily: FontFamily.textBox,
    textAlign: "left",
    position: "absolute",
  },
  loginChild: {
    width: 375,
    left: 0,
    position: "absolute",
    height: 812,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  groupShadowBox: {
    borderRadius: Border.br_9xl_5,
    elevation: 37.17,
    shadowRadius: 37.17,
    shadowColor: "rgba(211, 209, 216, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.586957931518555,
      height: 18.586957931518555,
    },
    width: 147,
    height: 57,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  facebook: {
    left: 59,
  },
  groupItem: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorRoyalblue,
    height: 38,
    left: 0,
    top: 0,
  },
  pathIcon: {
    height: "82.53%",
    width: "45.67%",
    top: "17.47%",
    right: "25.72%",
    left: "28.61%",
    bottom: "0%",
    maxWidth: "100%",
    position: "absolute",
  },
  rectangleGroup: {
    top: 11,
    left: 11,
    height: 40,
  },
  rectangleParent: {
    left: 0,
  },
  google: {
    left: 58,
  },
  superGIcon: {
    height: "52.98%",
    width: "20.54%",
    top: "24.56%",
    right: "70.07%",
    bottom: "22.46%",
    left: "9.39%",
    position: "absolute",
  },
  rectangleContainer: {
    left: 178,
  },
  groupContainer: {
    top: 29,
    height: 57,
    width: 325,
    left: 0,
    position: "absolute",
  },
  signInWith: {
    left: 126,
    color: Color.as,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  lineView: {
    left: 0,
  },
  groupChild1: {
    left: 222,
  },
  lineParent: {
    top: 5,
    left: 1,
    width: 324,
    height: 0,
    position: "absolute",
  },
  groupParent: {
    top: 698,
    left: 25,
    height: 86,
    width: 325,
    position: "absolute",
  },
  loginItem: {
    top: 540,
    left: 65,
    shadowColor: "rgba(122, 129, 190, 0.16)",
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.586957931518555,
      height: 18.586957931518555,
    },
    position: "absolute",
  },
  dontHaveAn: {
    color: Color.as,
  },
  signUp: {
    color: Color.primaryColor,
  },
  dontHaveAnContainer: {
    top: 632,
    left: 79,
    width: 218,
  },
  forgotPassword: {
    top: 498,
    left: 88,
    width: 200,
    color: Color.primaryColor,
  },
  login1: {
    top: 180,
    left: 26,
    fontSize: FontSize.size_17xl_4,
    lineHeight: 43,
    fontWeight: "600",
    width: 247,
    height: 40,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
  },
  text: {
    height: "2.96%",
    width: "27.68%",
    top: "36.95%",
    left: "10.91%",
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  eMail: {
    width: "17.28%",
  },
  groupChild2ShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_3xs,
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    left: "0%",
    right: "0%",
    top: "30.11%",
    height: "69.89%",
    borderStyle: "solid",
    bottom: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.586957931518555,
      height: 18.586957931518555,
    },
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  yourEmailOr: {
    width: "63.58%",
    top: "53.76%",
    left: "6.17%",
    fontSize: FontSize.textBox_size,
    color: Color.c4C4C4,
    fontFamily: FontFamily.textBox,
    textAlign: "left",
    position: "absolute",
  },
  eMailParent: {
    top: "30.91%",
    bottom: "57.64%",
    right: "6.4%",
    width: "86.4%",
    height: "11.45%",
    left: "7.2%",
  },
  password: {
    width: "23.46%",
  },
  groupIcon: {
    height: "13.01%",
    width: "5.43%",
    top: "56.99%",
    right: "6.91%",
    bottom: "30%",
    left: "87.65%",
    position: "absolute",
  },
  passwordParent: {
    top: "45.94%",
    bottom: "42.61%",
    right: "6.4%",
    width: "86.4%",
    height: "11.45%",
    left: "7.2%",
  },
  loginInner: {
    top: -21,
    left: -46,
    width: 96,
    height: 96,
    position: "absolute",
  },
  ellipseIcon: {
    top: -99,
    left: -5,
    width: 165,
    height: 165,
    position: "absolute",
  },
  loginChild1: {
    top: -109,
    left: 298,
    width: 181,
    height: 181,
    position: "absolute",
  },
  loginChild2: {
    height: "4.68%",
    width: "10.13%",
    top: "4.56%",
    right: "82.67%",
    bottom: "90.76%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  login: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default Login;
