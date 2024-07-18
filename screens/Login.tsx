import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Signup from "../components/Signup";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <View style={styles.loginChild} />
      <Button
        style={styles.loginItem}
        mode="contained"
        labelStyle={styles.groupButtonBtn}
        onPress={() => navigation.navigate("HomeScreen")}
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
        <View style={styles.groupShadowBox} />
        <Text style={[styles.yourEmailOr, styles.textTypo]}>
          Your email or phone
        </Text>
      </View>
      <View style={[styles.passwordParent, styles.parentPosition]}>
        <Text style={[styles.password, styles.eMailTypo]}>Password</Text>
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
        <Text style={[styles.yourEmailOr, styles.textTypo]}>Password</Text>
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
        style={[styles.loginChild2, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-17955.png")}
      />
      <Signup path={require("../assets/path.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupButtonBtn: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Sofia Pro",
  },
  groupButtonBtn1: {
    height: 60,
    width: 248,
  },
  forgotPasswordTypo: {
    height: 10,
    textAlign: "center",
    fontFamily: FontFamily.sofiaPro,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sofiaPro,
    position: "absolute",
  },
  parentPosition: {
    right: "6.4%",
    width: "86.4%",
    height: "11.45%",
    left: "7.2%",
    position: "absolute",
  },
  eMailTypo: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_base,
    left: "0.62%",
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.sofiaPro,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginChild: {
    top: 0,
    left: 0,
    width: 375,
    position: "absolute",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  loginItem: {
    top: 540,
    left: 65,
    shadowColor: "rgba(122, 129, 190, 0.16)",
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    position: "absolute",
  },
  dontHaveAn: {
    color: Color.as,
  },
  signUp: {
    color: Color.mainColor,
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
    color: Color.mainColor,
  },
  login1: {
    top: 180,
    left: 26,
    fontSize: FontSize.size_17xl_4,
    lineHeight: 43,
    fontWeight: "600",
    color: Color.colorBlack,
    width: 247,
    height: 40,
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
  groupShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "30.11%",
    height: "69.89%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  yourEmailOr: {
    width: "63.58%",
    top: "53.76%",
    left: "6.17%",
    fontSize: FontSize.size_mid,
    color: Color.colorSilver_100,
  },
  eMailParent: {
    top: "30.91%",
    bottom: "57.64%",
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
  },
  passwordParent: {
    top: "45.94%",
    bottom: "42.61%",
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
    left: "7.2%",
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
