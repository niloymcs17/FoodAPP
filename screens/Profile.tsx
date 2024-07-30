import React from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {  Color, Border, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.navigate("SideMenu")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
      </Pressable>
      <View style={styles.header}>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />
      </View>
      <Pressable style={styles.saveButton}>
        <Text style={styles.saveButtonText}>SAVE</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    padding: 20,
    backgroundColor: Color.colorWhite,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  icon: {
    width: 50,
    height: 50,
  },
  header: {
    marginTop: 80,
    alignItems: "center",
  },
  headerText: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  formContainer: {
    marginTop: 40,
  },
  input: {
    height: 50,
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    borderRadius: Border.br_md,
    paddingLeft: 10,
    marginBottom: 20,
    fontSize: FontSize.size_md,
  },
  saveButton: {
    height: 50,
    borderRadius: Border.br_md,
    backgroundColor: Color.mainColor,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_md,
    fontWeight: "600",
  },
});

export default Profile;
