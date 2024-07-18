import * as React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { Image } from "expo-image";
import TopBar from "../components/TopBar";
import Search from "../components/Search";
import { FontFamily, Border, Color } from "../GlobalStyles";
export interface catagory{
  title:string,
  image:string
}
const HomeScreen = () => {
  const items:catagory[] = [{
    title:"BREAKFAST FOR YOUR BEST MORNING",
    image:require(`../assets/catagory/BREAKFAST.jpg`)
  }, {
    title:"MOTHERS HUT SPECIAL",
    image:require(`../assets/catagory/MOTHERS_HUT_SPECIAL.jpg`)
  }, {
    title:"BUDGET COMBO",
    image:require(`../assets/catagory/BUDGET_COMBO.jpg`)
  }, {
    title:"BASHUDHA বসুধা খাবার যেখানে আবেগময়",
    image:require(`../assets/catagory/BASHUDHA.jpg`)
  }, {
    title:"MOTHER`S HUT BUFFET যা চাই তাই পাই যত ইচ্ছা তত খাই UNLIMITED FOOD FOR MORE DETAILS- 6297235418 / 6296892007",
    image:require("../assets/catagory/MOTHER`S_HUT_BUFFET.jpg")
  }, {
    title:"SOUP",
    image:require(`../assets/catagory/SOUP.jpg`)
  },
  /* {
    title:"NON VEG STARTER- MOMO-SANDWICH-ROLL",
    image:"NON_VEG_STARTER"
  }, {
    title:"RICE- ROTI- NOODLES",
    image:"ACCOMPANIMENTS"
  }, {
    title:"MAIN COURSE",
    image:"MAIN_COURSE_"
  }, {
    title:"BIRYANI",
    image:"Biryani"
  }, {
    title:"SALAD - RAITA - PAPAD",
    image:"SALAD_"
  },{
    title:"THALI",
    image:"THALI"
  }, {
    title:"CONTINENTAL FOODS PASTA - PIZZA - BURGER AND MANY MORE",
    image:"CONTINENTAL_FOODS"
  },{
    title:"DHOSA AND UTHAPPAM",
    image:"DHOSA"
  },{
    title:"CHATPATA",
    image:"Chatpata"
  },{
    title:"COLD N HOT BEVERAGE",
    image:""
  },{
    title:"DESSERT SWEETS AND ICE-CREAM",
    image:""
  },{
    title:"MOTHERS BAKERY",
    image:""
  },
*/];
  return (
    <View style={styles.homeScreen}>
      <TopBar />
      <Text style={styles.whatWouldYou}>{`What would you like to order`}</Text>
      <Search />
      <ScrollView
        style={styles.catagory}
        horizontal={false}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
      >
        <View style={styles.flexcontainer}>
          {items.map((item:catagory, index:number) => (
            <View style={styles.groupChildLayout}>
              <Text style={styles.burger}>{item.title}</Text>
              <Image
                style={styles.maskGroupIcon}
                contentFit="cover"
                source={item.image}
              />
            </View>
          ))}
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flexcontainer:{
    flexDirection: "row",
    flexWrap:"wrap",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex:1
  },
  catagoryScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupChildLayout: {
    flexDirection:"row",
    flex:1,
    height: 161,
    width: 161
  },
  whatWouldYou: {
    flex:1,
    width: '100%',
    fontSize: 30,
    fontWeight: "700",
    color: "#323643",
    textAlign: "left",
    marginTop: 20,
    fontFamily: FontFamily.sofiaPro,

  },
  groupChild: {
    top: 0,
    left: 0,
    shadowColor: "rgba(254, 114, 76, 0.25)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.mainColor,
    position: "absolute",
  },
  burger: {
    top: 108,
    left: 15,
    fontSize: 11,
    fontWeight: "500",
    color: Color.colorBlack,
    textAlign: "center",
    width: 66,
    height: 20,
    position: "absolute",
    fontFamily: FontFamily.sofiaPro,
  },
  maskGroupIcon: {
    top: 7,
    left: 8,
    width: 83,
    height: 81,
    position: "absolute",
  },
  catagory: {
    flexWrap: "wrap",
    marginTop: 20,
    flex: 1,
  },
  homeScreen: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    overflow: "scroll",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
});

export default HomeScreen;
