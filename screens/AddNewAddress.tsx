import React, { useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export type AddNewAddressType = {
  state?: any;
  navigation?: any;
};

const AddNewAddress = ({ state, navigation }: AddNewAddressType) => {
  const [drawerItemsNormal] = useState([]);
  const [drawerItemsActive] = useState([]);
  const stateIndex = !state ? 0 : state.index;

  return (
    <View style={styles.addNewAddress}>
      <View style={[styles.fullNameParent, styles.parentLayout]}>
        <Text style={[styles.fullName, styles.fullNameTypo]}>Full name</Text>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.arleneMccoy, styles.textTypo]}>Arlene McCoy</Text>
      </View>
      <View style={[styles.stateParent, styles.parentLayout]}>
        <Text style={[styles.fullName, styles.fullNameTypo]}>State</Text>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text style={[styles.arleneMccoy, styles.textTypo]}>Slect State</Text>
      </View>
      <View style={[styles.cityParent, styles.parentLayout]}>
        <Text style={[styles.fullName, styles.fullNameTypo]}>City</Text>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Text style={[styles.arleneMccoy, styles.textTypo]}>Select City</Text>
      </View>
      <View
        style={[styles.streetIncludeHouseNumberParent, styles.parentLayout]}
      >
        <Text style={[styles.streetIncludeHouse, styles.fullNameTypo]}>
          Street (Include house number)
        </Text>
        <View style={[styles.rectangleView, styles.frameLayout]} />
        <Text style={[styles.street, styles.textTypo]}>Street</Text>
      </View>
      <Pressable
        style={[styles.saveWrapper, styles.wrapperShadowBox]}
        onPress={() => navigation.navigate("SideMenu")}
      >
        <Text style={styles.save}>Save</Text>
      </Pressable>
      <View style={[styles.mobileNumberParent, styles.parentLayout]}>
        <Text style={[styles.mobileNumber, styles.fullNameTypo]}>
          Mobile number
        </Text>
        <View style={[styles.wrapper, styles.wrapperShadowBox]}>
          <Text style={[styles.text, styles.textTypo]}>018-49862746</Text>
        </View>
      </View>
      <Text style={styles.addNewAddress1}>Add new address</Text>
      <Image
        style={[styles.path3391Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/path-3391.png")}
      />
      <Image
        style={[styles.path3391Icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/path-33911.png")}
      />
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("SideMenu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-18071.png")}
        />
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("SideMenu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-18071.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 93,
    width: 324,
    position: "absolute",
  },
  fullNameTypo: {
    textAlign: "left",
    color: Color.subColor,
    fontFamily: FontFamily.textBox,
    fontSize: FontSize.size_base,
    top: "0%",
    position: "absolute",
  },
  frameLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "30.11%",
    height: "69.89%",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    fontSize: FontSize.textBox_size,
    textAlign: "left",
    fontFamily: FontFamily.textBox,
  },
  wrapperShadowBox: {
    paddingVertical: 0,
    justifyContent: "center",
    elevation: 30,
    shadowRadius: 30,
    shadowOpacity: 1,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  fullName: {
    width: "32.72%",
    left: "8.64%",
    color: Color.subColor,
    fontFamily: FontFamily.textBox,
    fontSize: FontSize.size_base,
    top: "0%",
  },
  frameChild: {
    borderColor: Color.colorWhitesmoke_200,
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "30.11%",
    height: "69.89%",
    position: "absolute",
  },
  arleneMccoy: {
    top: "55.91%",
    color: Color.ffffff,
    left: "6.79%",
    width: "46.91%",
    fontSize: FontSize.textBox_size,
    position: "absolute",
  },
  fullNameParent: {
    top: 109,
    left: 26,
    width: 324,
  },
  frameItem: {
    borderColor: Color.colorWhitesmoke_200,
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "30.11%",
    height: "69.89%",
    position: "absolute",
  },
  stateParent: {
    top: 343,
    left: 26,
    width: 324,
  },
  frameInner: {
    borderColor: Color.colorWhitesmoke_200,
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "30.11%",
    height: "69.89%",
    position: "absolute",
  },
  cityParent: {
    top: 460,
    left: 26,
    width: 324,
  },
  streetIncludeHouse: {
    width: "73.77%",
    left: "8.64%",
    color: Color.subColor,
    fontFamily: FontFamily.textBox,
    fontSize: FontSize.size_base,
    top: "0%",
  },
  rectangleView: {
    borderColor: Color.colorWhitesmoke_200,
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    shadowColor: "rgba(233, 233, 233, 0.25)",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "30.11%",
    height: "69.89%",
    position: "absolute",
  },
  street: {
    top: "53.76%",
    color: Color.c4C4C4,
    left: "6.79%",
    width: "46.91%",
    fontSize: FontSize.textBox_size,
    position: "absolute",
  },
  streetIncludeHouseNumberParent: {
    top: 577,
    left: 26,
    width: 324,
  },
  save: {
    fontSize: FontSize.size_mini,
    letterSpacing: 1.2,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorWhite,
    width: 97,
    height: 11,
    textAlign: "center",
  },
  saveWrapper: {
    top: 714,
    left: 54,
    shadowColor: "rgba(254, 114, 76, 0.25)",
    borderRadius: Border.br_9xl_5,
    backgroundColor: Color.primaryColor,
    width: 248,
    height: 60,
    alignItems: "flex-end",
    paddingHorizontal: 10,
  },
  mobileNumber: {
    width: "39.2%",
    left: "8.95%",
    color: Color.subColor,
    fontFamily: FontFamily.textBox,
    fontSize: FontSize.size_base,
    top: "0%",
  },
  text: {
    width: 206,
    color: Color.ffffff,
  },
  wrapper: {
    shadowColor: "rgba(211, 209, 216, 0.25)",
    borderColor: Color.primaryColor,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "30.11%",
    height: "69.89%",
    width: "100%",
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
    elevation: 30,
    shadowRadius: 30,
  },
  mobileNumberParent: {
    top: 226,
    left: 27,
  },
  addNewAddress1: {
    top: "5.79%",
    left: "30.13%",
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    textAlign: "center",
    color: Color.ffffff,
    position: "absolute",
  },
  path3391Icon: {
    top: "50.41%",
    bottom: "48.4%",
    left: "84.8%",
    right: "13.87%",
    width: "1.33%",
    height: "1.19%",
    maxWidth: "100%",
    position: "absolute",
  },
  path3391Icon1: {
    top: "65.39%",
    bottom: "33.41%",
    left: "84.8%",
    right: "13.87%",
    width: "1.33%",
    height: "1.19%",
    maxWidth: "100%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  container: {
    left: "6.93%",
    top: "4.56%",
    right: "82.93%",
    bottom: "90.76%",
    width: "10.13%",
    height: "4.68%",
    position: "absolute",
  },
  addNewAddress: {
    width: 375,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AddNewAddress;
