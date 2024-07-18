import React, { useMemo } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

export type SearchType = {
  /** Style props */
  propAlignSelf?: string;
  propMarginTop?: number | string;
  propWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Search = ({ propAlignSelf, propMarginTop, propWidth }: SearchType) => {
  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
      ...getStyleValue("marginTop", propMarginTop),
      ...getStyleValue("width", propWidth),
    };
  }, [propAlignSelf, propMarginTop, propWidth]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={[styles.search, searchStyle]}
      onPress={() => navigation.navigate("SearchItem")}
    >
      <View style={styles.searchChild} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  searchChild: {
    flex: 1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 36,
  },
  vectorIcon: {
    width: 32,
    height: 32,
    marginLeft: 20,
  },
  search: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default Search;
