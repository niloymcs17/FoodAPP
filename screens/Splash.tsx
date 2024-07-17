import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Image
        style={styles.image119Icon}
        contentFit="cover"
        source={require("../assets/image-119.png")}
      />
      <View style={[styles.groupParent, styles.parentLayout]}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/group-18116.png")}
        />
        <View style={[styles.foodParent, styles.parentLayout]}>
          <Text style={[styles.food, styles.hubTypo]}>{`Food `}</Text>
          <Text style={[styles.hub, styles.hubTypo]}>Hub</Text>
        </View>
      </View>
      <View style={styles.rectangle} />
      <View style={[styles.barsStatusBarIphoneL, styles.iphoneLayout]}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={[styles.timeStyle, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <Image
        style={[styles.iphoneXFrame, styles.iphoneLayout]}
        contentFit="cover"
        source={require("../assets/iphone-x-frame.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 182,
    position: "absolute",
  },
  hubTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.textBox,
    fontSize: FontSize.size_21xl,
    textAlign: "center",
    position: "absolute",
  },
  iphoneLayout: {
    width: 375,
    display: "none",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  image119Icon: {
    top: -84,
    left: 118,
    width: 414,
    height: 414,
    display: "none",
    position: "absolute",
  },
  groupChild: {
    left: 44,
    width: 93,
    height: 93,
    top: 0,
    position: "absolute",
  },
  food: {
    top: 5,
    textAlign: "center",
    left: 0,
  },
  hub: {
    left: 110,
    lineHeight: 60,
    opacity: 0.6,
    textAlign: "center",
    top: 0,
  },
  foodParent: {
    top: 103,
    height: 60,
    left: 0,
  },
  groupParent: {
    top: 325,
    left: 97,
    height: 163,
  },
  rectangle: {
    marginLeft: -66.5,
    bottom: 16,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorWhite,
    width: 134,
    height: 5,
    position: "absolute",
  },
  border: {
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    borderRadius: 1,
    backgroundColor: Color.colorGray_200,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 39,
    width: 0,
    height: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.notoSansJPSemiBold,
    color: Color.colorGray_200,
    textAlign: "center",
    left: 0,
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
  },
  barsStatusBarIphoneL: {
    top: -1,
    left: -1,
    height: 44,
    position: "absolute",
  },
  iphoneXFrame: {
    height: 812,
  },
  splash: {
    backgroundColor: Color.primaryColor,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default Splash;
