import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {  Color, FontSize, Border } from "../GlobalStyles";

const Welcome = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.welcome}
      onPress={() => navigation.navigate("Login")}
    >
      <Image
        style={styles.brookeLarkLcz9nxhosloUnsplaIcon}
        contentFit="cover"
        source={require("../assets/brookelarklcz9nxhoslounsplash-1.png")}
      />
      <LinearGradient
        style={styles.welcomeChild}
        locations={[0, 1]}
        colors={["rgba(73, 77, 99, 0)", "#191b2f"]}
      />
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
      </View>
      <View style={styles.alreadyHaveAnAccountParent}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account? `}</Text>
        <Text style={[styles.signIn, styles.signInTypo]}>Sign In</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.frameItemLayout]}>
        <View style={[styles.frameItem, styles.frameItemLayout]} />
        <Text style={[styles.startWithEmail, styles.signInTypo]}>
          Start with email or phone
        </Text>
      </View>
      <View style={[styles.welcomeToFoodhubParent, styles.welcomePosition]}>
        <Text
          style={[styles.welcomeToFoodhubContainer, styles.welcomePosition]}
        >
          <Text style={styles.welcomeTo}>{`Welcome to
`}</Text>
          <Text style={styles.foodhub}>FoodHub</Text>
        </Text>
        <Text style={[styles.yourFavouriteFoods, styles.skipTypo]}>
          Your favourite foods delivered fast at your door.
        </Text>
      </View>
      <View style={styles.rectangle} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 32,
    width: 55,
    position: "absolute",
  },
  skipTypo: {
    textAlign: "left",
  },
  signInTypo: {
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  frameItemLayout: {
    height: 54,
    width: 315,
    position: "absolute",
  },
  welcomePosition: {
    width: 311,
    left: 28,
    position: "absolute",
  },
  brookeLarkLcz9nxhosloUnsplaIcon: {
    top: -25,
    left: -46,
    width: 1118,
    height: 838,
    position: "absolute",
  },
  welcomeChild: {
    width: 375,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  frameChild: {
    shadowColor: "rgba(211, 209, 216, 0.25)",
    shadowOffset: {
      width: 17.873435974121094,
      height: 17.873435974121094,
    },
    shadowRadius: 35.75,
    elevation: 35.75,
    shadowOpacity: 1,
    borderRadius: 27,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  skip: {
    top: 10,
    left: 307,
    fontSize: FontSize.size_sm,
    width: 27,
    height: 11,
    color: Color.mainColor,
    position: "absolute",
  },
  rectangleParent: {
    top: 26,
    left: 293,
  },
  alreadyHaveAn: {
    top: 1,
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    left: 65,
    position: "absolute",
  },
  signIn: {
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    left: 0,
    top: 0,
  },
  alreadyHaveAnAccountParent: {
    top: 746,
    width: 245,
    height: 17,
    left: 65,
    position: "absolute",
  },
  frameItem: {
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.21)",
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    left: 0,
    top: 0,
  },
  startWithEmail: {
    top: 19,
    left: 89,
    fontSize: FontSize.size_mid,
    color: Color.colorGray_100,
  },
  rectangleGroup: {
    top: 668,
    left: 29,
  },
  welcomeTo: {
    fontSize: 53,
    color: Color.colorGray_200,
  },
  foodhub: {
    fontSize: 45,
    color: Color.mainColor,
  },
  welcomeToFoodhubContainer: {
    fontWeight: "700",
    height: 111,
    textAlign: "left",
    top: 0,
  },
  yourFavouriteFoods: {
    top: 130,
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    color: "#30384f",
    width: 266,
    opacity: 0.87,
    left: 0,
    position: "absolute",
  },
  welcomeToFoodhubParent: {
    top: 160,
    height: 184,
  },
  rectangle: {
    marginLeft: -66.5,
    bottom: 16,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  welcome: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default Welcome;
