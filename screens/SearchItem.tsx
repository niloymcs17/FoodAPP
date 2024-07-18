import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Search from "../components/Search";
import Items from "../components/Items";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SearchItem = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.searchItem}>
      <View style={styles.backParent}>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </Pressable>
        <Text style={styles.search}>Cart</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      <Search propAlignSelf="unset" propMarginTop={30} propWidth={325} />
      <Items
        maskGroup={require("../assets/mask-group3.png")}
        spicyChickenBeefAlignSelf="unset"
        spicyChickenBeefMarginTop={30}
        spicyChickenBeefWidth={332}
        spicyChickenBeefHeight={102}
      />
      <Items
        maskGroup={require("../assets/mask-group3.png")}
        spicyChickenBeefAlignSelf="unset"
        spicyChickenBeefMarginTop={30}
        spicyChickenBeefWidth={332}
        spicyChickenBeefHeight="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    width: 38,
    height: 38,
  },
  search: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.sofiaPro,
    color: Color.colorGray_200,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  vectorIcon: {
    width: 59,
    height: 57,
  },
  backParent: {
    alignSelf: "stretch",
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchItem: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    padding: 14,
    width: "100%",
  },
});

export default SearchItem;
