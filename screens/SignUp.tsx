import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { Image } from "expo-image";
import Signup from "../components/Signup";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.signUp, styles.signLayout]}>
      <View style={[styles.signUpChild, styles.signLayout]} />
      <Signup path={require("../assets/path1.png")} />
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
        mode="text"
        labelStyle={styles.groupButtonBtn}
        onPress={() => navigation.navigate("HomeScreen")}
        contentStyle={styles.groupButtonBtn1}
      >
        SIGN UP
      </Button>
      <Text style={styles.alreadyHaveAnContainer}>
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
    fontFamily: "Sofia Pro",
  },
  groupButtonBtn1: {
    height: 60,
    width: 248,
  },
  signLayout: {
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    textAlign: "left",
     
    position: "absolute",
  },
  emailPosition: {
    left: "7.2%",
    right: "6.4%",
    fontSize: FontSize.size_base,
    width: "86.4%",
    height: "11.45%",
     
    position: "absolute",
  },
  signUpChild: {
    top: 0,
    left: 0,
    width: 375,
    position: "absolute",
  },
  signUp1: {
    top: 98,
    left: 26,
    fontSize: FontSize.size_17xl_4,
    lineHeight: 43,
    fontWeight: "600",
    color: Color.colorBlack,
    width: 129,
    height: 42,
  },
  signUpItem: {
    top: "21.06%",
    right: "6.67%",
    bottom: "67.49%",
    left: "6.93%",
    fontSize: FontSize.size_base,
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
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.as,
  },
  login: {
    color: Color.mainColor,
  },
  alreadyHaveAnContainer: {
    top: 634,
    left: 79,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    textAlign: "center",
    width: 218,
    height: 10,
     
    position: "absolute",
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
  },
});

export default SignUp;
