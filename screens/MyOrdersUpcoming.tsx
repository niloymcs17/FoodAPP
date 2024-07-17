import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MyOrdersUpcoming = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.myOrdersUpcoming, styles.iconLayout]}>
      <Text style={[styles.myOrders, styles.itemsFlexBox]}>My Orders</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <View style={[styles.groupChild, styles.groupChildShadowBox2]} />
        <View style={styles.groupParent}>
          <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
            <View style={styles.groupChildShadowBox1} />
            <Text style={[styles.trackOrder, styles.orderTypo]}>
              Track Order
            </Text>
          </View>
          <View
            style={[styles.rectangleContainer, styles.rectangleParentLayout]}
          >
            <View style={styles.groupChildShadowBox} />
            <Text style={[styles.cancel, styles.minTypo1]}>Cancel</Text>
          </View>
        </View>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={styles.starbuckParent}>
            <Text
              style={[styles.starbuck, styles.subwayTypo]}
            >{`Starbuck `}</Text>
            <Image
              style={[styles.groupIcon, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/group-17801.png")}
            />
          </View>
          <Text style={[styles.items, styles.itemsClr]}>3 Items</Text>
        </View>
        <Text style={[styles.text, styles.textFlexBox]}>#264100</Text>
        <Image
          style={[styles.groupChild1, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../assets/group-17974.png")}
        />
        <View style={styles.estimatedArrivalParent}>
          <Text style={[styles.estimatedArrival, styles.itemsClr]}>
            Estimated Arrival
          </Text>
          <View style={[styles.groupWrapper, styles.text1Position]}>
            <View style={[styles.minParent, styles.text1Position]}>
              <Text style={[styles.min, styles.minTypo]}>min</Text>
              <Text style={[styles.text1, styles.text1Position]}>25</Text>
            </View>
          </View>
        </View>
        <View style={styles.nowParent}>
          <Text style={[styles.now, styles.textFlexBox]}>Now</Text>
          <Text style={styles.foodOnThe}>Food on the way</Text>
        </View>
      </View>
      <View style={[styles.groupView, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <View style={styles.groupChild2} />
        <Text style={[styles.upcoming, styles.upcomingLayout]}>Upcoming</Text>
        <Text style={[styles.history, styles.historyTypo]}>History</Text>
      </View>
      <View style={styles.lastedOrdersWrapper}>
        <Text style={[styles.lastedOrders, styles.text1Typo]}>
          Lasted Orders
        </Text>
      </View>
      <View style={[styles.myOrdersUpcomingChild, styles.childLayout]} />
      <View style={[styles.rectangleParent1, styles.rectangleParentPosition]}>
        <View style={styles.groupChildShadowBox1} />
        <Text style={[styles.reOrder, styles.orderTypo]}>Re-Order</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentPosition]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.rate, styles.minTypo1]}>Rate</Text>
      </View>
      <View style={[styles.subwayParent, styles.upcomingLayout]}>
        <Text style={[styles.subway, styles.textFlexBox]}>{`Subway `}</Text>
        <Image
          style={[styles.groupChild5, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-17801.png")}
        />
      </View>
      <Text style={[styles.jun1150, styles.items1Position]}>19 Jun, 11:50</Text>
      <Text style={[styles.items1, styles.items1Position]}>2 Items</Text>
      <Text style={[styles.text2, styles.textFlexBox]}>$20.50</Text>
      <View style={[styles.orderDeliveredParent, styles.orderLayout]}>
        <Text style={[styles.orderDelivered, styles.orderLayout]}>
          Order Delivered
        </Text>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-109.png")}
        />
      </View>
      <Image
        style={[styles.myOrdersUpcomingItem, styles.groupChild11Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-110.png")}
      />
      <Image
        style={styles.unionIconLayout}
        contentFit="cover"
        source={require("../assets/union.png")}
      />
      <Image
        style={[styles.maskGroupIcon, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("SideMenu")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-18071.png")}
        />
      </Pressable>
      <Image
        style={[styles.image76Icon, styles.items1Position]}
        contentFit="cover"
        source={require("../assets/image-76.png")}
      />
      <View style={[styles.rectangleParent3, styles.childLayout]}>
        <View style={[styles.groupChild6, styles.childLayout]} />
        <Image
          style={styles.unionIconLayout}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
        <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox1} />
          <Text style={[styles.reOrder, styles.orderTypo]}>Re-Order</Text>
        </View>
        <View style={[styles.rectangleParent5, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.rate, styles.minTypo1]}>Rate</Text>
        </View>
        <View style={styles.jimmyJohnsParent}>
          <Text
            style={[styles.subway, styles.textFlexBox]}
          >{`Jimmy John’s `}</Text>
          <Image
            style={[styles.groupChild9, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/group-17801.png")}
          />
        </View>
        <Text style={[styles.jun1030, styles.items2Position]}>
          20 Jun, 10:30
        </Text>
        <Text style={[styles.items2, styles.items2Position]}>3 Items</Text>
        <Text style={[styles.text3, styles.textFlexBox]}>$17.10</Text>
        <View style={[styles.orderDeliveredGroup, styles.orderLayout]}>
          <Text style={[styles.orderDelivered, styles.orderLayout]}>
            Order Delivered
          </Text>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-109.png")}
          />
        </View>
        <Image
          style={[styles.groupChild11, styles.groupChild11Layout]}
          contentFit="cover"
          source={require("../assets/ellipse-110.png")}
        />
        <Image
          style={[styles.image35Icon, styles.items2Position]}
          contentFit="cover"
          source={require("../assets/image-35.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  itemsFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupChildLayout1: {
    height: 238,
    width: 323,
    position: "absolute",
  },
  groupChildShadowBox2: {
    borderRadius: 18,
    shadowOpacity: 1,
    elevation: 36.43,
    shadowRadius: 36.43,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    shadowColor: "rgba(211, 209, 216, 0.25)",
    backgroundColor: Color.colorWhite,
  },
  rectangleParentLayout: {
    width: 135,
    height: 43,
    position: "absolute",
  },
  orderTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    top: "34.88%",
    height: "27.91%",
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  minTypo1: {
    fontSize: FontSize.size_mini,
    color: Color.ffffff,
  },
  groupLayout: {
    height: 38,
    position: "absolute",
  },
  subwayTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
  },
  groupChildLayout: {
    height: 8,
    width: 8,
    top: 4,
    position: "absolute",
  },
  itemsClr: {
    color: Color.subColor,
    fontSize: FontSize.size_xs,
  },
  textFlexBox: {
    textAlign: "right",
    position: "absolute",
  },
  unionIconLayout: {
    height: 65,
    width: 65,
  },
  text1Position: {
    height: 29,
    left: 0,
    position: "absolute",
  },
  minTypo: {
    left: 50,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  viewLayout: {
    height: 55,
    width: 323,
    position: "absolute",
  },
  upcomingLayout: {
    width: 70,
    position: "absolute",
  },
  historyTypo: {
    top: 21,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  text1Typo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.ffffff,
  },
  childLayout: {
    height: 168,
    width: 323,
    position: "absolute",
  },
  rectangleParentPosition: {
    top: 797,
    width: 135,
    height: 43,
    position: "absolute",
  },
  items1Position: {
    top: 715,
    position: "absolute",
  },
  orderLayout: {
    height: 9,
    position: "absolute",
  },
  groupChild11Layout: {
    height: 4,
    width: 4,
    position: "absolute",
  },
  items2Position: {
    top: 25,
    position: "absolute",
  },
  myOrders: {
    top: "5.79%",
    left: "37.6%",
    color: Color.ffffff,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  groupChild: {
    left: 0,
    top: 0,
    height: 238,
    width: 323,
    position: "absolute",
  },
  groupChildShadowBox1: {
    backgroundColor: Color.primaryColor,
    borderRadius: Border.br_9xl_5,
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(254, 114, 76, 0.25)",
    width: 135,
    height: 43,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    left: 0,
    top: 0,
    position: "absolute",
  },
  trackOrder: {
    width: "70.37%",
    left: "14.81%",
  },
  rectangleGroup: {
    left: 152,
    top: 0,
  },
  groupChildShadowBox: {
    borderRadius: Border.br_81xl,
    elevation: 30,
    shadowRadius: 30,
    width: 135,
    height: 43,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    shadowColor: "rgba(211, 209, 216, 0.25)",
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  cancel: {
    width: "37.78%",
    left: "31.11%",
    top: "34.88%",
    height: "27.91%",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleContainer: {
    left: 0,
    top: 0,
  },
  groupParent: {
    top: 177,
    width: 287,
    height: 43,
    left: 18,
    position: "absolute",
  },
  starbuck: {
    textAlign: "left",
    position: "absolute",
  },
  groupIcon: {
    left: 71,
  },
  starbuckParent: {
    top: 22,
    height: 16,
    width: 79,
    left: 0,
    position: "absolute",
  },
  items: {
    fontFamily: FontFamily.textBox,
    left: 0,
    top: 0,
    textAlign: "center",
    position: "absolute",
  },
  groupContainer: {
    top: 39,
    left: 101,
    width: 79,
  },
  text: {
    left: 241,
    color: Color.primaryColor,
    fontFamily: FontFamily.textBox,
    top: 23,
    fontSize: FontSize.size_base,
    textAlign: "right",
  },
  groupChild1: {
    top: 18,
    position: "absolute",
    left: 18,
  },
  estimatedArrival: {
    textAlign: "left",
    left: 0,
    top: 0,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.subColor,
    position: "absolute",
  },
  min: {
    width: 26,
    height: 11,
    top: 18,
    position: "absolute",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    color: Color.ffffff,
  },
  text1: {
    fontSize: 39,
    width: 51,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    color: Color.ffffff,
    top: 0,
  },
  minParent: {
    width: 76,
    height: 29,
    top: 0,
  },
  groupWrapper: {
    width: 76,
    height: 29,
    top: 23,
  },
  estimatedArrivalParent: {
    width: 95,
    height: 52,
    top: 104,
    left: 18,
    position: "absolute",
  },
  now: {
    left: 31,
    width: 78,
    color: Color.subColor,
    fontSize: FontSize.size_xs,
    top: 0,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  foodOnThe: {
    top: 17,
    lineHeight: 20,
    height: 24,
    fontSize: FontSize.size_sm,
    width: 109,
    textAlign: "right",
    left: 0,
    color: Color.ffffff,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  nowParent: {
    height: 41,
    width: 109,
    left: 196,
    top: 104,
    position: "absolute",
  },
  rectangleParent: {
    top: 194,
    left: 26,
  },
  rectangleView: {
    borderRadius: 28,
    borderStyle: "solid",
    borderColor: "#f2eaea",
    borderWidth: 1,
    left: 0,
    top: 0,
  },
  groupChild2: {
    left: 6,
    shadowRadius: 40,
    elevation: 40,
    borderRadius: 24,
    width: 160,
    height: 47,
    top: 4,
    backgroundColor: Color.primaryColor,
    shadowOpacity: 1,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    shadowColor: "rgba(211, 209, 216, 0.25)",
    position: "absolute",
  },
  upcoming: {
    color: Color.colorGray_100,
    top: 21,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    left: 50,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  history: {
    left: 207,
    width: 67,
    color: Color.primaryColor,
    fontFamily: FontFamily.textBox,
    position: "absolute",
  },
  groupView: {
    top: 107,
    left: 26,
  },
  lastedOrders: {
    top: "0%",
    left: "0%",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    position: "absolute",
  },
  lastedOrdersWrapper: {
    height: "2.22%",
    width: "31.47%",
    top: "57.14%",
    right: "58.93%",
    bottom: "40.64%",
    left: "9.6%",
    position: "absolute",
  },
  myOrdersUpcomingChild: {
    top: 690,
    borderRadius: 18,
    shadowOpacity: 1,
    elevation: 36.43,
    shadowRadius: 36.43,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    shadowColor: "rgba(211, 209, 216, 0.25)",
    backgroundColor: Color.colorWhite,
    left: 26,
  },
  reOrder: {
    width: "51.11%",
    left: "24.44%",
  },
  rectangleParent1: {
    left: 196,
    top: 797,
  },
  rate: {
    width: "30.37%",
    left: "34.81%",
    top: "34.88%",
    height: "27.91%",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleParent2: {
    left: 44,
  },
  subway: {
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
  },
  groupChild5: {
    left: 62,
  },
  subwayParent: {
    top: 737,
    left: 126,
    height: 16,
  },
  jun1150: {
    left: 126,
    color: Color.subColor,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textBox,
    textAlign: "left",
  },
  items1: {
    left: 216,
    color: Color.subColor,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textBox,
    textAlign: "left",
  },
  text2: {
    top: 713,
    left: 279,
    color: Color.primaryColor,
    fontFamily: FontFamily.textBox,
    fontSize: FontSize.size_base,
    textAlign: "right",
  },
  orderDelivered: {
    left: 13,
    color: Color.colorMediumspringgreen,
    width: 89,
    fontFamily: FontFamily.textBox,
    height: 9,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    top: 0,
  },
  ellipseIcon: {
    top: 1,
    width: 7,
    height: 7,
    left: 0,
    position: "absolute",
  },
  orderDeliveredParent: {
    top: 763,
    width: 102,
    height: 9,
    left: 126,
  },
  myOrdersUpcomingItem: {
    top: 718,
    left: 203,
  },
  maskGroupIcon: {
    top: 37,
    left: 310,
    width: 38,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  wrapper: {
    left: "6.93%",
    top: "4.56%",
    right: "82.93%",
    bottom: "90.76%",
    width: "10.13%",
    height: "4.68%",
    position: "absolute",
  },
  image76Icon: {
    left: 60,
    width: 36,
    height: 48,
  },
  groupChild6: {
    borderRadius: 18,
    shadowOpacity: 1,
    elevation: 36.43,
    shadowRadius: 36.43,
    shadowOffset: {
      width: 18.21428680419922,
      height: 18.21428680419922,
    },
    shadowColor: "rgba(211, 209, 216, 0.25)",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  rectangleParent4: {
    left: 170,
    top: 107,
  },
  rectangleParent5: {
    top: 107,
    left: 18,
  },
  groupChild9: {
    left: 96,
  },
  jimmyJohnsParent: {
    top: 47,
    width: 104,
    left: 100,
    height: 16,
    position: "absolute",
  },
  jun1030: {
    left: 100,
    color: Color.subColor,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textBox,
    textAlign: "left",
  },
  items2: {
    left: 190,
    color: Color.subColor,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.textBox,
    textAlign: "left",
  },
  text3: {
    left: 263,
    color: Color.primaryColor,
    fontFamily: FontFamily.textBox,
    top: 23,
    fontSize: FontSize.size_base,
    textAlign: "right",
  },
  orderDeliveredGroup: {
    top: 73,
    left: 100,
    width: 102,
    height: 9,
  },
  groupChild11: {
    top: 28,
    left: 177,
  },
  image35Icon: {
    left: 28,
    width: 46,
    height: 46,
  },
  rectangleParent3: {
    top: 502,
    left: 26,
  },
  myOrdersUpcoming: {
    flex: 1,
    height: 812,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default MyOrdersUpcoming;
