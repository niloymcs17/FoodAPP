import React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, Border } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const AddNewAddress = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [address, setAddress] = React.useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    label: "",
  });

  const handleSave = () => {
    // TODO: Implement save address functionality
    console.log("Saving address:", address);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </Pressable>
        <Text style={styles.title}>Delivery Address</Text>
      </View>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Address Label</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Home, Office"
              value={address.label}
              onChangeText={(text) => setAddress({ ...address, label: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Street Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter street address"
              value={address.street}
              onChangeText={(text) => setAddress({ ...address, street: text })}
              multiline
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>City</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter city"
              value={address.city}
              onChangeText={(text) => setAddress({ ...address, city: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>State</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter state"
              value={address.state}
              onChangeText={(text) => setAddress({ ...address, state: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Zip Code</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter zip code"
              value={address.zipCode}
              onChangeText={(text) => setAddress({ ...address, zipCode: text })}
              keyboardType="numeric"
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Address</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  form: {
    gap: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.colorBlack,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: Border.br_md,
    padding: 12,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    backgroundColor: Color.colorWhite,
    minHeight: 44,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  saveButton: {
    backgroundColor: Color.mainColor,
    borderRadius: Border.br_9xl_5,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    color: Color.colorWhite,
  },
});

export default AddNewAddress;

