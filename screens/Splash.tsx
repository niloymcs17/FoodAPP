import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.frame1}>
          <View style={[styles.frame2, styles.frameFlexBox]}>
            <Image
              style={styles.image119Icon}
              contentFit="cover"
              source={require("../assets/image-119.png")}
            />
          </View>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "flex-end",
    overflow: "hidden",
  },
  image119Icon: {
    width: 414,
    height: 414,
  },
  frame2: {
    width: 351,
    height: 332,
    justifyContent: "flex-end",
    paddingLeft: 19,
  },
  vectorIcon: {
    width: 180,
    height: 148,
    opacity: 0.6,
    marginTop: 77,
  },
  frame1: {
    width: 433,
    height: 557,
    paddingTop: 0,
    overflow: "hidden",
  },
  frame: {
    position: "absolute",
    top: -84,
    left: -157,
    width: 689,
    justifyContent: "center",
  },
  splash: {
    backgroundColor: Color.mainColor,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Splash;
