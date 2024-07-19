import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {  Color, FontSize, Border } from "../GlobalStyles";

const FullNameForm = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.fullNameParent}>
        <Text style={[styles.fullName, styles.textTypo]}>Full name</Text>
        <View style={styles.groupChild} />
        <Text style={styles.eljadEendaz}>Eljad Eendaz</Text>
      </View>
      <Text style={[styles.text, styles.textTypo]}>$ 1679.30</Text>
      <Text style={[styles.eMail, styles.eMailTypo]}>E-mail</Text>
      <View style={[styles.groupItem, styles.groupShadowBox]} />
      <Text style={[styles.prelookstudiogmailcom, styles.text1Typo]}>
        prelookstudio@gmail.com
      </Text>
      <Text style={[styles.phoneNumber, styles.eMailTypo]}>Phone Number</Text>
      <View style={[styles.groupInner, styles.groupShadowBox]} />
      <Text style={[styles.text1, styles.text1Typo]}>+1 (783) 0986 8786</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    position: "absolute",
  },
  eMailTypo: {
    left: "2.93%",
    textAlign: "left",
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupShadowBox: {
    borderColor: Color.colorWhitesmoke_100,
    height: "19.29%",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    shadowColor: "rgba(233, 233, 233, 0.25)",
    left: "0%",
    position: "absolute",
  },
  text1Typo: {
    fontWeight: "500",
    fontSize: FontSize.size_mid,
    left: "4.69%",
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  fullName: {
    width: "31.27%",
    left: "2.65%",
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: "0%",
  },
  groupChild: {
    height: "69.89%",
    top: "30.11%",
    borderColor: Color.mainColor,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 45,
    shadowRadius: 45,
    shadowOffset: {
      width: 15,
      height: 20,
    },
    shadowColor: "rgba(233, 233, 233, 0.25)",
    bottom: "0%",
    right: "0%",
    width: "100%",
    left: "0%",
    position: "absolute",
  },
  eljadEendaz: {
    width: "44.84%",
    top: "56.99%",
    left: "4.72%",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  fullNameParent: {
    height: "27.6%",
    bottom: "72.4%",
    left: "0%",
    right: "0.59%",
    top: "0%",
    width: "99.41%",
    position: "absolute",
  },
  text: {
    height: "7.12%",
    width: "30.44%",
    top: "50.74%",
    left: "6.42%",
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "left",
  },
  eMail: {
    width: "16.42%",
    top: "36.2%",
  },
  groupItem: {
    top: "44.51%",
    bottom: "36.2%",
    borderColor: Color.colorWhitesmoke_100,
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
  groupInner: {
    top: "80.71%",
    bottom: "0%",
    borderColor: Color.colorWhitesmoke_100,
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
});

export default FullNameForm;
