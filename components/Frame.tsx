import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Frame = memo(() => {
  return <View style={styles.frameView} />;
});

const styles = StyleSheet.create({
  frameView: {
    backgroundColor: Color.colorWhite,
    width: 100,
    height: 100,
    overflow: "hidden",
  },
});

export default Frame;
