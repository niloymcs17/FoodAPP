import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, Border, Padding } from "../GlobalStyles";

const menuItems = [
  { title: "My Orders", screen: "MyOrders", icon: require("../assets/iconlybulkdocument.png") },
  { title: "My Profile", screen: "Profile", icon: require("../assets/iconlybulkprofile.png") },
  { title: "Delivery Address", screen: "AddNewAddress", icon: require("../assets/iconlybulklocation.png") },
  { title: "Payment Methods", screen: null, icon: require("../assets/iconlybulkwallet.png") },
  { title: "Contact Us", screen: null, icon: require("../assets/iconlybulkmessage.png") },
  { title: "Settings", screen: null, icon: require("../assets/iconlybulksetting.png") },
  { title: "Helps & FAQs", screen: null, icon: require("../assets/vector6.png") },
];

const SideMenu = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleNavigation = (screen: string | null) => {
    try {
      if (screen) {
        navigation.navigate(screen);
      } else {
        console.warn("Screen not implemented yet");
      }
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  const renderItem = ({ item }: { item: typeof menuItems[0] }) => (
    <Pressable
      style={styles.menuItem}
      onPress={() => handleNavigation(item.screen)}
    >
      <Image style={styles.icon} contentFit="cover" source={item.icon} />
      <Text style={styles.menuText}>{item.title}</Text>
    </Pressable>
  );

  return (
    <View style={styles.sideMenu}>
      <View style={styles.header}>
        <Image style={styles.profileIcon} contentFit="cover" source={require("../assets/profile.png")} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Farion Wick</Text>
          <Text style={styles.userEmail}>farionwick@gmail.com</Text>
        </View>
      </View>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.menuList}
      />
      <Pressable
        style={styles.logoutButton}
        onPress={() => handleNavigation("Welcome")}
      >
        <Text style={styles.logoutText}>Log Out</Text>
        <Image style={styles.logoutIcon} contentFit="cover" source={require("../assets/group-18072.png")} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  sideMenu: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 17,
    paddingVertical: Padding.p_12xl,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileIcon: {
    width: 99,
    height: 90,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  userEmail: {
    fontSize: FontSize.size_sm,
    color: "#9ea1b1",
  },
  menuList: {
    flexGrow: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  menuText: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.mainColor,
    borderRadius: Border.br_9xl_5,
    padding: 10,
    shadowColor: "rgba(254, 114, 76, 0.2)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 30,
    width:120
  },
  logoutText: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    marginRight: 10,
  },
  logoutIcon: {
    width: 26,
    height: 26,
  },
});

export default SideMenu;
