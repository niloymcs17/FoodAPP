import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeScreen}>
      <Text
        style={[styles.whatWouldYou, styles.findForFoodFlexBox]}
      >{`What would you like
to order`}</Text>
      <Pressable
        style={styles.search}
        onPress={() => navigation.navigate("SearchItem")}
      >
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={styles.vectorParent}>
            <Image
              style={[styles.groupItem, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/line-7.png")}
            />
            <Image
              style={styles.groupInner}
              contentFit="cover"
              source={require("../assets/ellipse-42.png")}
            />
            <Text style={[styles.findForFood, styles.deliverToTypo1]}>
              Find for food or restaurant...
            </Text>
          </View>
        </View>
        <Image
          style={styles.searchChild}
          contentFit="cover"
          source={require("../assets/group-18097.png")}
        />
      </Pressable>
      <View style={styles.groupParent}>
        <Pressable
          style={[styles.wrapper, styles.wrapperPosition]}
          onPress={() => navigation.navigate("SideMenu")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-17484.png")}
          />
        </Pressable>
        <Pressable
          style={styles.prettyViewLaneParent}
          onPress={() => navigation.navigate("AddNewAddress")}
        >
          <Text
            style={[styles.prettyViewLane, styles.deliverToTypo]}
          >{`4102  Pretty View Lane `}</Text>
          <View style={styles.groupWrapper}>
            <View style={[styles.deliverToParent, styles.path857IconPosition]}>
              <Text style={[styles.deliverTo, styles.deliverToTypo]}>
                Deliver to
              </Text>
              <Image
                style={[styles.path857Icon, styles.path857IconPosition]}
                contentFit="cover"
                source={require("../assets/path-857.png")}
              />
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.maskGroup}
          onPress={() => navigation.navigate("Cart")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/mask-group.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.groupContainer}
        onPress={() => navigation.navigate("SearchItem")}
      >
        <View style={styles.rectangleLayout}>
          <View style={styles.rectangleView} />
          <Text style={styles.burger}>Burger</Text>
          <Image
            style={styles.maskGroupIcon}
            contentFit="cover"
            source={require("../assets/mask-group1.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
          <Text style={[styles.donat, styles.donatTypo]}>Donat</Text>
          <Image
            style={styles.maskGroupIcon1}
            contentFit="cover"
            source={require("../assets/mask-group2.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
          <Text style={[styles.pizza, styles.pizzaTypo]}>Pizza</Text>
          <Image
            style={styles.maskGroupIcon1}
            contentFit="cover"
            source={require("../assets/mask-group3.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.groupChild3, styles.groupChildShadowBox]} />
          <Text style={[styles.mexican, styles.donatTypo]}>Mexican</Text>
          <Image
            style={styles.maskGroupIcon1}
            contentFit="cover"
            source={require("../assets/mask-group4.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.groupChild4, styles.groupChildShadowBox]} />
          <Text style={[styles.pizza, styles.pizzaTypo]}>Asian</Text>
          <Image
            style={styles.maskGroupIcon1}
            contentFit="cover"
            source={require("../assets/mask-group5.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.groupChild5, styles.groupChildShadowBox]} />
          <Text style={[styles.asian1, styles.pizzaTypo]}>Asian</Text>
          <Image
            style={styles.maskGroupIcon1}
            contentFit="cover"
            source={require("../assets/mask-group6.png")}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  findForFoodFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupChildPosition: {
    width: 256,
    left: 0,
    top: 0,
    height: 51,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  deliverToTypo1: {
    fontSize: FontSize.size_sm,
    top: "0%",
  },
  wrapperPosition: {
    bottom: "0%",
    left: "0%",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  deliverToTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    left: "0%",
    position: "absolute",
  },
  path857IconPosition: {
    right: "0%",
    position: "absolute",
  },
  rectangleLayout: {
    height: 98,
    width: 59,
  },
  groupChildShadowBox: {
    shadowColor: "rgba(211, 209, 216, 0.25)",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    height: 98,
    width: 59,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  donatTypo: {
    color: Color.colorDimgray_100,
    height: 12,
    fontSize: FontSize.size_2xs,
    top: 66,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  pizzaTypo: {
    width: 32,
    left: 12,
    color: Color.colorDimgray_100,
    height: 12,
    fontSize: FontSize.size_2xs,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  whatWouldYou: {
    top: "12.93%",
    left: "6.67%",
    fontSize: 30,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: "#323643",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: "#fcfcfd",
    borderStyle: "solid",
    borderColor: "#efefef",
    borderWidth: 1,
  },
  groupItem: {
    height: "22.14%",
    width: "1.7%",
    top: "74.29%",
    right: "93.45%",
    bottom: "3.57%",
    left: "4.85%",
    position: "absolute",
  },
  groupInner: {
    height: "85.71%",
    width: "5.83%",
    right: "94.17%",
    bottom: "14.29%",
    left: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  findForFood: {
    left: "12.62%",
    fontFamily: FontFamily.textBox,
    color: "#9aa0b4",
    textAlign: "left",
    position: "absolute",
  },
  vectorParent: {
    height: "27.45%",
    width: "80.47%",
    top: "37.25%",
    right: "12.5%",
    bottom: "35.29%",
    left: "7.03%",
    position: "absolute",
  },
  searchChild: {
    left: 274,
    width: 51,
    top: 0,
    height: 51,
    position: "absolute",
  },
  search: {
    top: 184,
    width: 325,
    height: 51,
    left: 25,
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  wrapper: {
    top: "7.32%",
    right: "88.2%",
    width: "11.8%",
    height: "92.68%",
    position: "absolute",
  },
  prettyViewLane: {
    top: "53.85%",
    fontSize: FontSize.size_mini,
    lineHeight: 18,
    color: Color.primaryColor,
  },
  deliverTo: {
    lineHeight: 17,
    color: "#8c9099",
    fontSize: FontSize.size_sm,
    top: "0%",
  },
  path857Icon: {
    height: "19.41%",
    width: "9.09%",
    top: "35.29%",
    bottom: "45.29%",
    left: "90.91%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  deliverToParent: {
    height: "100%",
    width: "100%",
    bottom: "0%",
    left: "0%",
    top: "0%",
  },
  groupWrapper: {
    height: "43.59%",
    width: "47.76%",
    right: "26.58%",
    bottom: "56.41%",
    left: "25.66%",
    top: "0%",
    position: "absolute",
  },
  prettyViewLaneParent: {
    height: "95.12%",
    width: "47.2%",
    right: "26.09%",
    bottom: "4.88%",
    left: "26.71%",
    top: "0%",
    position: "absolute",
  },
  maskGroup: {
    left: 284,
    top: 3,
    width: 38,
    height: 38,
    position: "absolute",
  },
  groupParent: {
    height: "5.05%",
    width: "85.87%",
    top: "3.94%",
    right: "7.2%",
    bottom: "91.01%",
    left: "6.93%",
    position: "absolute",
  },
  rectangleView: {
    shadowColor: "rgba(254, 114, 76, 0.25)",
    backgroundColor: Color.primaryColor,
    borderRadius: Border.br_81xl,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    height: 98,
    width: 59,
    left: 0,
    top: 0,
    position: "absolute",
  },
  burger: {
    left: 9,
    color: Color.colorWhite,
    width: 39,
    height: 12,
    fontSize: FontSize.size_2xs,
    top: 66,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  maskGroupIcon: {
    top: 5,
    left: 5,
    width: 50,
    height: 50,
    position: "absolute",
  },
  groupChild1: {
    borderRadius: Border.br_81xl,
  },
  donat: {
    left: 11,
    width: 35,
  },
  maskGroupIcon1: {
    height: 59,
    width: 59,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleContainer: {
    marginLeft: 15,
  },
  groupChild2: {
    borderRadius: Border.br_81xl,
  },
  pizza: {
    top: 66,
    width: 32,
    left: 12,
  },
  groupChild3: {
    borderRadius: Border.br_81xl,
  },
  mexican: {
    left: 7,
    width: 44,
  },
  groupChild4: {
    borderRadius: Border.br_81xl,
  },
  groupChild5: {
    borderRadius: 26,
  },
  asian1: {
    top: 61,
  },
  groupContainer: {
    top: 265,
    width: 323,
    height: 499,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 0,
    paddingVertical: 4,
    left: 25,
    position: "absolute",
  },
  homeScreen: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default HomeScreen;
