import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import FullNameForm from "../components/FullNameForm";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <View style={[styles.profileChild, styles.groupChildPosition]} />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.profileInner, styles.profileInnerLayout]}>
        <View style={[styles.groupWrapper, styles.profileInnerLayout]}>
          <View style={[styles.groupWrapper, styles.profileInnerLayout]}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={[styles.save, styles.saveLayout]}>SAVE</Text>
          </View>
        </View>
      </View>
      <View style={[styles.eljadEendazParent, styles.eljadLayout]}>
        <Text style={[styles.eljadEendaz, styles.eljadLayout]}>
          Eljad Eendaz
        </Text>
        <Text style={[styles.editProfile, styles.saveTypo]}>Edit Profile</Text>
      </View>
      <FullNameForm />
      <View style={styles.profileItem} />
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-129.png")}
      />
      <Image
        style={[styles.profileChild1, styles.saveLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-130.png")}
      />
      <Image
        style={styles.profileChild2}
        contentFit="cover"
        source={require("../assets/group-18153.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("SideMenu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-180711.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  profileInnerLayout: {
    height: 0,
    width: 0,
    position: "absolute",
  },
  saveLayout: {
    height: 11,
    position: "absolute",
  },
  eljadLayout: {
    width: 140,
    position: "absolute",
  },
  saveTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sofiaPro,
  },
  profileChild: {
    width: 375,
    position: "absolute",
    height: 812,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  groupIcon: {
    height: "35.1%",
    width: "100.8%",
    top: "-14.9%",
    right: "-0.8%",
    bottom: "79.8%",
    left: "0%",
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(254, 114, 76, 0.25)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderRadius: Border.br_9xl_5,
    backgroundColor: Color.mainColor,
    width: 248,
    height: 60,
    position: "absolute",
  },
  save: {
    fontSize: FontSize.size_mini,
    letterSpacing: 1.2,
    color: Color.colorWhite,
    width: 97,
    textAlign: "center",
    fontFamily: FontFamily.sofiaPro,
    fontWeight: "600",
  },
  groupWrapper: {
    left: 0,
    top: 0,
  },
  profileInner: {
    top: 719,
    left: 65,
    display: "none",
  },
  eljadEendaz: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    height: 20,
    textAlign: "center",
    fontFamily: FontFamily.sofiaPro,
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  editProfile: {
    top: 30,
    left: 34,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray_100,
    position: "absolute",
  },
  eljadEendazParent: {
    top: 235,
    left: 119,
    height: 44,
  },
  profileItem: {
    top: 114,
    left: 134,
    borderRadius: 54,
    width: 108,
    height: 108,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  maskGroupIcon: {
    top: 123,
    left: 143,
    width: 90,
    height: 90,
    position: "absolute",
  },
  ellipseIcon: {
    top: 196,
    left: 207,
    width: 17,
    height: 17,
    position: "absolute",
  },
  profileChild1: {
    top: 199,
    left: 210,
    width: 11,
  },
  profileChild2: {
    top: 190,
    left: 201,
    width: 27,
    height: 27,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  wrapper: {
    left: "6.93%",
    top: "4.56%",
    right: "82.93%",
    bottom: "90.76%",
    width: "10.13%",
    height: "4.68%",
    position: "absolute",
  },
  profile: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Profile;
