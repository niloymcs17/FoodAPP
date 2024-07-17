import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signUp}>
      <View style={[styles.signUpChild, styles.groupItemPosition]} />
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
                source={require("../assets/path1.png")}
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
        <Text style={[styles.signUpWith, styles.signUpWithTypo]}>
          Sign up with
        </Text>
        <View style={styles.lineParent}>
          <View style={[styles.lineView, styles.lineViewLayout]} />
          <View style={[styles.groupChild1, styles.lineViewLayout]} />
        </View>
      </View>
      <Text style={[styles.signUp1, styles.textTypo]}>{`Sign Up
`}</Text>
      <TextInput
        style={styles.signUpItem}
        placeholder="Full name"
        autoCapitalize="words"
        placeholderTextColor="#9796a1"
      />
      <Text style={[styles.text, styles.textTypo]}>$ 1679.30</Text>
      <Button
        style={styles.signUpInner}
        mode="elevated"
        labelStyle={styles.groupButtonBtn}
        onPress={() => navigation.navigate("HomeScreen")}
        contentStyle={styles.groupButtonBtn1}
      >
        SIGN UP
      </Button>
      <Text style={[styles.alreadyHaveAnContainer, styles.signUpWithTypo]}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account? `}</Text>
        <Text style={styles.login}>Login</Text>
      </Text>
      <TextInput
        style={[styles.password, styles.emailPosition]}
        placeholder="Password"
        keyboardType="default"
        autoCapitalize="none"
        placeholderTextColor="#9796a1"
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-126.png")}
      />
      <Image
        style={styles.signUpChild1}
        contentFit="cover"
        source={require("../assets/ellipse-127.png")}
      />
      <Image
        style={styles.signUpChild2}
        contentFit="cover"
        source={require("../assets/ellipse-128.png")}
      />
      <TextInput
        style={[styles.email, styles.emailPosition]}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#9796a1"
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
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    letterSpacing: 0.7,
    fontSize: FontSize.size_smi,
    top: 24,
    textAlign: "left",
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
    position: "absolute",
    overflow: "hidden",
  },
  signUpWithTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
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
  textTypo: {
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    position: "absolute",
  },
  emailPosition: {
    left: "7.2%",
    right: "6.4%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.textBox,
    width: "86.4%",
    height: "11.45%",
    position: "absolute",
  },
  signUpChild: {
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
    bottom: "0%",
    left: "28.61%",
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
  signUpWith: {
    left: 123,
    color: Color.as,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    top: 0,
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
  signUp1: {
    top: 98,
    left: 26,
    fontSize: FontSize.size_17xl_4,
    lineHeight: 43,
    fontWeight: "600",
    width: 129,
    height: 42,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
  },
  signUpItem: {
    top: "21.06%",
    right: "6.67%",
    bottom: "67.49%",
    left: "6.93%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.textBox,
    width: "86.4%",
    height: "11.45%",
    position: "absolute",
  },
  text: {
    height: "2.96%",
    width: "27.68%",
    top: "42.12%",
    left: "10.91%",
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  signUpInner: {
    top: 541,
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
  alreadyHaveAn: {
    color: Color.as,
  },
  login: {
    color: Color.primaryColor,
  },
  alreadyHaveAnContainer: {
    top: 634,
    left: 79,
    textAlign: "center",
    width: 218,
    height: 10,
  },
  password: {
    top: "51.11%",
    bottom: "37.44%",
  },
  ellipseIcon: {
    top: -21,
    left: -46,
    width: 96,
    height: 96,
    position: "absolute",
  },
  signUpChild1: {
    top: -99,
    left: -5,
    width: 165,
    height: 165,
    position: "absolute",
  },
  signUpChild2: {
    top: -109,
    left: 298,
    width: 181,
    height: 181,
    position: "absolute",
  },
  email: {
    top: "36.08%",
    bottom: "52.46%",
  },
  signUp: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default SignUp;
