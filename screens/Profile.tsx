import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <View style={[styles.profileChild, styles.profileChildPosition]} />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.profileInner, styles.profileInnerLayout]}>
        <View style={[styles.groupWrapper, styles.profileInnerLayout]}>
          <View style={[styles.groupWrapper, styles.profileInnerLayout]}>
            <View style={styles.groupChild} />
            <Text style={[styles.save, styles.saveLayout]}>SAVE</Text>
          </View>
        </View>
      </View>
      <View style={styles.eljadEendazParent}>
        <Text style={styles.eljadEendaz}>Eljad Eendaz</Text>
        <Text style={styles.editProfile}>Edit Profile</Text>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.fullNameParent}>
          <Text style={[styles.fullName, styles.textFlexBox]}>Full name</Text>
          <View style={styles.groupItem} />
          <Text style={styles.eljadEendaz1}>Eljad Eendaz</Text>
        </View>
        <Text style={[styles.text, styles.textFlexBox]}>$ 1679.30</Text>
        <Text style={[styles.eMail, styles.eMailTypo]}>E-mail</Text>
        <View style={[styles.groupInner, styles.groupInnerShadowBox]} />
        <Text style={[styles.prelookstudiogmailcom, styles.text1Typo]}>
          prelookstudio@gmail.com
        </Text>
        <Text style={[styles.phoneNumber, styles.eMailTypo]}>Phone Number</Text>
        <View style={[styles.rectangleView, styles.groupInnerShadowBox]} />
        <Text style={[styles.text1, styles.text1Typo]}>+1 (783) 0986 8786</Text>
      </View>
      <View style={styles.profileItem} />
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group7.png")}
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
          source={require("../assets/group-18071.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  profileChildPosition: {
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
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  eMailTypo: {
    left: "2.93%",
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.subColor,
    fontFamily: FontFamily.textBox,
    position: "absolute",
  },
  groupInnerShadowBox: {
    borderColor: Color.colorWhitesmoke_200,
    height: "19.29%",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    left: "0%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text1Typo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.textBox_size,
    left: "4.69%",
    color: Color.ffffff,
    textAlign: "left",
    position: "absolute",
  },
  profileChild: {
    width: 375,
    position: "absolute",
    height: 812,
    left: 0,
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
    maxWidth: "100%",
    position: "absolute",
  },
  groupChild: {
    shadowColor: "rgba(254, 114, 76, 0.25)",
    shadowRadius: 30,
    elevation: 30,
    borderRadius: Border.br_9xl_5,
    backgroundColor: Color.primaryColor,
    width: 248,
    height: 60,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    left: 0,
    top: 0,
    position: "absolute",
  },
  save: {
    fontSize: FontSize.size_mini,
    letterSpacing: 1.2,
    width: 97,
    textAlign: "center",
    fontWeight: "600",
    height: 11,
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBold,
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
    color: Color.colorBlack,
    height: 20,
    fontSize: FontSize.size_xl,
    width: 140,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    left: 0,
    top: 0,
    position: "absolute",
  },
  editProfile: {
    top: 30,
    left: 34,
    fontSize: FontSize.size_sm,
    color: Color.subColor,
    fontFamily: FontFamily.textBox,
    textAlign: "center",
    position: "absolute",
  },
  eljadEendazParent: {
    top: 235,
    left: 119,
    height: 44,
    width: 140,
    position: "absolute",
  },
  fullName: {
    width: "31.27%",
    left: "2.65%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: "0%",
    color: Color.subColor,
    fontFamily: FontFamily.textBox,
  },
  groupItem: {
    height: "69.89%",
    top: "30.11%",
    borderColor: Color.primaryColor,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(233, 233, 233, 0.25)",
    bottom: "0%",
    right: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    left: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  eljadEendaz1: {
    width: "44.84%",
    top: "56.99%",
    left: "4.72%",
    color: Color.ffffff,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    position: "absolute",
  },
  fullNameParent: {
    height: "27.6%",
    bottom: "72.4%",
    right: "0.59%",
    top: "0%",
    width: "99.41%",
    left: "0%",
    position: "absolute",
  },
  text: {
    height: "7.12%",
    width: "30.44%",
    top: "50.74%",
    left: "6.42%",
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoBold,
  },
  eMail: {
    width: "16.42%",
    top: "36.2%",
  },
  groupInner: {
    top: "44.51%",
    bottom: "36.2%",
    borderColor: Color.colorWhitesmoke_200,
    height: "19.29%",
    right: "0%",
    width: "100%",
  },
  prelookstudiogmailcom: {
    width: "60.41%",
    top: "51.93%",
  },
  phoneNumber: {
    width: "34.02%",
    top: "72.4%",
  },
  rectangleView: {
    top: "80.71%",
    bottom: "0%",
    borderColor: Color.colorWhitesmoke_200,
    height: "19.29%",
    right: "0.59%",
    width: "99.41%",
  },
  text1: {
    top: "87.83%",
  },
  groupParent: {
    height: "41.5%",
    width: "90.93%",
    top: "40.39%",
    right: "4.27%",
    bottom: "18.1%",
    left: "4.8%",
    position: "absolute",
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
    maxWidth: "100%",
    width: "100%",
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
