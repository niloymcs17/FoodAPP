import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Items from "../components/Items";
import { FontSize,  Color } from "../GlobalStyles";
import SearchBar from "../components/Search";
import { useState } from "react";
import { Item } from "../Const";

const SearchItem = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [foodItem, setFoodItem] = useState<Item[] | []>([]);


    const handleSearchTextChange = (text: string) => {
        // This will be called after 2 seconds debounce delay
        if (text && text.length > 2) {

            let item: Item[] = ITEM.filter((item: Item) => {
                return item.label.toLocaleLowerCase().includes(text.toLocaleLowerCase())
            })
            setFoodItem(item);
        }

        console.log("Search text after debounce:", text);
    };
    return (
        <View style={styles.searchItem}>
            <View style={styles.navBar}>
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
                <Text style={styles.search}>Search</Text>
                <Image
                    style={styles.vectorIcon}
                    contentFit="cover"
                    source={require("../assets/vector4.png")}
                />
            </View>
            <SearchBar editable={true} // Control if the search bar is editable
                onChangeText={handleSearchTextChange} // Pass the callback
            />
            <FlatList
                data={foodItem}
                renderItem={({ item }) => <Items maskGroup={item.image} label={item.label} price={item.price} />}
                keyExtractor={item => item.id}
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
    navBar: {
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



export const ITEM: Item[] = [
    {
        "id": "530",
        "price": "800",
        "label": "DOLL 01 MAX DELIVERY TIME 24 HR ",
        "type": "Variable Product",
        "image": require('../assets/catagory/BREAKFAST.jpg'),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": " DOLL CAKES"
    },
    {
        "id": "545",
        "price": "250",
        "label": "OREO CHOCOLATE 01 MAX DELIVERY TIME  4 HR",
        "type": "Variable Product",
        "image": require("../assets/items/545-00-1_OREO CHOCOLATE 01 MAX DELIVERY TIME  4 HR HALF Ib 96893.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": " OREO CHOCOLATE CAKES"
    },
    {
        "id": "1027",
        "price": "120",
        "label": "HANDI EGG BIRIYANI WITH 2 EGGS ",
        "type": "Simple Product",
        "image": require("../assets/items/1027_HANDI EGG BIRIYANI WITH 2 EGGS 78453.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "BIRYANI"
    },
    {
        "id": "144",
        "price": "220",
        "label": " HANDI CHICKEN BIRIYANI WITH 160GM CHICKEN ",
        "type": "Simple Product",
        "image": require("../assets/items/144_ HANDI CHICKEN BIRYANI   মুরগীর মাংসের হানডি  বিরিয়নি78136.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BIRYANI"
    },
    {
        "id": "264",
        "price": "295",
        "label": "HANDI MUTTON BIRIYANI WITH 200 GM MUTTON রেওয়াজি খাশির মাংসের হান্ডি বিরিয়ানি  ২০০ গ্রাম খাসির মাংস সহ ",
        "type": "Simple Product",
        "image": require("../assets/items/264_HANDI MUTTON BIRYANI রেওয়াজি খাশির মাংসের হানডি বিরিয়নি93030.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BIRYANI"
    },
    {
        "id": "418",
        "price": "300",
        "label": "AWADH CHICKEN  BIRIYANI WITH 160 GM CHICKEN ",
        "type": "Simple Product",
        "image": require("../assets/items/418_ZAFRANI HYDRABADI CHICKEN  BIRYANI  জাফরানি হায়দ্রাবাদী  চিকেন বিরিয়ানি 83804.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BIRYANI"
    },
    {
        "id": "625",
        "price": "365",
        "label": " AWADH MUTTON BIRIYANI WITH 200 GM MUTTON  ",
        "type": "Simple Product",
        "image": require("../assets/items/625_KOLKATA STYLE BIRYANI কলকাতা স্টাইল বিরিয়ানি50808.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BIRYANI"
    },
    {
        "id": "753",
        "price": "180",
        "label": "BIRIYANI EXTRA CHICKEN 160 GM ",
        "type": "Simple Product",
        "image": require("../assets/items/_BIRIYANI EXTRA CHICKEN বিরিয়ানি এক্সট্রা চিকেন 30175.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BIRYANI"
    },
    {
        "id": "754",
        "price": "240",
        "label": "BIRIYANI EXTRA MUTTON 200 GM ",
        "type": "Simple Product",
        "image": require("../assets/items/_BIRIYANI EXTRA MUTTON বিরিয়ানি এক্সট্রা মটন 73546.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BIRYANI"
    },
    {
        "id": "513",
        "price": "250",
        "label": "BLACK FOREST 01  MAX DELIVERY TIME 4 HR",
        "type": "Variable Product",
        "image": require("../assets/items/513-00-1_BLACK FOREST 01  MAX DELIVERY TIME 4 HR HALF Ib95571.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BLACK FOREST CAKES"
    },
    {
        "id": "514",
        "price": "250",
        "label": "BLACK FOREST 02  MAX DELIVERY TIME 4 HR",
        "type": "Variable Product",
        "image": require("../assets/items/514-00-1_BLACK FOREST 02  MAX DELIVERY TIME 4 HR87722.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BLACK FOREST CAKES"
    },
    {
        "id": "515",
        "price": "250",
        "label": "BLACK FOREST 03 MAX DELIVERY TIME 4 HR",
        "type": "Variable Product",
        "image": require("../assets/items/515-00-1_56744.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BLACK FOREST CAKES"
    },
    {
        "id": "694",
        "price": "250",
        "label": "BLACK FOREST 05 ",
        "type": "Variable Product",
        "image": require("../assets/items/694_BLACK FOREST 05 15544.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BLACK FOREST CAKES"
    },
    {
        "id": "695",
        "price": "250",
        "label": "BLACK FOREST 06",
        "type": "Variable Product",
        "image": require("../assets/items/695-00-1_BLACK FOREST 0656773.jpeg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BLACK FOREST CAKES"
    },
    {
        "id": "696",
        "price": "250",
        "label": "BLACK FOREST 07",
        "type": "Variable Product",
        "image": require("../assets/items/696-00-1_BLACK FOREST 0761315.jpeg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BLACK FOREST CAKES"
    },
    {
        "id": "697",
        "price": "250",
        "label": "BLACK FOREST 08",
        "type": "Variable Product",
        "image": require("../assets/items/697-00-1_BLACK FOREST 0850018.jpeg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BLACK FOREST CAKES"
    },
    {
        "id": "825",
        "price": "70",
        "label": "CHEESE NAAN ",
        "type": "Simple Product",
        "image": require("../assets/items/_CHEESE NAAN চিজ নান 81278.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "859",
        "price": "20",
        "label": "RUMALI ROTI 1 PC",
        "type": "Simple Product",
        "image": require("../assets/items/_RAMADAN EID SPECIAL-RUMALI ROTI 1 PC- রমজান ঈদ স্পেশাল - রুমালি রুটি ১ পিস্61102.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "211",
        "price": "35",
        "label": "PLAIN NAAN  1 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/211_PLAIN NAAN  1 PC  প্লেন নান  ১ পিস্71987.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "212",
        "price": "40",
        "label": "BUTTER NAAN  1PC ",
        "type": "Simple Product",
        "image": require("../assets/items/212_BUTTER NAAN  1PC  বাটার নান  ১ পিস্47623.png"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "213",
        "price": "50",
        "label": "GARLIC BUTTER NAAN 1 PC",
        "type": "Simple Product",
        "image": require("../assets/items/213_GARLIC BUTTER NAAN 1 PC গার্লিক বাটার নান ১ পিস 47711.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "214",
        "price": "40",
        "label": "HARA MIRCHA DHANIA BUTTER NAAN 1 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/214_HARA MIRCHA DHANIA BUTTER NAAN 1 PC  হরা  মির্চা ধনিয়া  বাটার নান ১ পিস 53326.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "216",
        "price": "20",
        "label": "PLAIN TANDOORI ROTI 1 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/216_PLAIN TANDOORI ROTI 1 PC প্লেন তন্দুরি রুটি ১ পিস 20273.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "256",
        "price": "25",
        "label": "BUTTER TANDOORI ROTI 1 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/256_BUTTER TANDOORI ROTI 1 PC বাটার তন্দুরি রুটি ১ পিস 38867.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "257",
        "price": "65",
        "label": "PANEER KULCHA 1 PC",
        "type": "Simple Product",
        "image": require("../assets/items/257_PANNER KULCHA 1 PC পনির কুলচা ১ পিস 18940.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "258",
        "price": "55",
        "label": "MASALA KULCHA 1 PC মশালা কুলচা ১ পিস   ",
        "type": "Simple Product",
        "image": require("../assets/items/258_MASALA KULCHA 1 PC মশালা কুলচা ১ পিস   55561.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "259",
        "price": "70",
        "label": "CHICKEN KEEMA KULCHA 1 PC",
        "type": "Simple Product",
        "image": require("../assets/items/259_CHICKEN KEEMA KULCHA 1 PC চিকেন কিমা কুলচা ১ পিস  24857.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "261",
        "price": "60",
        "label": "BIG TAWA LACCHA PARATHA 1 PC  ",
        "type": "Simple Product",
        "image": require("../assets/items/261_TAWA LACCHA PARATHA 2 PC তাওয়া লাচ্চা পরোটা ২ পিস 12330.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "401",
        "price": "50",
        "label": "ALU PARATHA 2 PC",
        "type": "Simple Product",
        "image": require("../assets/items/401_ALU PARATHA 2 PC আলু পরোটা ২ পিস 78961.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "572",
        "price": "65",
        "label": "PANEER PARATHA 2 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/572_PANEER PARATHA 2 PC পনির পরোটা ২ পিস  28363.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "573",
        "price": "70",
        "label": "CHICKEN KEEMA PARATHA 2 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/573_CHICKEN KEEMA PARATHA 2 PC চিকেন কিমা পরোটা ২ পিস 64307.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREADS AND PARATHAS "
    },
    {
        "id": "1279",
        "price": "80",
        "label": "VEGITABLE NOODLES WITH MEGGI MASALA",
        "type": "Simple Product",
        "image": require("../assets/items/1279_63068.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BREAKFAST"
    },
    {
        "id": "724",
        "price": "75",
        "label": "TANDOORI CHICKEN SANDWICH  তান্দুরি চিকন স্যান্ডউইচ ",
        "type": "Variable Product",
        "image": require("../assets/items/724-00-1_TANDOORI CHICKEN SANDWICH  তান্দুরি চিকন স্যান্ডউইচ 80438.bmp"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Breakfast ব্রেকফাস্ট "
    },
    {
        "id": "874",
        "price": "300",
        "label": "CHOCOLATE BUDGET CAKE 450 GM ",
        "type": "Simple Product",
        "image": require("../assets/items/874_25342.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUDGET CAKE- সাধ্যের মধ্যে সাধ পূরণ"
    },
    {
        "id": "875",
        "price": "250",
        "label": "CHOCOLATE BUDGET CAKE - 350 GM",
        "type": "Simple Product",
        "image": require("../assets/items/875_85314.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUDGET CAKE- সাধ্যের মধ্যে সাধ পূরণ"
    },
    {
        "id": "876",
        "price": "300",
        "label": "RED VELVET BUDGET CAKE 450 GM ",
        "type": "Simple Product",
        "image": require("../assets/items/876_87179.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUDGET CAKE- সাধ্যের মধ্যে সাধ পূরণ"
    },
    {
        "id": "877",
        "price": "380",
        "label": "CHOCOLATE BUDGET CAKE 600 GM",
        "type": "Simple Product",
        "image": require("../assets/items/877_55727.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUDGET CAKE- সাধ্যের মধ্যে সাধ পূরণ"
    },
    {
        "id": "879",
        "price": "300",
        "label": "MANGO BUDGET CAKE - 450 GM ",
        "type": "Simple Product",
        "image": require("../assets/items/879_17248.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUDGET CAKE- সাধ্যের মধ্যে সাধ পূরণ"
    },
    {
        "id": "880",
        "price": "300",
        "label": "PINEAPPLE BUDGET  CAKE- 450 GM ",
        "type": "Simple Product",
        "image": require("../assets/items/880_47339.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUDGET CAKE- সাধ্যের মধ্যে সাধ পূরণ"
    },
    {
        "id": "881",
        "price": "400",
        "label": "PHOTO PRINT BUDGET CAKE - 450 GM ",
        "type": "Simple Product",
        "image": require("../assets/items/881_77857.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUDGET CAKE- সাধ্যের মধ্যে সাধ পূরণ"
    },
    {
        "id": "882",
        "price": "285",
        "label": "BLACK FORSET BUDGET CAKE 365 GM ",
        "type": "Simple Product",
        "image": require("../assets/items/882_35351.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUDGET CAKE- সাধ্যের মধ্যে সাধ পূরণ"
    },
    {
        "id": "883",
        "price": "200",
        "label": "BUTTER SCOTCH BUDGET CAKE  350 GM ",
        "type": "Simple Product",
        "image": require("../assets/items/883_57988.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUDGET CAKE- সাধ্যের মধ্যে সাধ পূরণ"
    },
    {
        "id": "885",
        "price": "400",
        "label": "BLACK FORSET BUDGET CAKE 600 GM ",
        "type": "Simple Product",
        "image": require("../assets/items/885_97180.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUDGET CAKE- সাধ্যের মধ্যে সাধ পূরণ"
    },
    {
        "id": "886",
        "price": "295",
        "label": "BUTTER SCOTCH BUDGET CAKE 600 GM ",
        "type": "Simple Product",
        "image": require("../assets/items/886_89920.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUDGET CAKE- সাধ্যের মধ্যে সাধ পূরণ"
    },
    {
        "id": "904",
        "price": "400",
        "label": "PHOTO PRINT BUDGET CAKE 450 GM ",
        "type": "Simple Product",
        "image": require("../assets/items/904_57508.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUDGET CAKE- সাধ্যের মধ্যে সাধ পূরণ"
    },
    {
        "id": "937",
        "price": "350",
        "label": "NOLEN GURER BUDGET CAKE 450 GM",
        "type": "Simple Product",
        "image": require("../assets/items/_24321.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUDGET CAKE- সাধ্যের মধ্যে সাধ পূরণ"
    },
    {
        "id": "1021",
        "price": "350",
        "label": "PAAKA AAMER CAKE 450GM",
        "type": "Simple Product",
        "image": require("../assets/items/1021_PAAKA AAMER CAKE 450GM54762.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUDGET CAKE- সাধ্যের মধ্যে সাধ পূরণ"
    },
    {
        "id": "1073",
        "price": "180",
        "label": "GRILLED CHICKEN BURGER ",
        "type": "Simple Product",
        "image": require("../assets/items/1073_GRILLED BURGER 25768.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "BURGER "
    },
    {
        "id": "740",
        "price": "75",
        "label": "LONGER CRISPY CHICKEN BURGER ",
        "type": "Simple Product",
        "image": require("../assets/items/740_LONGER CRISPY CHICKEN BURGER লঙ্গার ক্রিস্পি চিকেন  বার্গার13782.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BURGER "
    },
    {
        "id": "114",
        "price": "85",
        "label": "Cheesy Crunchy Veg Burger ",
        "type": "Simple Product",
        "image": require("../assets/items/114_Cheesy Crunchy Veg Burger চিজী ক্রানচি ভেজ বার্গার  16787.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BURGER "
    },
    {
        "id": "115",
        "price": "95",
        "label": "Cheesy Chicken Burger ",
        "type": "Simple Product",
        "image": require("../assets/items/115_Cheesy Chicken Burger চিজী চিকেন বার্গার71071.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BURGER "
    },
    {
        "id": "116",
        "price": "100",
        "label": "Mexican Chicken Patty Burger ",
        "type": "Simple Product",
        "image": require("../assets/items/116_Mexican Chicken Patty Burger মেক্সিকান চিকেন প্যাটি বার্গার32462.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BURGER "
    },
    {
        "id": "117",
        "price": "100",
        "label": "Mexican Chicken Salad Burger ",
        "type": "Simple Product",
        "image": require("../assets/items/117_Mexican Chicken Salad Burger মেক্সিকান চিকেন স্যালাড বার্গার22296.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BURGER "
    },
    {
        "id": "119",
        "price": "100",
        "label": "CHICKEN PATTY BURGER WITH THOUSAND ISLAND SAUCE ",
        "type": "Simple Product",
        "image": require("../assets/items/119_CHICKEN PATTY BURGER WITH THOUSAND ISLAND SAUCE  চিকেন প্যাটি বার্গার উইথ থাউজ্যান্ড আইসল্যান্ড সস 17842.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BURGER "
    },
    {
        "id": "517",
        "price": "200",
        "label": "BUTTER SCOTCH 01 MAX DELIVERY TIME 4HR",
        "type": "Variable Product",
        "image": require("../assets/items/517-00-1_79939.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUTTERSCOTCH CAKES"
    },
    {
        "id": "518",
        "price": "200",
        "label": "BUTTER SCOTCH 02 MAX DELIVERY TIME 4HR",
        "type": "Variable Product",
        "image": require("../assets/items/518-00-1_30045.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUTTERSCOTCH CAKES"
    },
    {
        "id": "519",
        "price": "200",
        "label": "BUTTER SCOTCH 03 MAX DELIVERY TIME 4HR ",
        "type": "Variable Product",
        "image": require("../assets/items/519-00-1_50641.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUTTERSCOTCH CAKES"
    },
    {
        "id": "520",
        "price": "200",
        "label": "BUTTER SCOTCH 04 MAX DELIVERY TIME 4HR",
        "type": "Variable Product",
        "image": require("../assets/items/520-00-1_BUTTER SCOTCH 04 MAX DELIVERY TIME 4HR HALF Ib 29236.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUTTERSCOTCH CAKES"
    },
    {
        "id": "521",
        "price": "200",
        "label": "BUTTER SCOTCH 05 MAX DELIVERY TIME 4HR",
        "type": "Variable Product",
        "image": require("../assets/items/521-00-1_BUTTER SCOTCH 05 MAX DELIVERY TIME 4HR HALF Ib64120.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUTTERSCOTCH CAKES"
    },
    {
        "id": "522",
        "price": "200",
        "label": "BUTTER SCOTCH 06 MAX DELIVERY TIME 4HR",
        "type": "Variable Product",
        "image": require("../assets/items/522-00-1_64466.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUTTERSCOTCH CAKES"
    },
    {
        "id": "703",
        "price": "200",
        "label": "BUTTER SCOTCH 07",
        "type": "Variable Product",
        "image": require("../assets/items/703-00-1_BUTTER SCOTCH 1289579.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUTTERSCOTCH CAKES"
    },
    {
        "id": "704",
        "price": "200",
        "label": "BUTTER SCOTCH 08",
        "type": "Variable Product",
        "image": require("../assets/items/704-00-1_BUTTER SCOTCH 1319625.jpeg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUTTERSCOTCH CAKES"
    },
    {
        "id": "705",
        "price": "200",
        "label": "BUTTER SCOTCH 09",
        "type": "Variable Product",
        "image": require("../assets/items/705-00-1_BUTTER SCOTCH 1470312.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUTTERSCOTCH CAKES"
    },
    {
        "id": "706",
        "price": "200",
        "label": "BUTTER SCOTCH 10 ",
        "type": "Variable Product",
        "image": require("../assets/items/706-00-1_56609.jpeg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUTTERSCOTCH CAKES"
    },
    {
        "id": "716",
        "price": "200",
        "label": "BUTTER SCOTCH 11",
        "type": "Variable Product",
        "image": require("../assets/items/716-00-1_17733.jpeg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "BUTTERSCOTCH CAKES"
    },
    {
        "id": "275",
        "price": "70",
        "label": "Dahi Papri Chaat",
        "type": "Simple Product",
        "image": require("../assets/items/275_Dahi Papri Chaat কুইক মিল দহি পাপড়ি চাট27099.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Chaats চাট "
    },
    {
        "id": "392",
        "price": "50",
        "label": "Gujia Dahi Vada ",
        "type": "Variable Product",
        "image": require("../assets/items/392_Gujia Dahi Vada গুজিয়া দহি বড়া81922.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Chaats চাট "
    },
    {
        "id": "744",
        "price": "450",
        "label": "BHAI FOTA SPECIAL PHOTO PRINT CAKE 1 POUND ভাই ফোটা স্পেশাল ফটো প্রিন্ট কেক ১ পাউন্ড ",
        "type": "Simple Product",
        "image": require("../assets/items/_99375.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "745",
        "price": "600",
        "label": "BHAI FOTA SPECIAL CAKE 1 POUND ভাই ফোটা স্পেশাল কেক ১ পাউন্ড ",
        "type": "Simple Product",
        "image": require("../assets/items/_55360.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "523",
        "price": "200",
        "label": "CHOCOLATE 01 MAX DELIVERY TIME 4 HR",
        "type": "Variable Product",
        "image": require("../assets/items/523-00-1_83637.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "524",
        "price": "200",
        "label": "CHOCOLATE 03 MAX DELIVERY TIME 4 HR",
        "type": "Variable Product",
        "image": require("../assets/items/524-00-1_27046.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "525",
        "price": "200",
        "label": "CHOCOLATE 04 MAX DELIVERY TIME 4 HR ",
        "type": "Variable Product",
        "image": require("../assets/items/525-00-1_CHOCOLATE 04 MAX DELIVERY TIME 4 HR  HALF Ib11028.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "526",
        "price": "200",
        "label": "CHOCOLATE 05 MAX DELIVERY TIME 4 HR ",
        "type": "Variable Product",
        "image": require("../assets/items/526-00-1_77855.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "527",
        "price": "200",
        "label": "CHOCOLATE 07 MAX DELIVERY TIME 4 HR",
        "type": "Variable Product",
        "image": require("../assets/items/527-00-1_79308.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "528",
        "price": "250",
        "label": "CHOCOLATE 08 MAX DELIVERY TIME 4 HR ",
        "type": "Variable Product",
        "image": require("../assets/items/528-00-1_CHOCOLATE 08 MAX DELIVERY TIME 4 HR  HALF Ib 44773.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "529",
        "price": "250",
        "label": "CHOCOLATE 09 MAX DELIVERY TIME 4 HR",
        "type": "Variable Product",
        "image": require("../assets/items/529-00-1_CHOCOLATE 09 MAX DELIVERY TIME 4 HR HALF Ib 13637.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "551",
        "price": "200",
        "label": "CHOCOLATE 02 MAX DELIVERY TIME 4 HR  ",
        "type": "Variable Product",
        "image": require("../assets/items/551-00-1_CHOCOLATE 02 MAX DELIVERY TIME 4 HR  HALF Ib 34201.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "552",
        "price": "200",
        "label": "CHOCOLATE 06  MAX DELIVERY TIME 4 HR",
        "type": "Variable Product",
        "image": require("../assets/items/552-00-1_CHOCOLATE 06  MAX DELIVERY TIME 4 HR HALF Ib 35098.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "707",
        "price": "200",
        "label": "CHOCOLATE 10",
        "type": "Variable Product",
        "image": require("../assets/items/707-00-1_CHOCOLATE 1011003.bmp"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "708",
        "price": "200",
        "label": "CHOCOLATE 11",
        "type": "Variable Product",
        "image": require("../assets/items/708-00-1_CHOCOLATE 1186826.bmp"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "709",
        "price": "200",
        "label": "CHOCOLATE 12",
        "type": "Variable Product",
        "image": require("../assets/items/709-00-1_20282.jpeg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "710",
        "price": "250",
        "label": "CHOCOLATE 13",
        "type": "Variable Product",
        "image": require("../assets/items/710-00-1_CHOCOLATE 1379827.bmp"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "711",
        "price": "200",
        "label": "CHOCOLATE 14",
        "type": "Variable Product",
        "image": require("../assets/items/711-00-1_CHOCOLATE 1446196.bmp"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "712",
        "price": "200",
        "label": "CHOCOLATE 15",
        "type": "Variable Product",
        "image": require("../assets/items/712-00-1_CHOCOLATE 1595253.bmp"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "713",
        "price": "200",
        "label": "CHOCOLATE 16",
        "type": "Variable Product",
        "image": require("../assets/items/713-00-1_CHOCOLATE 1644163.bmp"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "714",
        "price": "2400",
        "label": "CHOCOLATE 17",
        "type": "Variable Product",
        "image": require("../assets/items/714-00-1_49758.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "715",
        "price": "200",
        "label": "CHOCOLATE 18",
        "type": "Variable Product",
        "image": require("../assets/items/715-00-1_80773.jpeg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "698",
        "price": "200",
        "label": "CHOCOLATE 19",
        "type": "Simple Product",
        "image": require("../assets/items/698-00-1_CHOCOLATE 1959877.bmp"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "CHOCOLATE CAKES"
    },
    {
        "id": "673",
        "price": "20",
        "label": "HANDMADE ALMOND CHOCOLATE ",
        "type": "Simple Product",
        "image": require("../assets/items/673_HANDMADE ALMOND CHOCOLATE 16846.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Chocolate চকলেট "
    },
    {
        "id": "677",
        "price": "20",
        "label": "CRUNCHY HAZELNUT CHOCOLATE ",
        "type": "Simple Product",
        "image": require("../assets/items/677_CRUNCHY HAZELNUT CHOCOLATE 19276.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Chocolate চকলেট "
    },
    {
        "id": "678",
        "price": "18",
        "label": "COFFEE ALMOND CHOCOLATE ",
        "type": "Simple Product",
        "image": require("../assets/items/678_COFFEE ALMOND CHOCOLATE 25823.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Chocolate চকলেট "
    },
    {
        "id": "679",
        "price": "12",
        "label": "MENDIANT CHOCOLATE ",
        "type": "Simple Product",
        "image": require("../assets/items/679_MENDIANT CHOCOLATE 15912.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Chocolate চকলেট "
    },
    {
        "id": "680",
        "price": "16",
        "label": "CHOCOLATE FUDGE WITH NUTS ",
        "type": "Simple Product",
        "image": require("../assets/items/680_CHOCOLATE FUDGE WITH NUTS 18350.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Chocolate চকলেট "
    },
    {
        "id": "681",
        "price": "8",
        "label": "CARAMEL CHOCOLATE ",
        "type": "Simple Product",
        "image": require("../assets/items/681_CARAMEL CHOCOLATE 54912.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Chocolate চকলেট "
    },
    {
        "id": "682",
        "price": "10",
        "label": "ORANGE CHOCOLATE ",
        "type": "Simple Product",
        "image": require("../assets/items/682_ORANGE CHOCOLATE 98376.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Chocolate চকলেট "
    },
    {
        "id": "683",
        "price": "15",
        "label": "MANGO CHILLI CHOCOLATE ",
        "type": "Simple Product",
        "image": require("../assets/items/683_MANGO CHILLI CHOCOLATE 94023.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Chocolate চকলেট "
    },
    {
        "id": "684",
        "price": "15",
        "label": "GULKAND CHOCOLATE ",
        "type": "Simple Product",
        "image": require("../assets/items/684_GULKAND CHOCOLATE 39492.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Chocolate চকলেট "
    },
    {
        "id": "1343",
        "price": "130",
        "label": "RANGOLI CHEESECAKE",
        "type": "Simple Product",
        "image": require("../assets/items/_RANGOLI CHEESECAKE44937.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "COLD CHEESE CAKE "
    },
    {
        "id": "672",
        "price": "300",
        "label": "MANGO COLD CHEESE CAKE  ",
        "type": "Variable Product",
        "image": require("../assets/items/672-00-1_MANGO COLD CHEESE CAKE 46682.jpeg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "COLD CHEESE CAKE "
    },
    {
        "id": "674",
        "price": "300",
        "label": "STRAWBERRY COLD CHEESE CAKE  ",
        "type": "Variable Product",
        "image": require("../assets/items/674-00-1_STRAWBERRY COLD CHEESE CAKE  97937.jpeg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "COLD CHEESE CAKE "
    },
    {
        "id": "826",
        "price": "200",
        "label": "PUNJABI MUTTON KEEMA TARKA ",
        "type": "Simple Product",
        "image": require("../assets/items/_PUNJABI MUTTON KEEMA TARKA পাঞ্জাবি মটন কিমা তারকা 69311.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DAL"
    },
    {
        "id": "970",
        "price": "140",
        "label": "KAJU KISMIS DIYE BHAJA MUGER DAL",
        "type": "Simple Product",
        "image": require("../assets/items/_KAJU KISMIS DIYE BHAJA MUGER DAL20114.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DAL"
    },
    {
        "id": "971",
        "price": "140",
        "label": "NARKEL DIYE CHOLAR DAL",
        "type": "Simple Product",
        "image": require("../assets/items/_NARKEL DIYE CHOLAR DAL17215.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DAL"
    },
    {
        "id": "972",
        "price": "180",
        "label": "MACHER MATHA DIYE DAL",
        "type": "Simple Product",
        "image": require("../assets/items/_MACHER MATHA DIYE DAL97141.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DAL"
    },
    {
        "id": "973",
        "price": "240",
        "label": "CHINGRI DIYE SONA MUG DAL",
        "type": "Simple Product",
        "image": require("../assets/items/_CHINGRI DIYE SONA MUG DAL15126.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DAL"
    },
    {
        "id": "312",
        "price": "50",
        "label": "BHAJA MUGER DAL ",
        "type": "Simple Product",
        "image": require("../assets/items/312_BHAJA MUGER DAL  ভাজা মুগের ডাল 34662.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DAL"
    },
    {
        "id": "224",
        "price": "120",
        "label": "PANJABI TARKA ",
        "type": "Variable Product",
        "image": require("../assets/items/224_PANJABI TARKA কুইক মিল পাঞ্জাবি তারকা ২ জনের জন্য47216.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DAL"
    },
    {
        "id": "225",
        "price": "140",
        "label": "DAL MAKHANI ",
        "type": "Simple Product",
        "image": require("../assets/items/225_DAL76818.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DAL"
    },
    {
        "id": "1140",
        "price": "80",
        "label": "MOURI MICHRIR SHORBOT",
        "type": "Simple Product",
        "image": require("../assets/items/1140_MOURI MICHRIR SHORBOT71128.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DESSERT AND BEVERAGE"
    },
    {
        "id": "1141",
        "price": "90",
        "label": "GUR TETULER MASHLA SHORBOT",
        "type": "Simple Product",
        "image": require("../assets/items/1141_GUR TETULER MASHLA SHORBOT55318.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DESSERT AND BEVERAGE"
    },
    {
        "id": "1001",
        "price": "100",
        "label": "DAABER PAYES",
        "type": "Simple Product",
        "image": require("../assets/items/_DAABER PAYES87223.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DESSERT AND BEVERAGE"
    },
    {
        "id": "1002",
        "price": "150",
        "label": "DAABER SORBOT",
        "type": "Simple Product",
        "image": require("../assets/items/_DAABER SORBOT32518.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DESSERT AND BEVERAGE"
    },
    {
        "id": "1003",
        "price": "120",
        "label": "GANDHARAJ GHOL",
        "type": "Simple Product",
        "image": require("../assets/items/_GANDHARAJ GHOL59224.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DESSERT AND BEVERAGE"
    },
    {
        "id": "1004",
        "price": "80",
        "label": "KAANCHA AAMER SORBOT",
        "type": "Simple Product",
        "image": require("../assets/items/_KAANCHA AAMER SORBOT88019.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DESSERT AND BEVERAGE"
    },
    {
        "id": "1018",
        "price": "60",
        "label": "KANCHA AAMER CHATNI",
        "type": "Simple Product",
        "image": require("../assets/items/_KANCHA AAMER CHATNI11040.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DESSERT AND BEVERAGE"
    },
    {
        "id": "773",
        "price": "50",
        "label": "MANGO PANNACOTTA ম্যাঙ্গো পানাকাটা ",
        "type": "Simple Product",
        "image": require("../assets/items/773_MANGO PANNACOTTA ম্যাঙ্গো পানাকাটা 33637.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Desserts ডেসার্ট"
    },
    {
        "id": "774",
        "price": "50",
        "label": "BLUE BERRY PANNACOTTA ব্লু  বেরি পানাকাটা",
        "type": "Simple Product",
        "image": require("../assets/items/774_BLUE BERRY PANNACOTTA ব্লু  বেরি পানাকাটা82586.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Desserts ডেসার্ট"
    },
    {
        "id": "782",
        "price": "30",
        "label": "BAKED RASGULLA বেক্ড রসগোল্লা ",
        "type": "Simple Product",
        "image": require("../assets/items/782_BAKED RASGULLA বেক্ড রসগোল্লা 46042.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Desserts ডেসার্ট"
    },
    {
        "id": "903",
        "price": "40",
        "label": "RUM BALL CHOCOLATE PASTRY",
        "type": "Simple Product",
        "image": require("../assets/items/903_CHOCOLATE PESTRY12630.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Desserts ডেসার্ট"
    },
    {
        "id": "938",
        "price": "30",
        "label": "CHOCOLATE PASTRY",
        "type": "Simple Product",
        "image": require("../assets/items/_CHOCOLATE PASTRY65156.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Desserts ডেসার্ট"
    },
    {
        "id": "1023",
        "price": "85",
        "label": "MONTE CARLO",
        "type": "Simple Product",
        "image": require("../assets/items/1023_MONTE CARLO মোন্টে কার্লো 28461.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Desserts ডেসার্ট"
    },
    {
        "id": "438",
        "price": "50",
        "label": "DOI VAPA",
        "type": "Simple Product",
        "image": require("../assets/items/438_Doi Vapa দই ভাপা 26008.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Desserts ডেসার্ট"
    },
    {
        "id": "440",
        "price": "30",
        "label": "Butter Scotch Pastry বাটারস্কচ পেস্ট্রি ",
        "type": "Simple Product",
        "image": require("../assets/items/440_Butter Scotch Pastry বাটারস্কচ পেস্ট্রি 78141.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Desserts ডেসার্ট"
    },
    {
        "id": "474",
        "price": "55",
        "label": "Red Velvet Pastry রেড ভেলভেট প্যাস্ট্রি ",
        "type": "Simple Product",
        "image": require("../assets/items/474_Red Velvet Pastry রেড ভেলভেট প্যাস্ট্রি 70569.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Desserts ডেসার্ট"
    },
    {
        "id": "495",
        "price": "45",
        "label": "Black Forest Pastry ব্ল্যাক ফরেস্ট পেস্ট্রি ",
        "type": "Simple Product",
        "image": require("../assets/items/495_Black Forest Pastry ব্ল্যাক ফরেস্ট পেস্ট্রি 33552.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Desserts ডেসার্ট"
    },
    {
        "id": "768",
        "price": "155",
        "label": "TRIANGLE PANEER MASALA DHOSA FAMILY SIZE (2ft) ",
        "type": "Simple Product",
        "image": require("../assets/items/768_TRIANGLE PANEER MASALA DHOSA FAMILY SIZE (2ft)  ট্রাই এঙ্গেল পনির মশালা ধোসা  ফ্যামিলী সাইজ (২ফুট)69492.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DHOSA "
    },
    {
        "id": "765",
        "price": "85",
        "label": "MYSORE BUTTER MASALA DHOSA DOUBLE SIZE (1ft) ",
        "type": "Simple Product",
        "image": require("../assets/items/_MYSORE BUTTER MASALA DHOSA DOUBLE SIZE (1ft) মাইসোর বাটার মশালা ধোসা ডাবল সাইজ(১ফুট)39743.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DHOSA "
    },
    {
        "id": "766",
        "price": "130",
        "label": "MYSORE BUTTER MASALA DHOSA FAMILY SIZE (2ft) ",
        "type": "Simple Product",
        "image": require("../assets/items/_MYSORE BUTTER MASALA DHOSA FAMILY SIZE (2ft) মাইসোর বাটার মশালা ধোসা ফ্যামিলী সাইজ (২ফুট)83154.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DHOSA "
    },
    {
        "id": "767",
        "price": "100",
        "label": "TRIANGLE PANEER MASALA DHOSA DOUBLE SIZE (1ft)  ",
        "type": "Simple Product",
        "image": require("../assets/items/_TRIANGLE PANEER MASALA DHOSA DOUBLE SIZE (1ft)  ট্রাই এঙ্গেল পনির মশালা ধোসা ডাবল সাইজ (১ফুট)15630.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DHOSA "
    },
    {
        "id": "757",
        "price": "90",
        "label": "BUTTER MASALA DHOSA DOUBLE SIZE (1ft) ",
        "type": "Simple Product",
        "image": require("../assets/items/_BUTTER MASALA DHOSA DOUBLE SIZE (1ft) বাটার মশালা ধোসা ডাবল সাইজ(১ফুট) 10533.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DHOSA "
    },
    {
        "id": "758",
        "price": "145",
        "label": "BUTTER MASALA DHOSA FAMILY SIZE (2ft) ",
        "type": "Simple Product",
        "image": require("../assets/items/_BUTTER MASALA DHOSA FAMILY SIZE (2ft) বাটার মশালা ধোসা ফ্যামিলী সাইজ (২ফুট)76251.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DHOSA "
    },
    {
        "id": "2",
        "price": "75",
        "label": "PLAIN DHOSA  DOUBLE SIZE (1ft) ",
        "type": "Simple Product",
        "image": require("../assets/items/2_Plain Dhosa প্লেন ধোসা90672.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DHOSA "
    },
    {
        "id": "4",
        "price": "100",
        "label": "PLAIN DHOSA FAMILY SIZE (2ft) ",
        "type": "Simple Product",
        "image": require("../assets/items/4_PLAIN BUTTER DHOSA প্লেন বাটার ধোসা94691.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DHOSA "
    },
    {
        "id": "5",
        "price": "80",
        "label": "PLAIN BUTTER DHOSA DOUBLE SIZE (1ft) ",
        "type": "Simple Product",
        "image": require("../assets/items/5_PLAIN BUTTER DHOSA DOUBLE SIZE (1ft) প্লেন বাটার ধোসা ডাবল সাইজ(১ফুট)73146.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DHOSA "
    },
    {
        "id": "6",
        "price": "120",
        "label": "PLAIN BUTTER DHOSA FAMILY SIZE (2ft)  ",
        "type": "Simple Product",
        "image": require("../assets/items/6_PLAIN BUTTER DHOSA FAMILY SIZE (2ft)  প্লেন বাটার ধোসা ফ্যামিলী সাইজ (২ফুট)63940.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DHOSA "
    },
    {
        "id": "7",
        "price": "80",
        "label": "MASALA DHOSA DOUBLE SIZE (1ft) ",
        "type": "Simple Product",
        "image": require("../assets/items/7_MASALA DHOSA DOUBLE SIZE (1ft) মশালা ধোসা ডাবল সাইজ(১ফুট)58796.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DHOSA "
    },
    {
        "id": "8",
        "price": "135",
        "label": "MASALA DHOSA FAMILY SIZE (2ft) ",
        "type": "Simple Product",
        "image": require("../assets/items/8_TRIANGLE PANEER MASALA DHOSA ট্রাই এঙ্গেল পনির মশালা ধোসা96939.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "DHOSA "
    },
    {
        "id": "577",
        "price": "20",
        "label": "Bottled Water 1 LITTER  বোতলের জল ১ লিটার ",
        "type": "Variable Product",
        "image": require("../assets/items/577_Bottled Water 1 LITTER  বোতলের জল ১ লিটার 85635.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Drinking Water খাওয়ার জল"
    },
    {
        "id": "145",
        "price": "10",
        "label": "Bottled Water 500 ML  বোতলের জল ৫০০ মিলি",
        "type": "Variable Product",
        "image": require("../assets/items/145_Bottled Water বোতলের জল89542.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Drinking Water খাওয়ার জল"
    },
    {
        "id": "824",
        "price": "30",
        "label": "BOILED EGG 2 PCS ",
        "type": "Simple Product",
        "image": require("../assets/items/_BOILED EGG 2 PCS ২ পিস্ ডিম সেদ্ধ 18451.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "EGG"
    },
    {
        "id": "848",
        "price": "35",
        "label": "DOUBLE EGG OMLETE",
        "type": "Simple Product",
        "image": require("../assets/items/_DOUBLE EGG OMLET 25848.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "EGG"
    },
    {
        "id": "849",
        "price": "45",
        "label": "DOUBLE EGG MASALA OMLETE ",
        "type": "Simple Product",
        "image": require("../assets/items/_DOUBLE EGG MASALA OMLET 83205.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "EGG"
    },
    {
        "id": "850",
        "price": "40",
        "label": "DOUBLE EGG POUCH  ",
        "type": "Simple Product",
        "image": require("../assets/items/_DOUBLE EGG POUCH 36265.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "EGG"
    },
    {
        "id": "851",
        "price": "60",
        "label": "DOUBLE EGG CHEESE OMLETE",
        "type": "Simple Product",
        "image": require("../assets/items/851_DOUBLE EGG CHEESE OMLETE69269.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "EGG"
    },

    {
        "id": "1131",
        "price": "160",
        "label": "BASUDHAR  KATLA MACH ",
        "type": "Variable Product",
        "image": require("../assets/items/1131_80147.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "1132",
        "price": "200",
        "label": "BASUDHAR PABDA MACH",
        "type": "Variable Product",
        "image": require("../assets/items/1132_63452.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "1133",
        "price": "440",
        "label": "BASUDHAR ILISH MACH",
        "type": "Variable Product",
        "image": require("../assets/items/1133_81084.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "1134",
        "price": "880",
        "label": "BASUDHAR POMFRET MACH",
        "type": "Variable Product",
        "image": require("../assets/items/1134_70380.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "1135",
        "price": "895",
        "label": "BASUDHAR WHOLE BHETKI",
        "type": "Variable Product",
        "image": require("../assets/items/1135_85101.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "1136",
        "price": "545",
        "label": "KANKRA AAM KASUNDI- WHOLE",
        "type": "Simple Product",
        "image": require("../assets/items/1136_KANKRA AAM KASUNDI16947.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "1137",
        "price": "320",
        "label": "MURGI KOLMI KOSHA",
        "type": "Simple Product",
        "image": require("../assets/items/1137_MURGI KOLMI KOSHA81523.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "1138",
        "price": "450",
        "label": "PRESSURE COOKER MANGSHO",
        "type": "Simple Product",
        "image": require("../assets/items/1138_PRESSURE COOKER MANGSHO49813.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "964",
        "price": "330",
        "label": "CHINGRI SORSHE BHAPA 2 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/964_CHINGRI SORSHE BHAPA39953.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "990",
        "price": "190",
        "label": "AMADA GANDHARAJ DIYE MACHER PATURI 2 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/_AMADA GANDHARAJ DIYE MACHER PATURI74620.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "991",
        "price": "300",
        "label": "BHETKI MACHER TOMATO JHAL 4 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/_BHETKI MACHER TOMATO JHAL66548.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "994",
        "price": "400",
        "label": "KANCHA LANKA CHINGRI 4 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/994_KANCHA LANKA CHINGRI75724.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "997",
        "price": "280",
        "label": "GORGORE MURGI KOSHA 4 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/_GORGORE MURGI KOSHA12338.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "998",
        "price": "280",
        "label": "MURGIR DOM JHOL 4 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/_MURGIR DOM JHOL68838.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "999",
        "price": "450",
        "label": " BASUDHA SPECIAL KOSHA MANGSHO 4 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/_ BASUDHA SPECIAL KOSHA MANGSHO90705.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES NON VEG"
    },
    {
        "id": "1130",
        "price": "220",
        "label": "HING DIYE ALOO DOM",
        "type": "Simple Product",
        "image": require("../assets/items/1130_HING DIYE ALOO DOM14206.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES VEG"
    },
    {
        "id": "983",
        "price": "240",
        "label": "AAM  DIYE  BHENDI",
        "type": "Simple Product",
        "image": require("../assets/items/_AAM  KASUNDI  BHENDI60706.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES VEG"
    },
    {
        "id": "985",
        "price": "240",
        "label": "KARAI SUTIR DHOKA 4 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/_KARAI SUTIR DHOKA38220.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES VEG"
    },
    {
        "id": "986",
        "price": "240",
        "label": "MOCHAR  GHONTO",
        "type": "Variable Product",
        "image": require("../assets/items/_MOCHAR  GHONTO71521.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES VEG"
    },
    {
        "id": "987",
        "price": "240",
        "label": "NARKEL DIYE LAU GHONTO",
        "type": "Simple Product",
        "image": require("../assets/items/_NARKEL DIYE LAU GHONTO86455.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES VEG"
    },
    {
        "id": "988",
        "price": "240",
        "label": "POTOL SORSHE NARKEL DIYE",
        "type": "Simple Product",
        "image": require("../assets/items/_POTOL SORSHE NARKEL DIYE53163.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES VEG"
    },
    {
        "id": "989",
        "price": "240",
        "label": "RAJBARIR CHANAR DALNA 6 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/989_RAJBARIR CHANAR DALNA41564.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ENTREES VEG"
    },
    {
        "id": "531",
        "price": "250",
        "label": "FONDENT 01 MAX DELIVERY TIME 24 HR",
        "type": "Variable Product",
        "image": require("../assets/items/531-00-1_FONDENT 01 MAX DELIVERY TIME 24 HR HALF Ib 25065.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "FONDENT CAKES"
    },
    {
        "id": "532",
        "price": "250",
        "label": "FONDENT 02 MAX DELIVERY TIME 24 HR",
        "type": "Variable Product",
        "image": require("../assets/items/532-00-1_FONDENT 02 MAX DELIVERY TIME 24 HR HALF Ib 79213.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "FONDENT CAKES"
    },
    {
        "id": "533",
        "price": "250",
        "label": "FONDENT 03 MAX DELIVERY TIME 24 HR",
        "type": "Variable Product",
        "image": require("../assets/items/533-00-1_FONDENT 03 MAX DELIVERY TIME 24 HR HALF Ib 10926.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "FONDENT CAKES"
    },
    {
        "id": "534",
        "price": "250",
        "label": "FONDENT 04 MAX DELIVERY TIME 24 HR  ",
        "type": "Variable Product",
        "image": require("../assets/items/534-00-1_80436.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "FONDENT CAKES"
    },
    {
        "id": "535",
        "price": "250",
        "label": "FONDENT 07 MAX DELIVERY TIME 24 HR",
        "type": "Variable Product",
        "image": require("../assets/items/535-00-1_26009.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "FONDENT CAKES"
    },
    {
        "id": "536",
        "price": "250",
        "label": "FONDENT 08 MAX DELIVERY TIME 24 HR ",
        "type": "Variable Product",
        "image": require("../assets/items/536-00-1_90435.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "FONDENT CAKES"
    },
    {
        "id": "537",
        "price": "250",
        "label": "FONDENT 10 MAX DELIVERY TIME 24 HR",
        "type": "Variable Product",
        "image": require("../assets/items/537-00-1_FONDENT 10 MAX DELIVERY TIME 24 HR HALF Ib 90885.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "FONDENT CAKES"
    },
    {
        "id": "538",
        "price": "250",
        "label": "FONDENT 11 MAX DELIVERY TIME 24 HR",
        "type": "Variable Product",
        "image": require("../assets/items/538-00-1_FONDENT 11 MAX DELIVERY TIME 24 HR HALF Ib 70404.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "FONDENT CAKES"
    },
    {
        "id": "553",
        "price": "250",
        "label": "FONDENT 05 MAX DELIVERY TIME 24 HR  ",
        "type": "Variable Product",
        "image": require("../assets/items/553-00-1_FONDENT 06- MAX DELIVERY TIME 24 HR HALF Ib 51623.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "FONDENT CAKES"
    },
    {
        "id": "554",
        "price": "250",
        "label": "FONDENT 06 MAX DELIVERY TIME 24 HR",
        "type": "Variable Product",
        "image": require("../assets/items/554-00-1_FONDENT 06 MAX DELIVERY TIME 24 HR HALF Ib 34563.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "FONDENT CAKES"
    },
    {
        "id": "570",
        "price": "200",
        "label": "FONDENT 09 MAX DELIVERY TIME 24 HR ",
        "type": "Variable Product",
        "image": require("../assets/items/570-00-1_11906.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "FONDENT CAKES"
    },
    {
        "id": "539",
        "price": "250",
        "label": "FRESH FRUIT 01 MAX DELIVERY TIME  48 HR    ",
        "type": "Variable Product",
        "image": require("../assets/items/539-00-1_14545.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "FRESH FRUIT CAKES"
    },
    {
        "id": "540",
        "price": "250",
        "label": "FRESH FRUIT 02 MAX DELIVERY TIME 48 HR ",
        "type": "Variable Product",
        "image": require("../assets/items/540-00-1_FRESH FRUIT 02 MAX DELIVERY TIME 48 HR HALF Ib27467.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "FRESH FRUIT CAKES"
    },
    {
        "id": "541",
        "price": "250",
        "label": "FRESH FRUIT 03 MAX DELIVERY TIME  24 HR",
        "type": "Variable Product",
        "image": require("../assets/items/541-00-1_FRESH FRUIT 03 MAX DELIVERY TIME  24 HR HALF Ib 59248.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "FRESH FRUIT CAKES"
    },
    {
        "id": "1341",
        "price": "70",
        "label": "KULFI",
        "type": "Variable Product",
        "image": require("../assets/items/1341_KESAR PESTA KULFI83426.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ICE CREAM "
    },
    {
        "id": "1159",
        "price": "50",
        "label": "MANGO SUNDE",
        "type": "Simple Product",
        "image": require("../assets/items/1159_25448.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ICE CREAM "
    },
    {
        "id": "1160",
        "price": "55",
        "label": "CHOCOLATE SUNDAE",
        "type": "Simple Product",
        "image": require("../assets/items/1160_70795.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ICE CREAM "
    },
    {
        "id": "1161",
        "price": "60",
        "label": "BROWINE SUNDAE",
        "type": "Simple Product",
        "image": require("../assets/items/1161_57311.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ICE CREAM "
    },
    {
        "id": "1258",
        "price": "140",
        "label": "VANILLA SCOOP WITH STICKY DATES PUDDING",
        "type": "Simple Product",
        "image": require("../assets/items/1258_VANILLA SCOOP WITH STICKY DATES PUDDING61240.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ICE CREAM "
    },
    {
        "id": "1259",
        "price": "215",
        "label": "ROYAL FALOODA ",
        "type": "Simple Product",
        "image": require("../assets/items/1259_ROYAL FALOODA 38424.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ICE CREAM "
    },
    {
        "id": "86",
        "price": "55",
        "label": "VANILA WITH CHOCO TOPING TWISTER ",
        "type": "Simple Product",
        "image": require("../assets/items/86_16246.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ICE CREAM "
    },





    {
        "id": "1011",
        "price": "450",
        "label": "BLACK FOREST ICE CREAM CAKE 1 Lb ",
        "type": "Simple Product",
        "image": require("../assets/items/_BLACK FOREST ICE CREAM CAKE 1lb 28673.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ICE CREAM CAKE"
    },
    {
        "id": "1013",
        "price": "400",
        "label": "CHOCOLATE ICE CREAM CAKE 1 Lb",
        "type": "Simple Product",
        "image": require("../assets/items/_CHOCOLATE ICE CREAM CAKE 1 Ib15827.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ICE CREAM CAKE"
    },
    {
        "id": "1014",
        "price": "350",
        "label": "VANILLA ICE CREAM CAKE 1 Lb",
        "type": "Simple Product",
        "image": require("../assets/items/_VANILLA ICE CREAM CAKE 1 Lb36254.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ICE CREAM CAKE"
    },
    {
        "id": "1284",
        "price": "80",
        "label": "ORANGE JUICE",
        "type": "Simple Product",
        "image": require("../assets/items/1284_84051.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "JUICE"
    },
    {
        "id": "52",
        "price": "50",
        "label": "MATTHI KA DAHI LASSI ",
        "type": "Variable Product",
        "image": require("../assets/items/52_MATTHI KA DAHI LASSI মাট্টি কা দহি লস্যি 15323.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "LASSI"
    },
    {
        "id": "57",
        "price": "60",
        "label": "MATTHI KA MANGO LASSI",
        "type": "Variable Product",
        "image": require("../assets/items/57_MATTHI KA MANGO LASSI মাট্টি কা আম লস্যি 41208.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "LASSI"
    },
    {
        "id": "63",
        "price": "80",
        "label": "MATTHI KA SAHI BADAM KESARIA LASSI ",
        "type": "Variable Product",
        "image": require("../assets/items/63_30269.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "LASSI"
    },
    {
        "id": "348",
        "price": "55",
        "label": "DOIER CHANCH",
        "type": "Simple Product",
        "image": require("../assets/items/348_Doier Chanch দইয়ের ছাঁচ40493.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "LASSI"
    },


    {
        "id": "1030",
        "price": "495",
        "label": "CRAB MASALA (WHOLE )",
        "type": "Simple Product",
        "image": require("../assets/items/1030_CRABE MASALA ক্র্যাব মাসালা 26451.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "1293",
        "price": "330",
        "label": "CHICKEN CHAP ",
        "type": "Variable Product",
        "image": require("../assets/items/1293_99814.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "1042",
        "price": "480",
        "label": "MUTTON REZALA 4 PCS ",
        "type": "Simple Product",
        "image": require("../assets/items/_MUTTON REZALA 4 PCS মটন রেজালা ৪ পিস্ 25580.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "1319",
        "price": "270",
        "label": "ALU DIYE BOYAL MACHER KOSHA 100 GM 1 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/_ALU DIYE BOYAL MACHER KOSHA 100 GM 1 PC 76119.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "1320",
        "price": "150",
        "label": "AMUDI MACHER SORSHE TOMATO JHAL ",
        "type": "Simple Product",
        "image": require("../assets/items/_AMUDI MACHER SORSHE TOMETO JHAL 99638.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "1321",
        "price": "120",
        "label": "LOTE MACHER BATI CHACHORI",
        "type": "Simple Product",
        "image": require("../assets/items/_LOTE MACHER BATI CHARCHORI 75312.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "1322",
        "price": "330",
        "label": "CHINGRI MACHER PIYAJ KOLI KOSHA ",
        "type": "Simple Product",
        "image": require("../assets/items/1322_CHINGRI MACHER PIYAJ KOLI KOSHA 63205.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "1323",
        "price": "180",
        "label": "PARSHE MACHER SORSHE BATA DIYE JHAL",
        "type": "Simple Product",
        "image": require("../assets/items/_PARSHE MACHER SORSHE BATA DIYE JHAL11900.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "1324",
        "price": "225",
        "label": "SORSHE DIYE GURJALI MACH",
        "type": "Simple Product",
        "image": require("../assets/items/_SORSHE DIYE GURJALI MACH10878.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "813",
        "price": "110",
        "label": "MACHER KALIA ",
        "type": "Simple Product",
        "image": require("../assets/items/813_KATLA KALIA কাতলা কালিয়া 82341.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },

    {
        "id": "1331",
        "price": "160",
        "label": "MACHHER MURI GHONTO",
        "type": "Simple Product",
        "image": require("../assets/items/_MACHHER MURI GHONTO19615.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "1106",
        "price": "290",
        "label": "TAOSI CHICKEN",
        "type": "Simple Product",
        "image": require("../assets/items/1106_TAOSI CHICKEN45643.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "906",
        "price": "360",
        "label": "MUTTON SAGWALA 3 Pc (WITH OUT RIBS)",
        "type": "Simple Product",
        "image": require("../assets/items/906_25605.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "941",
        "price": "275",
        "label": "CHICKEN LAHORI ",
        "type": "Simple Product",
        "image": require("../assets/items/_CHICKEN LAHORI93774.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "942",
        "price": "385",
        "label": "CHAMPARAN MUTTON ",
        "type": "Variable Product",
        "image": require("../assets/items/_CHAMPARAN MUTTON81336.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "1245",
        "price": "290",
        "label": "MAYER SPECIAL BHETKI KANTAR TARKARI",
        "type": "Simple Product",
        "image": require("../assets/items/1245_MAYER SPECIAL BHETKI KANTAR TARKARI74687.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "157",
        "price": "145",
        "label": "CHILLI CHICKEN ",
        "type": "Variable Product",
        "image": require("../assets/items/157_CHILLI CHICKEN চিলি চিকেন12877.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "271",
        "price": "290",
        "label": "SUAN TIAN DE",
        "type": "Variable Product",
        "image": require("../assets/items/271_SWEET AND SOUR  CHICKEN সুইট এন সাওয়ার চিকেন 84611.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "272",
        "price": "155",
        "label": "HOT GARLIC CHICKEN  ",
        "type": "Simple Product",
        "image": require("../assets/items/272_HOT GARLIC CHICKEN  হট গার্লিক চিকেন 55362.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "574",
        "price": "165",
        "label": "SCHEZWAN CHICKEN ",
        "type": "Simple Product",
        "image": require("../assets/items/574_SCHEZWAN CHICKEN  সেজওয়ান চিকেন 60142.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "575",
        "price": "145",
        "label": "MANCHURIAN CHICKEN ",
        "type": "Simple Product",
        "image": require("../assets/items/575_MANCHURIAN CHICKEN মাঞ্চুরিয়ান  চিকেন21811.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "329",
        "price": "80",
        "label": "Rui Mach Bhaja1 Pc  ",
        "type": "Simple Product",
        "image": require("../assets/items/329_Rui Mach Bhaja1 Pc কুইক মিল রুই মাছ ভাজা ১ পিস27493.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "332",
        "price": "120",
        "label": "DOI MACH ",
        "type": "Simple Product",
        "image": require("../assets/items/332_Doi Mach কুইক মিল দই মাছ48541.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "342",
        "price": "140",
        "label": "FISH PATURI",
        "type": "Simple Product",
        "image": require("../assets/items/342_Nona Joler Mach Paturi নোনা জলের মাছ পাতুরি47139.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "439",
        "price": "185",
        "label": "Pabdar Tel Jhal 1 Pice",
        "type": "Simple Product",
        "image": require("../assets/items/439_Pabdar Tel Jhal 1 Pice পাবদার তেল ঝাল ১ পিস43671.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "502",
        "price": "250",
        "label": "CHITAL MACHER PETI 1 PC 100 GM চিতল মাছের পেটি ১ পিস ১০০ গ্রাম ",
        "type": "Simple Product",
        "image": require("../assets/items/502_CHITAL MACHER PETI 1 PC 100 GM চিতল মাছের পেটি ১ পিস ১০০ গ্রাম 99816.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "503",
        "price": "250",
        "label": "Chital Macher Muitha 6pcs চিতল মাছের  মুইঠা ৬ পিস   ",
        "type": "Simple Product",
        "image": require("../assets/items/503_Chital Macher Muitha চিতল মাছের  মুইঠা   74704.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "378",
        "price": "300",
        "label": "ILISH SORSHE 70 GM ইলিশ সর্ষে ৭০ গ্রাম ",
        "type": "Simple Product",
        "image": require("../assets/items/378_ILISH SORSHE 70 GM (SEASONAL) ইলিশ সর্ষে ৭০ গ্রাম (সিজিনাল )94875.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "737",
        "price": "230",
        "label": "CHINGRI MACHER MALAI KARI  100 GM ",
        "type": "Simple Product",
        "image": require("../assets/items/737_CHINGRI MACHER MALAI KARI  100 GM চিংড়ি মাছের মালাই কারী ১০০ গ্রাম 63750.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "343",
        "price": "110",
        "label": "MURGIR MANGSOR JHOL 3 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/343_MURGIR MANGSOR JHOL 50 GM X 2 PC  মুরগির মাংসের ঝোল ৫০ গ্রামের ২ পিস্ 50474.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "346",
        "price": "185",
        "label": "KHASIR KOSHA MANGSHO  50 GM 2 Pc ",
        "type": "Variable Product",
        "image": require("../assets/items/346_Khasir Kosha Mangso 2 Pc কুইক মিল খাসির কষা মাংস ২ পিস24283.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "240",
        "price": "170",
        "label": "CHICKEN KOSHA 4 PC",
        "type": "Simple Product",
        "image": require("../assets/items/240_CHICKEN CURRY 50 GM 3 PC  চিকেন কারি ৫০ গ্রামের ৩ পিস্ 69150.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "241",
        "price": "290",
        "label": "TANDOORI CHICKEN BUTTER MASALA   ",
        "type": "Variable Product",
        "image": require("../assets/items/241_TANDOORI CHICKEN BUTTER MASALA   তন্দুরি চিকেন বাটার মশালা  15423.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "242",
        "price": "265",
        "label": "MURGH MAKHANI - 6 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/242_MURGH 81084.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "243",
        "price": "260",
        "label": "CHICKEN BHARTA ",
        "type": "Simple Product",
        "image": require("../assets/items/243_CHICKEN BHARTA 95200.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "244",
        "price": "265",
        "label": "SPICY KADAI CHICKEN  6 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/244_SPICY KADAI CHICKEN 4 PC WITH BONE স্পাইসি  কড়াই  চিকেন ৪ পিস উইথ বোন 52190.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "245",
        "price": "265",
        "label": "CHATPATA CHICKEN DHANIA 6 PC BONELESS ",
        "type": "Simple Product",
        "image": require("../assets/items/245_CHATPATA CHICKEN DHANIA 6 PC WITH BONE চটপটা চিকেন ধনিয়া ৬ পিস্  বোন লেস 40493.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "247",
        "price": "245",
        "label": "CHICKEN SAGWALA 4 PC X 50 GM  WITH BONE  ",
        "type": "Simple Product",
        "image": require("../assets/items/247_DUM-KA -MURGH 3 PC  WITH BONE  দম-কা-মুর্গ ৩ পিস উইথ বোন 52581.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "250",
        "price": "275",
        "label": "MUTTON KOSA 3 PC ",
        "type": "Variable Product",
        "image": require("../assets/items/250_MUTTON KOSA 3 PC WITH BONE মাটন কষা ৩ পিস উইথ বোন 97690.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "403",
        "price": "290",
        "label": "FISH BUTTER MASALA 5 PC",
        "type": "Simple Product",
        "image": require("../assets/items/403_FISH BUTTER MASALA 5 PC  ফিস বাটার মশালা ৫ পিস 60339.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "404",
        "price": "310",
        "label": "FISH TIKKA MAKHANI 5 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/404_FISH TIKKA MAKHANI 5 PC  ফিস টিক্কা মাখানি ৫ পিস 89495.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "755",
        "price": "300",
        "label": "MUTTON KEEMA MASALA ",
        "type": "Simple Product",
        "image": require("../assets/items/_MUTTON KEEMA MASALA মটন কিমা মশলা 33892.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- NON VEG"
    },
    {
        "id": "1090",
        "price": "230",
        "label": "CHANA PANEER MASALA",
        "type": "Simple Product",
        "image": require("../assets/items/1090_CHANA PANEER MASALA19479.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "836",
        "price": "145",
        "label": "PANNER IN CHOICE OF YOUR SAUCE ",
        "type": "Variable Product",
        "image": require("../assets/items/_PANNER IN CHILLI SAUCE 40332.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "837",
        "price": "155",
        "label": "PANNER IN HOT GARLIC  SAUCE ",
        "type": "Simple Product",
        "image": require("../assets/items/_PANNER IN HOT GARLIC  SAUCE 82781.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "1093",
        "price": "230",
        "label": "KADAI PANEER KALI MIRCH",
        "type": "Simple Product",
        "image": require("../assets/items/1093_KADAI PANEER KALI MIRCH41158.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "839",
        "price": "145",
        "label": "SEASONAL VEGETABLES  IN CHOICE OF YOUR SAUCE",
        "type": "Variable Product",
        "image": require("../assets/items/839_MIX VEG IN CHILI SOYA SAUCE 30988.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "1105",
        "price": "240",
        "label": "BABY CORN MUSHROOM BROCCOLI HUPAK STYLE",
        "type": "Simple Product",
        "image": require("../assets/items/1105_BABY CORN MUSHROOM BROCCOLI HUPAK STYLE13365.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "1121",
        "price": "230",
        "label": "CORN AND PANEER IN HOT GARLIC SAUCE",
        "type": "Simple Product",
        "image": require("../assets/items/1121_CORN AND PANEER IN HOT GARLIC SAUCE19679.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "1122",
        "price": "240",
        "label": "TAWE WALE KHUMB DOPYAJA",
        "type": "Simple Product",
        "image": require("../assets/items/1122_TAWE WALE KHUMB DOPYAJA95208.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "940",
        "price": "180",
        "label": "CHANA MASALA ",
        "type": "Simple Product",
        "image": require("../assets/items/_CHANA MASALA চানা মশলা88097.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "325",
        "price": "95",
        "label": "DALER DHOKAR DALNA 4 PC",
        "type": "Simple Product",
        "image": require("../assets/items/325_DALER DHOKAR DALNA 4 PC ডালের ধোকার ডালনা ৪ পিস 67840.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "232",
        "price": "120",
        "label": "KASHMIRI ALUR DUM ",
        "type": "Simple Product",
        "image": require("../assets/items/232_KASHMIRI ALUR DUM কাশ্মীরি আলুর দম 27891.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "234",
        "price": "160",
        "label": "MIX VEG ",
        "type": "Simple Product",
        "image": require("../assets/items/234_MIX VEG মিক্স ভেজ  35057.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "235",
        "price": "175",
        "label": "PANEER BUTTER MASALA ",
        "type": "Simple Product",
        "image": require("../assets/items/235_PANNER BUTTER MASALA পনির বাটার মশালা12708.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "237",
        "price": "180",
        "label": "PANEER MAKHANI ",
        "type": "Simple Product",
        "image": require("../assets/items/237_PANNER MAKHANI পনির মাখানি 17413.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "238",
        "price": "210",
        "label": "PANEER TIKKA MAKHANI ",
        "type": "Simple Product",
        "image": require("../assets/items/238_PANNER TIKKA MAKHANI পনির টিক্কা  মাখানি 39151.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "233",
        "price": "180",
        "label": "PANEER SAGWALA ",
        "type": "Simple Product",
        "image": require("../assets/items/233_PANEER SAGWALA পানির স্বাগবালা 51282.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MAIN COURSE- VEG"
    },
    {
        "id": "1282",
        "price": "30",
        "label": "MILK",
        "type": "Variable Product",
        "image": require("../assets/items/1282_65164.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MILK"
    },
    {
        "id": "1285",
        "price": "75",
        "label": "CORN FLAKES WITH MILK",
        "type": "Simple Product",
        "image": require("../assets/items/1285_52591.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MILK"
    },
    {
        "id": "542",
        "price": "450",
        "label": "MIRROR GLAZE 01 MAX DELIVERY TIME  12 HR PER Ib",
        "type": "Simple Product",
        "image": require("../assets/items/_MIRROR GLAZE 01 MAX DELIVERY TIME  12 HR PER Ib19159.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MIRROR GLAZE CAKES"
    },
    {
        "id": "543",
        "price": "250",
        "label": "MIRROR GLAZE 02 MAX DELIVERY TIME  12 HR ",
        "type": "Variable Product",
        "image": require("../assets/items/543-00-1_MIRROR GLAZE 02 MAX DELIVERY TIME  12 HR HALF  Ib  90138.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MIRROR GLAZE CAKES"
    },
    {
        "id": "544",
        "price": "250",
        "label": "MIRROR GLAZE 03 MAX DELIVERY TIME 12 HR  ",
        "type": "Variable Product",
        "image": require("../assets/items/544-00-1_MIRROR GLAZE 03 MAX DELIVERY TIME 12 HR HALF Ib 83983.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MIRROR GLAZE CAKES"
    },
    {
        "id": "1025",
        "price": "125",
        "label": "WATER MELON MOJITO ওয়াটার মেলান মোজিত ",
        "type": "Simple Product",
        "image": require("../assets/items/1025_WATER MELON MOJITO ওয়াটার মেলান মোজিত 70156.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "1291",
        "price": "140",
        "label": "LITCHI KAFFAIR LIME ",
        "type": "Simple Product",
        "image": require("../assets/items/1291_LITCHI KAFFAIR LIME 93573.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "1292",
        "price": "140",
        "label": "OREO MILKSHAKE",
        "type": "Simple Product",
        "image": require("../assets/items/1292_36820.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "1310",
        "price": "135",
        "label": "MANGO AND ORANGE SLASH",
        "type": "Simple Product",
        "image": require("../assets/items/1310_MANGO AND ORANGE SLASH15154.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "1311",
        "price": "140",
        "label": "PINEAPPLE MOJITO",
        "type": "Simple Product",
        "image": require("../assets/items/1311_PINEAPPLE MOJITO56048.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "1333",
        "price": "165",
        "label": "OCEAN BREEZE",
        "type": "Simple Product",
        "image": require("../assets/items/1333_OCEAN BREEZE55943.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "1334",
        "price": "130",
        "label": "STRAWBERRY MILKSHAKE",
        "type": "Simple Product",
        "image": require("../assets/items/1334_STRAWBERRY MILKSHAKE99994.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },

    {
        "id": "1353",
        "price": "165",
        "label": "RAINBOW HEAVEN ",
        "type": "Simple Product",
        "image": require("../assets/items/_18601.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "842",
        "price": "90",
        "label": "FRESH LIME SODA ",
        "type": "Variable Product",
        "image": require("../assets/items/842_FRESH LIME SODA 91193.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "1354",
        "price": "165",
        "label": "THE MERMAID",
        "type": "Simple Product",
        "image": require("../assets/items/_29871.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "843",
        "price": "95",
        "label": "MASALA COKE ",
        "type": "Simple Product",
        "image": require("../assets/items/843_MASALA COKE 75302.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "897",
        "price": "120",
        "label": "COLD COFFEE WITH ICE CREAM ",
        "type": "Simple Product",
        "image": require("../assets/items/897_82498.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "898",
        "price": "125",
        "label": "CHOCOLATE MILKSHAKE WITH ICE CREAM",
        "type": "Simple Product",
        "image": require("../assets/items/898_20355.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "899",
        "price": "135",
        "label": "MINT SMOOTHIE",
        "type": "Simple Product",
        "image": require("../assets/items/899_37835.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "900",
        "price": "110",
        "label": "GANDHARAJ SMOOTHIE",
        "type": "Simple Product",
        "image": require("../assets/items/900_21274.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "1163",
        "price": "110",
        "label": "COLD COFFE ",
        "type": "Simple Product",
        "image": require("../assets/items/1163_COLD COFFE 87610.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "1164",
        "price": "110",
        "label": "CHOCOLATE MILKSHAKE ",
        "type": "Simple Product",
        "image": require("../assets/items/1164_65321.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "1241",
        "price": "135",
        "label": "SPICY SUMMER PUNCH",
        "type": "Simple Product",
        "image": require("../assets/items/1241_SPICY SUMMER PUNCH22374.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "1242",
        "price": "140",
        "label": "KIWI DELIGHT",
        "type": "Simple Product",
        "image": require("../assets/items/1242_KIWI DELIGHT66291.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "1260",
        "price": "135",
        "label": "LICHU LANKAR SORBOT ",
        "type": "Simple Product",
        "image": require("../assets/items/1260_75280.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "649",
        "price": "140",
        "label": "VIRGIN MOJITO ",
        "type": "Simple Product",
        "image": require("../assets/items/649_VIRGIN MOJITO 26379.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "659",
        "price": "135",
        "label": "Blue Lagoon ",
        "type": "Simple Product",
        "image": require("../assets/items/659_Blue Lagoon 31849.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "660",
        "price": "110",
        "label": "Shahi Temple ",
        "type": "Simple Product",
        "image": require("../assets/items/660_Shahi Temple 23918.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOCKTAIL "
    },
    {
        "id": "687",
        "price": "145",
        "label": "PAN FRIED MOMO 5 PC ",
        "type": "Variable Product",
        "image": require("../assets/items/687_PAN FRIED MOMO 5 PC প্যান  ফ্রাইড মোমো ৫ পিস্ 47935.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOMO"
    },

    {
        "id": "1064",
        "price": "180",
        "label": "STIR FRY ASIAN GREEN ",
        "type": "Variable Product",
        "image": require("../assets/items/1064_STIR FRY ASIAN GREEN 97366.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL  APPETIZERS"
    },
    {
        "id": "1067",
        "price": "180",
        "label": "METHI MAKAI SEEKH",
        "type": "Simple Product",
        "image": require("../assets/items/1067_METHI MAKAI SEEKH80399.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL  APPETIZERS"
    },
    {
        "id": "1072",
        "price": "240",
        "label": "TANDOORI KHUMB",
        "type": "Simple Product",
        "image": require("../assets/items/1072_TANDOORI KHUMB67847.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL  APPETIZERS"
    },
    {
        "id": "1079",
        "price": "330",
        "label": "SUFIYANA MURG",
        "type": "Variable Product",
        "image": require("../assets/items/1079_SUFIYANI MURG42781.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL  APPETIZERS"
    },
    {
        "id": "1081",
        "price": "370",
        "label": "WONDER FISH- 4PCS",
        "type": "Simple Product",
        "image": require("../assets/items/1081_WONDER FISH- 4PCS73816.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL  APPETIZERS"
    },
    {
        "id": "1083",
        "price": "370",
        "label": "NIMBU DHANIYA MAHI TIKKA- 5 PC",
        "type": "Simple Product",
        "image": require("../assets/items/1083_NIMBU DHANIYA MAHI TIKKA- 5 PC92304.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL  APPETIZERS"
    },
    {
        "id": "1084",
        "price": "550",
        "label": "AJWAINI WHOLE TANDOORI  BHETKI",
        "type": "Simple Product",
        "image": require("../assets/items/1084_AJWAINI WHOLE TANDOORI  BHETKI28847.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL  APPETIZERS"
    },
    {
        "id": "1085",
        "price": "850",
        "label": "LASSONI WHOLE TANDOORI POMFRET",
        "type": "Simple Product",
        "image": require("../assets/items/1085_LASSONI WHOLE TANDOORI POMFRET11441.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL  APPETIZERS"
    },
    {
        "id": "1144",
        "price": "595",
        "label": "HONEY GLAZED FRESH CHILLI PRAWN ",
        "type": "Simple Product",
        "image": require("../assets/items/_27019.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL  APPETIZERS"
    },
    {
        "id": "1146",
        "price": "220",
        "label": "GRILLED MUTTON BURGER ",
        "type": "Simple Product",
        "image": require("../assets/items/_GRILLED MUTTON BURGER 87407.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL  APPETIZERS"
    },
    {
        "id": "1022",
        "price": "95",
        "label": "COUPE SCOP ",
        "type": "Simple Product",
        "image": require("../assets/items/1022_COUPE SCOP কাপ স্কুপ 12810.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "MOTHERS HUT SPECIAL  DESSERT"
    },
    {
        "id": "1117",
        "price": "175",
        "label": "CANTONESE NOODLES",
        "type": "Variable Product",
        "image": require("../assets/items/1117_CANTONESE NOODLES70593.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL ACCOMPANIMENTS"
    },
    {
        "id": "1118",
        "price": "190",
        "label": "AMERICAN CHOPSUEY",
        "type": "Variable Product",
        "image": require("../assets/items/1118_AMERICAN CHOPSUEY13002.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL ACCOMPANIMENTS"
    },
    {
        "id": "1088",
        "price": "210",
        "label": "RESHMI MAKAI HARA BHARA",
        "type": "Simple Product",
        "image": require("../assets/items/1088_RESHMI MAKAI HARA BHARA56566.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL MAIN COURSE"
    },
    {
        "id": "1092",
        "price": "210",
        "label": "METHI MATAR MALAI",
        "type": "Simple Product",
        "image": require("../assets/items/1092_METHI MATAR MALAI23190.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL MAIN COURSE"
    },
    {
        "id": "1095",
        "price": "450",
        "label": "KANKRA GHOTALA (DESHELLED)",
        "type": "Simple Product",
        "image": require("../assets/items/1095_KANKRA GHOTALA (DESHELLED)12209.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL MAIN COURSE"
    },
    {
        "id": "1098",
        "price": "370",
        "label": "GRILLED FISH WITH QUINOA",
        "type": "Simple Product",
        "image": require("../assets/items/1098_GRILLED FISH WITH QUINOA28149.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL MAIN COURSE"
    },
    {
        "id": "1100",
        "price": "390",
        "label": "FISH MUNIA WITH HERBED RICE",
        "type": "Simple Product",
        "image": require("../assets/items/1100_49447.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL MAIN COURSE"
    },
    {
        "id": "1101",
        "price": "495",
        "label": "MUTTON CHOP & KHUS KHUS SAFFRON RICE",
        "type": "Simple Product",
        "image": require("../assets/items/1101_32169.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL MAIN COURSE"
    },
    {
        "id": "1102",
        "price": "210",
        "label": "TORTELLINI VEG PASTA IN MIX SAUCE- 6PC",
        "type": "Simple Product",
        "image": require("../assets/items/1102_TORTELLINI VEG PASTA IN MIX SAUCE- 6PC31527.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "MOTHERS HUT SPECIAL MAIN COURSE"
    },
    {
        "id": "1104",
        "price": "260",
        "label": "EXOTIC VEG IN CHOICE OF YOUR SAUCE",
        "type": "Variable Product",
        "image": require("../assets/items/1104_EXOTIC VEG IN CHOICE OF YOUR SAUCE16875.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL MAIN COURSE"
    },
    {
        "id": "1107",
        "price": "290",
        "label": "SOYA BRAISED CASHEW NUT CHICKEN",
        "type": "Simple Product",
        "image": require("../assets/items/1107_SOYA BRAISED CASHEW NUT CHICKEN91689.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL MAIN COURSE"
    },
    {
        "id": "1108",
        "price": "290",
        "label": "CILANTRO CHICKEN",
        "type": "Simple Product",
        "image": require("../assets/items/1108_CILANTRO CHICKEN63612.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL MAIN COURSE"
    },
    {
        "id": "1111",
        "price": "495",
        "label": "MUTTON SPIRIT RIBS",
        "type": "Simple Product",
        "image": require("../assets/items/1111_MUTTON SPIRIT RIBS36084.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL MAIN COURSE"
    },
    {
        "id": "1112",
        "price": "495",
        "label": "GUNSOU MUTTON RIBS",
        "type": "Simple Product",
        "image": require("../assets/items/1112_GUNSOU MUTTON RIBS35045.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL MAIN COURSE"
    },
    {
        "id": "1113",
        "price": "260",
        "label": "THAI RED CURRY WITH STEAM RICE ",
        "type": "Variable Product",
        "image": require("../assets/items/1113_THAI RED CURRY WITH STEAM RICE 69991.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL MAIN COURSE"
    },
    {
        "id": "1114",
        "price": "260",
        "label": "THAI GREEN CURRY WITH STEAM RICE ",
        "type": "Variable Product",
        "image": require("../assets/items/1114_THAI GREEN CURRY WITH STEAM RICE 36323.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL MAIN COURSE"
    },
    {
        "id": "1055",
        "price": "180",
        "label": "ENGLISH  SALAD IN SAFFRON DRESSING",
        "type": "Variable Product",
        "image": require("../assets/items/1055_ENGLISH  SALAD IN SAFFRON DRESSING76007.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL SALAD"
    },
    {
        "id": "1057",
        "price": "240",
        "label": "MIXED LETTUCE SALAD ",
        "type": "Simple Product",
        "image": require("../assets/items/1057_92005.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "MOTHERS HUT SPECIAL SALAD"
    },
    {
        "id": "1058",
        "price": "150",
        "label": "MULLIGATAWNY SOUP ",
        "type": "Simple Product",
        "image": require("../assets/items/1058_MULLIGATAWNY SOUP 53940.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL SOUP"
    },
    {
        "id": "1059",
        "price": "90",
        "label": "CREAM OF SPINACH SOUP",
        "type": "Variable Product",
        "image": require("../assets/items/1059_CREAM OF SPINACH SOUP36978.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL SOUP"
    },
    {
        "id": "1060",
        "price": "90",
        "label": "LEMON CORIANDER  SOUP ",
        "type": "Variable Product",
        "image": require("../assets/items/1060_LEMON CORIANDER  SOUP 17973.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL SOUP"
    },
    {
        "id": "1061",
        "price": "90",
        "label": "SWEET CORN SOUP ",
        "type": "Variable Product",
        "image": require("../assets/items/1061_SWEET CORN SOUP 56204.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL SOUP"
    },
    {
        "id": "1142",
        "price": "150",
        "label": "TOM KHA SOUP ",
        "type": "Variable Product",
        "image": require("../assets/items/1142_90572.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL SOUP"
    },
    {
        "id": "1024",
        "price": "95",
        "label": "WATER MELON CHILL BLAST  ওয়াটার মেলান চিল ব্লাস্ট ",
        "type": "Simple Product",
        "image": require("../assets/items/1024_WATER MELON CHILL BLAST  ওয়াটার মেলান চিল ব্লাস্ট 50904.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "1051",
        "price": "130",
        "label": "BROWNIE WITH ICE CREAM AND HOT CHOCOLATE",
        "type": "Simple Product",
        "image": require("../assets/items/_BROWNIE WITH ICE CREAM AND HOT CHOCOLATE28655.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "917",
        "price": "185",
        "label": "MOTHERS HUT SPECIAL FRIED RICE মাদার্স হাট স্পেশাল  ফ্রাইড রাইস",
        "type": "Variable Product",
        "image": require("../assets/items/917_MOTHERS HUT SPECIAL VEG FRIED RICE মাদার্স হাট স্পেশাল ভেজ ফ্রাইড রাইস76857.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "919",
        "price": "30",
        "label": "NOLEN GURER PASTRY নলেন গুড়ের প্যাস্ট্রি",
        "type": "Simple Product",
        "image": require("../assets/items/_NOLEN GURER PESTRY নোলেন গুরের  প্যাস্ট্রি 19885.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "921",
        "price": "80",
        "label": "FRENCH FRIES ফ্রেঞ্চ ফ্রাইস",
        "type": "Simple Product",
        "image": require("../assets/items/_FRENCH FRIES18192.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "926",
        "price": "220",
        "label": "BEMISAL HARA BHARA বেমিসাল হারা ভারা ",
        "type": "Simple Product",
        "image": require("../assets/items/_BEMISAL HARA BHARA85510.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "927",
        "price": "280",
        "label": "CHEESE PANEER MISAL  চিজি পনির মিশাল ",
        "type": "Simple Product",
        "image": require("../assets/items/_CHEESE PANNER MISAL22446.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "930",
        "price": "180",
        "label": "SIZZLING CHOCOLATE BROWNIE WITH VANILLA SCOOP সিজলিং চকলেট ব্রাউনি উইথ ভ্যানিলা স্কুপ ",
        "type": "Simple Product",
        "image": require("../assets/items/_SIZZLING CHOCOLATE BROWNIE WITH VANILLA SCOOP50084.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "945",
        "price": "295",
        "label": "PESHWARI CHICKEN KEBAB পেশোয়ারী চিকেন কাবাব ",
        "type": "Simple Product",
        "image": require("../assets/items/_PESHWARI CHICKEN KEBAB61163.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "947",
        "price": "295",
        "label": "CHELO KEBAB (IN PLATTER)  চেলো কাবাব (ইন  প্লাটার ) ",
        "type": "Variable Product",
        "image": require("../assets/items/_CHELO KEBAB (IN PLATTER)93487.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "948",
        "price": "315",
        "label": "CHELO KEBAB (SIZZLER) চেলো কাবাব (ইন  সিজলার)",
        "type": "Variable Product",
        "image": require("../assets/items/_CHELO KEBAB (SIZZLER)93514.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "951",
        "price": "360",
        "label": "BUTTER VOLCANO CHICKEN বাটার ভলকানো চিকেন ",
        "type": "Variable Product",
        "image": require("../assets/items/_BUTTER VOLCANO CHICKEN 67981.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "953",
        "price": "80",
        "label": "CHEESE CHILLI GARLIC TOAST চিজি চিলি গার্লিক টোস্ট ",
        "type": "Simple Product",
        "image": require("../assets/items/953_CHEESE CHILLI GARLIC TOAST25154.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "954",
        "price": "205",
        "label": "CRISPY HONEY MUSHROOM  ক্রিস্পি হানি মাশরুম",
        "type": "Simple Product",
        "image": require("../assets/items/_CRISPY HONEY MUSHROOM 20761.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "956",
        "price": "150",
        "label": "HOT CHOCO LAVA WITH VANILLA SCOOP হট চোকো লাভা উইথ ভ্যানিলা স্কুপ ",
        "type": "Simple Product",
        "image": require("../assets/items/_HOT CHOCO LAVA WITH VANILLA SCOOP49560.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "1006",
        "price": "340",
        "label": "CHICKEN  DEEP DISH PIZZA  চিকেন ডিপ ডিশ পিজ্জা  ",
        "type": "Simple Product",
        "image": require("../assets/items/1006_CHICKEN  DEEP DISH PIZZA 17746.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "1007",
        "price": "220",
        "label": "PENNE PASTA ARRABIATA পেনে পাস্তা আরাবিয়াত ",
        "type": "Variable Product",
        "image": require("../assets/items/_PENNE PASTA ARRABBIATA32285.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "1009",
        "price": "350",
        "label": "RANGOLI ICE CREAM CAKE",
        "type": "Simple Product",
        "image": require("../assets/items/_RANGOLI ICE CREAM72672.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "1010",
        "price": "390",
        "label": "TUTTI FRUTTI SUNDAE",
        "type": "Simple Product",
        "image": require("../assets/items/_TURTTI FRUTTI SUNDAE96360.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "1020",
        "price": "30",
        "label": "PAAKA AAMER PASTRY",
        "type": "Simple Product",
        "image": require("../assets/items/1020_PAAKA AAMER PASTRY23881.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "MOTHERS HUT SPECIAL মাদার্স হাট স্পেশাল"
    },
    {
        "id": "771",
        "price": "75",
        "label": "MACHER PATURIR CUTLET 1 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/771_BHETKI PATURIR CUTLET 1 PC ভেটকি পাতুরির কাটলেট ১ পিস97471.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1052",
        "price": "550",
        "label": "AAM TEL DIYE BHETKI SEKA 1 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/1052_AAM TEL DIYE BHETKI SNEKA 1 PC 31928.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1053",
        "price": "850",
        "label": "JOYAN MOURI POMFRET SEKA 1 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/1053_JOYAN MOURI POMFRET SNEKA 1 PC26597.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1312",
        "price": "145",
        "label": "FISH STICKS",
        "type": "Simple Product",
        "image": require("../assets/items/_25797.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1317",
        "price": "70",
        "label": "FISH CUTLET",
        "type": "Simple Product",
        "image": require("../assets/items/_42557.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1074",
        "price": "330",
        "label": "HARISSA CHICKEN SKEWER- 6 SKEWERS",
        "type": "Simple Product",
        "image": require("../assets/items/1074_HARISHA CHICKEN SKEWER- 5 SKEWERS22426.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1075",
        "price": "330",
        "label": "FRY LASAGNE - 4 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/1075_FRY LASAGNE - 4 PCS40549.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1077",
        "price": "330",
        "label": "CHICKEN THAI ROLL ",
        "type": "Simple Product",
        "image": require("../assets/items/1077_CHICKEN THAI ROLL 33435.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1080",
        "price": "330",
        "label": "THAI CHICKEN TIKKA",
        "type": "Simple Product",
        "image": require("../assets/items/1080_THAI CHICKEN TIKKA93350.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1082",
        "price": "370",
        "label": "FISH IN CHILLI ORANGE SAUCE ",
        "type": "Variable Product",
        "image": require("../assets/items/1082_FISH IN CHILLI ORANGE SAUCE 43459.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1099",
        "price": "350",
        "label": "GRILLED CHICKEN WITH HERBED RICE",
        "type": "Simple Product",
        "image": require("../assets/items/1099_25074.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1358",
        "price": "210",
        "label": "BHETKI FRY",
        "type": "Simple Product",
        "image": require("../assets/items/_49066.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "858",
        "price": "70",
        "label": "FISH FRY 1 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/_BHETKI CUTLET 1 PC ভেটকি কাটলেট ১ পিস্94547.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1129",
        "price": "360",
        "label": "MURGHI MAKHAN MALAI",
        "type": "Simple Product",
        "image": require("../assets/items/1129_MURGHI MAKHAN MALAI60957.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1143",
        "price": "495",
        "label": "CHILLI CRAB (CHINESE)",
        "type": "Simple Product",
        "image": require("../assets/items/1143_78418.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1145",
        "price": "360",
        "label": "MUTTON SEEKH KEBAB- 6 PC",
        "type": "Simple Product",
        "image": require("../assets/items/_98605.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "946",
        "price": "275",
        "label": "CHICKEN SIKH KEBAB ",
        "type": "Simple Product",
        "image": require("../assets/items/_SIKH KEBAB 56621.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "952",
        "price": "390",
        "label": "ALA KIEV  ",
        "type": "Simple Product",
        "image": require("../assets/items/952_ALA KIEV 41104.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "1005",
        "price": "295",
        "label": "CHICKEN STEAK ",
        "type": "Variable Product",
        "image": require("../assets/items/_CHICKEN-STEAK54616.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "756",
        "price": "200",
        "label": "CHICKEN B-B-Q WINGS 8 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/_CHICKEN B-B-Q WINGS 8 PC চিকেন বি-বি-কিউ  উইংস ৮ পিস্ 37265.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "217",
        "price": "105",
        "label": "CRISPY CHICKEN DRUM STICK WITH DIP ",
        "type": "Variable Product",
        "image": require("../assets/items/217_CRISPY CHICKEN DRUM STICK WITH DIP ক্রিস্পি চিকেন ড্রাম স্টিক সঙ্গে ডিপ 91533.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "218",
        "price": "135",
        "label": " FIERY WINGS WITH DIP ",
        "type": "Variable Product",
        "image": require("../assets/items/218_ FIERY WINGS WITH DIP ফ্রাইরি  উইংস উইথ ডিপ 93535.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "278",
        "price": "130",
        "label": "CHUTNEY FISH FINGER ",
        "type": "Variable Product",
        "image": require("../assets/items/278_CHUTNEY FISH FINGER চাটনি ফিস ফিঙ্গার75799.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "279",
        "price": "125",
        "label": "Chicken Lollypop ",
        "type": "Variable Product",
        "image": require("../assets/items/279_Chicken Lollypop চিকেন ললিপপ 97581.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "285",
        "price": "65",
        "label": "NONVEG SPRING ROLL ",
        "type": "Variable Product",
        "image": require("../assets/items/285_NONVEG SPRING ROLL  ননভেজ স্প্রিং  রোল28503.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "300",
        "price": "155",
        "label": "CHILLI FISH ",
        "type": "Simple Product",
        "image": require("../assets/items/300_Chilli Fish চিলি ফিস83570.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "229",
        "price": "280",
        "label": "TANDOORI FISH TIKKA 5 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/229_TANDOORI FISH TIKKA 5 PC তন্দুরি  ফিস  টিক্কা ৫ পিস 26964.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "230",
        "price": "195",
        "label": "TANDOORI CHICKEN ",
        "type": "Variable Product",
        "image": require("../assets/items/230_chicken 76119.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "395",
        "price": "240",
        "label": "CHICKEN TIKKA 6 PCS  ",
        "type": "Simple Product",
        "image": require("../assets/items/395_CHICKEN TIKKA 6 PCS  চিকেন টিক্কা ৬ পিস 20229.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "397",
        "price": "275",
        "label": "MALAI  TIKKA 6 PCS  ",
        "type": "Simple Product",
        "image": require("../assets/items/397_MALAI  TIKKA 6 PCS  মালাই টিক্কা ৬ পিস 46599.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "398",
        "price": "240",
        "label": "ACHARI  TIKKA 6 PCS ",
        "type": "Simple Product",
        "image": require("../assets/items/398_ACHARI  TIKKA 6 PCS আচারি টিক্কা ৬ পিস 43961.jpg"),
        "showItem": true,
        "itemUnavailable": true,
        "catagory": "NON VEG STARTER"
    },
    {
        "id": "164",
        "price": "95",
        "label": "Veg Hakka Noodlees ",
        "type": "Simple Product",
        "image": require("../assets/items/164_Veg Hakka Noodlees ভেজ হাক্কা নুডলস43943.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NOODLES"
    },
    {
        "id": "165",
        "price": "130",
        "label": "EGG CHICKEN HAKKA NOODLES",
        "type": "Simple Product",
        "image": require("../assets/items/165_EGG CHICKEN HAKKA NOODLES এগ চিকেন হাক্কা  নুডুলস 19922.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NOODLES"
    },
    {
        "id": "601",
        "price": "165",
        "label": "MIXED HAKKA NOODLES",
        "type": "Simple Product",
        "image": require("../assets/items/601_MIXED HAKKA NOODLES মিক্সড হক্ক নুডুলস 57235.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "NOODLES"
    },
    {
        "id": "1103",
        "price": "260",
        "label": "SPAGHETTI OLIO ",
        "type": "Simple Product",
        "image": require("../assets/items/1103_90504.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PASTA "
    },
    {
        "id": "1154",
        "price": "220",
        "label": "PENNE PASTA IN RED SAUCE",
        "type": "Variable Product",
        "image": require("../assets/items/1154_PENNE PASTA IN RED SAUCE35363.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PASTA "
    },
    {
        "id": "1008",
        "price": "220",
        "label": "PENNE PASTA IN WHITE SAUCE ",
        "type": "Variable Product",
        "image": require("../assets/items/_PENNE PASTA IN WHITE SAUCE  11300.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PASTA "
    },
    {
        "id": "924",
        "price": "600",
        "label": "CHICKEN KEBAB PIZZA ",
        "type": "Variable Product",
        "image": require("../assets/items/_CHICKEN KEBAB PIZZA99251.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PIZZA- NON VEG "
    },
    {
        "id": "950",
        "price": "300",
        "label": "CROWN CHICKEN PIZZA",
        "type": "Simple Product",
        "image": require("../assets/items/_CROWN CHICKEN PIZZA80586.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PIZZA- NON VEG "
    },
    {
        "id": "109",
        "price": "210",
        "label": "Kurchan Chicken Tikka Pizza  ",
        "type": "Variable Product",
        "image": require("../assets/items/109_Kurchan Chicken Tikka Pizza  কুরচান চিকেন টিক্কা পিজ্জা 57712.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PIZZA- NON VEG "
    },
    {
        "id": "110",
        "price": "220",
        "label": "Malai Gravy Chicken Tikka Pizza  ",
        "type": "Variable Product",
        "image": require("../assets/items/110-00-1_মালাই গ্রেভী চিকেন টিক্কা পিজ্জা মিডিয়াম সাইজ খাঁটি মোজারেল্লা চীজ89248.png"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PIZZA- NON VEG "
    },
    {
        "id": "111",
        "price": "205",
        "label": "Spicy Achari Chicken Pizza ",
        "type": "Variable Product",
        "image": require("../assets/items/111_Spicy Achari Chicken Pizza স্পাইসি আচারি চিকেন পিজ্জা 78093.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PIZZA- NON VEG "
    },
    {
        "id": "586",
        "price": "220",
        "label": "SAUCY CHICKEN CHILLI PIZZA ",
        "type": "Variable Product",
        "image": require("../assets/items/586_SAUCY CHICKEN CHILLI PIZZA সসি চিকেন চিলি  পিজ্জা 43957.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PIZZA- NON VEG "
    },
    {
        "id": "587",
        "price": "205",
        "label": "ROASTED MASALA CHICKEN PIZZA ",
        "type": "Variable Product",
        "image": require("../assets/items/587_ROASTED MASALA CHICKEN PIZZA রোস্টেড মশালা চিকেন পিজ্জা 17772.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PIZZA- NON VEG "
    },
    {
        "id": "632",
        "price": "230",
        "label": "BBQ CHICKEN PIZZA  ",
        "type": "Variable Product",
        "image": require("../assets/items/632_BBQ CHICKEN PIZZA  বি বি কিউ  চিকেন পিজ্জা 89173.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PIZZA- NON VEG "
    },
    {
        "id": "96",
        "price": "140",
        "label": "Simply Veg Onion Pizza",
        "type": "Variable Product",
        "image": require("../assets/items/96_Simply Veg Onion Pizza সিম্পলি ভেজ ওনিয়ন পিজ্জা79413.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PIZZA-VEG "
    },
    {
        "id": "104",
        "price": "170",
        "label": "Shahi Indian Pizza ",
        "type": "Variable Product",
        "image": require("../assets/items/104_Shahi Indian Pizza শাহী ইণ্ডিয়ান পিজ্জা 98433.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PIZZA-VEG "
    },
    {
        "id": "106",
        "price": "195",
        "label": "Malai Gravy Paneer Pizza ",
        "type": "Variable Product",
        "image": require("../assets/items/106_Malai Gravy Paneer Pizza মালাই গ্রেভী পনির পিজ্জা90529.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PIZZA-VEG "
    },
    {
        "id": "629",
        "price": "195",
        "label": "TANDOORI PANEER PIZZA ",
        "type": "Variable Product",
        "image": require("../assets/items/629_TANDOORI PANEER PIZZA তন্দুরী পনির পিজ্জা98848.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "PIZZA-VEG "
    },
    {
        "id": "173",
        "price": "50",
        "label": "BUNDI RAITA ",
        "type": "Variable Product",
        "image": require("../assets/items/173_BUNDI RAITA বুন্দি রায়তা19999.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RAITA & PAPAD"
    },
    {
        "id": "175",
        "price": "55",
        "label": "MIX RAITA ",
        "type": "Variable Product",
        "image": require("../assets/items/175_MIX RAITA মিক্স রায়তা38493.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RAITA & PAPAD"
    },
    {
        "id": "176",
        "price": "20",
        "label": "ROASTED PAPAD- 2PC ",
        "type": "Simple Product",
        "image": require("../assets/items/176_ROASTED PAPAD- 2PC রোস্টেড পাপড় - ২ পিস্83604.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RAITA & PAPAD"
    },
    {
        "id": "623",
        "price": "15",
        "label": "CHUTNEY",
        "type": "Simple Product",
        "image": require("../assets/items/623_চাটনি 92873.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RAITA & PAPAD"
    },
    {
        "id": "622",
        "price": "5",
        "label": "PAPAD",
        "type": "Simple Product",
        "image": require("../assets/items/622_পাঁপড় 71957.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RAITA & PAPAD"
    },
    {
        "id": "308",
        "price": "120",
        "label": "Thakur Barir Holud Polao 125 gm ",
        "type": "Simple Product",
        "image": require("../assets/items/308_Thakur Barir Holud Polao 125 gm ঠাকুর বাড়ির হলুদ পোলাও ১২৫ গ্রাম25077.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE"
    },
    {
        "id": "160",
        "price": "105",
        "label": "CHINEESE FRIED RICE (SALTY TASTE)",
        "type": "Simple Product",
        "image": require("../assets/items/160_Veg Fried Rice কুইক মিল ভেজ ফ্রাইড রাইস42104.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE"
    },
    {
        "id": "161",
        "price": "110",
        "label": "Egg Fried Rice ",
        "type": "Simple Product",
        "image": require("../assets/items/161_Egg Fried Rice 54015.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE"
    },
    {
        "id": "166",
        "price": "140",
        "label": "Chicken Fried Rice ",
        "type": "Simple Product",
        "image": require("../assets/items/166_Chicken Fried Rice কুইক মিল চিকেন ফ্রাইড রাইস33655.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE"
    },
    {
        "id": "578",
        "price": "180",
        "label": "MIXED FRIED RICE ",
        "type": "Simple Product",
        "image": require("../assets/items/578_MIXED FRIED RICE মিক্সড ফ্রায়েড রাইস 88571.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE"
    },
    {
        "id": "200",
        "price": "65",
        "label": "PLAIN RICE 125 Gm ",
        "type": "Simple Product",
        "image": require("../assets/items/200_PLAIN RICE 125 Gm প্লেন রাইস ১২৫ গ্রাম55061.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE"
    },
    {
        "id": "251",
        "price": "95",
        "label": "ZEERA RICE  ",
        "type": "Simple Product",
        "image": require("../assets/items/251_ZEERA32231.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE"
    },
    {
        "id": "252",
        "price": "100",
        "label": "PEAS PULAO",
        "type": "Simple Product",
        "image": require("../assets/items/252_PEAS 66359.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE"
    },
    {
        "id": "255",
        "price": "135",
        "label": "VEG PULAO / BIYE BARIR GHI KAJU KISMIS DIYE MISTI FRIED RICE",
        "type": "Simple Product",
        "image": require("../assets/items/255_VEG 51529.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE"
    },
    {
        "id": "1139",
        "price": "95",
        "label": "CHANA PORA RUTI",
        "type": "Simple Product",
        "image": require("../assets/items/1139_CHANA PORA RUTI99010.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE AND RUTI"
    },
    {
        "id": "974",
        "price": "35",
        "label": "GHEE LANKA RUTI",
        "type": "Simple Product",
        "image": require("../assets/items/_GHEE LANKA RUTI72831.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE AND RUTI"
    },
    {
        "id": "975",
        "price": "35",
        "label": "GHEE DIYE LEBU LONKA RUTI 1 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/_LEBU LONKA RUTI37658.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE AND RUTI"
    },
    {
        "id": "976",
        "price": "35",
        "label": "GHEE DIYE ROSUN LONKA RUTI 1 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/_ROSUN LONKA RUTI34172.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE AND RUTI"
    },
    {
        "id": "977",
        "price": "45",
        "label": "GHEE LANKA NAAN 1 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/_GHEE LANKA NAAN13908.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE AND RUTI"
    },
    {
        "id": "978",
        "price": "45",
        "label": "GHEE DIYE LEBU LONKA NAAN1 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/_LEBU LONKA NAAN61198.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE AND RUTI"
    },
    {
        "id": "979",
        "price": "45",
        "label": "GHEE DIYE ROSUN LONKA NAAN1 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/_ROSUN LONKA NAAN33140.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE AND RUTI"
    },
    {
        "id": "980",
        "price": "140",
        "label": "KANCHA LANKA AAMSOTTO POLAO",
        "type": "Simple Product",
        "image": require("../assets/items/_KANCHA LANKA AAMSOTTO POLAO78652.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE AND RUTI"
    },
    {
        "id": "981",
        "price": "200",
        "label": "CHINGRI MORICH POLAO",
        "type": "Simple Product",
        "image": require("../assets/items/_CHINGRI MORICH POLAO71351.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE AND RUTI"
    },
    {
        "id": "982",
        "price": "160",
        "label": "DHONEPATA MURGI POLAO",
        "type": "Simple Product",
        "image": require("../assets/items/_DHONEPATA MURGI POLAO30510.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE AND RUTI"
    },
    {
        "id": "1015",
        "price": "85",
        "label": "PLAIN RICE ",
        "type": "Simple Product",
        "image": require("../assets/items/_PLAIN RICE 61392.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE AND RUTI"
    },
    {
        "id": "1016",
        "price": "80",
        "label": "GHIYE BHAJA TEKONA PAROTHA 2 PCS ",
        "type": "Simple Product",
        "image": require("../assets/items/1016_GHIYE BHAJA TEKONA PAROTHA 2 PCS 10970.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "RICE AND RUTI"
    },
    {
        "id": "844",
        "price": "60",
        "label": "LACCHA DOUBLE EGG ROLL ",
        "type": "Simple Product",
        "image": require("../assets/items/_LACHCHA DOUBLE EGG ROLL 72590.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ROLL "
    },
    {
        "id": "845",
        "price": "85",
        "label": "LACCHA EGG CHICKEN ROLL",
        "type": "Simple Product",
        "image": require("../assets/items/_LACCHA EGG CHICKEN ROLL71364.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ROLL "
    },
    {
        "id": "269",
        "price": "70",
        "label": "LACCHA PANEER TIKKA ROLL ",
        "type": "Simple Product",
        "image": require("../assets/items/269_LACHCHA PANEER TIKKA ROLL লাচ্ছা  পনির টিক্কা রোল 97662.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ROLL "
    },
    {
        "id": "291",
        "price": "75",
        "label": "LACCHA TANDOORI MURG TIKKA ROLL",
        "type": "Simple Product",
        "image": require("../assets/items/291_Tatndoori Murg Tikka wrap তন্ডুরী মুর্গ টিক্কা রোল52835.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "ROLL "
    },
    {
        "id": "1056",
        "price": "90",
        "label": "CUCUMBER AND ONION WITH TANGY DRESSING ",
        "type": "Simple Product",
        "image": require("../assets/items/1056_CUCUMBER AND ONION WITH TANGY DRESSING 68731.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SALAD"
    },
    {
        "id": "1153",
        "price": "45",
        "label": "ONION SALAD ",
        "type": "Simple Product",
        "image": require("../assets/items/_ONION SALAD 91541.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SALAD"
    },
    {
        "id": "177",
        "price": "45",
        "label": "GREEN SALAD গ্রীন স্যালাড ",
        "type": "Simple Product",
        "image": require("../assets/items/177_GREEN SALAD গ্রীন স্যালাড 27275.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SALAD"
    },
    {
        "id": "1286",
        "price": "40",
        "label": "TOAST BREAD AND BUTTER ",
        "type": "Simple Product",
        "image": require("../assets/items/1286_14572.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SANDWICH"
    },
    {
        "id": "726",
        "price": "50",
        "label": "GRILLED CHEESY AMERICAN CORN SANDWICH ",
        "type": "Simple Product",
        "image": require("../assets/items/726_GRILLED CHEESY AMERICAN CORN SANDWICH  গ্রীলড  চিজী আমেরিকান কর্ণ স্যান্ডউইচ   14440.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SANDWICH"
    },
    {
        "id": "727",
        "price": "65",
        "label": "CHEESY AMERICAN CORN CLUB  SANDWICH ",
        "type": "Simple Product",
        "image": require("../assets/items/_CHEESY AMERICAN CORN CLUB  SANDWICH  চিজী আমেরিকান কর্ণ ক্লাব  স্যান্ডউইচ  64669.bmp"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SANDWICH"
    },
    {
        "id": "728",
        "price": "75",
        "label": "GRILLED CHEESY AMERICAN CORN CLUB  SANDWICH  ",
        "type": "Simple Product",
        "image": require("../assets/items/_GRILLED CHEESY AMERICAN CORN CLUB  SANDWICH  গ্রীলড  চিজী আমেরিকান কর্ণ ক্লাব স্যান্ডউইচ    40505.bmp"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SANDWICH"
    },
    {
        "id": "729",
        "price": "50",
        "label": "TANDOORI CHICKEN SANDWICH",
        "type": "Simple Product",
        "image": require("../assets/items/729_TANDOORI CHICKEN SANDWICH তান্দুরি চিকেন স্যান্ডউইচ   33856.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SANDWICH"
    },
    {
        "id": "730",
        "price": "60",
        "label": "GRILLED TANDOORI CHICKEN SANDWICH ",
        "type": "Simple Product",
        "image": require("../assets/items/730_GRILLED TANDOORI CHICKEN SANDWICH গ্রীলড তান্দুরি চিকেন স্যান্ডউইচ   70553.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SANDWICH"
    },
    {
        "id": "731",
        "price": "85",
        "label": "TANDOORI CHICKEN CLUB  SANDWICH  ",
        "type": "Simple Product",
        "image": require("../assets/items/731_TANDOORI CHICKEN CLUB  SANDWICH  তান্দুরি চিকেন ক্লাব  স্যান্ডউইচ   79248.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SANDWICH"
    },
    {
        "id": "732",
        "price": "95",
        "label": "GRILLED TANDOORI CHICKEN CLUB SANDWICH ",
        "type": "Simple Product",
        "image": require("../assets/items/732_GRILLED TANDOORI CHICKEN CLUB SANDWICH গ্রীলড তান্দুরি চিকেন ক্লাব স্যান্ডউইচ 93125.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SANDWICH"
    },
    {
        "id": "598",
        "price": "40",
        "label": "CLEAR SOUP ",
        "type": "Variable Product",
        "image": require("../assets/items/598_CLEAR SOUP ক্লিয়ার স্যুপ79988.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SOUP"
    },
    {
        "id": "599",
        "price": "80",
        "label": "HOT N SOUR SOUP ",
        "type": "Variable Product",
        "image": require("../assets/items/599_HOT N SOUR SOUP হট এন্ড শ্যাওয়ার স্যুপ37792.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SOUP"
    },
    {
        "id": "600",
        "price": "85",
        "label": "MANCHOW SOUP",
        "type": "Variable Product",
        "image": require("../assets/items/600_MANCHOW SOUP মনচাও স্যুপ90187.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SOUP"
    },
    {
        "id": "1033",
        "price": "585",
        "label": "BONLESS ILISH CUTLET ",
        "type": "Simple Product",
        "image": require("../assets/items/_BONLESS ILISH CUTLET 59546.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "1123",
        "price": "180",
        "label": "KURKURE ALOO (LANKA & JOWAN)",
        "type": "Simple Product",
        "image": require("../assets/items/1123_43260.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "1124",
        "price": "510",
        "label": "CHINGRI-R ACHAARI FRY",
        "type": "Simple Product",
        "image": require("../assets/items/1124_CHINGRI-R ACHAARI FRY12218.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "1125",
        "price": "400",
        "label": "KANKRA CHINGRI BHAPA",
        "type": "Simple Product",
        "image": require("../assets/items/1125_KANKRA CHINGRI BHAPA11760.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "1126",
        "price": "360",
        "label": "AAMER ACHAR MURGI CHAAT",
        "type": "Simple Product",
        "image": require("../assets/items/1126_AAMER ACHAR MURGI CHAAT36738.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "1127",
        "price": "360",
        "label": "NIMBOO CHICKEN SEEKH",
        "type": "Simple Product",
        "image": require("../assets/items/1127_NIMBOO CHICKEN SEEKH25521.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "1128",
        "price": "310",
        "label": "CHITTAGAON MACHER TIKKA",
        "type": "Simple Product",
        "image": require("../assets/items/1128_CHITTAGAON MACHER TIKKA54367.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "960",
        "price": "210",
        "label": "CHANA KARAISUTIR CHOP 6 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/_CHANA KARAISUTIR CHOP71750.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "961",
        "price": "150",
        "label": "JHAAL BEGUN FRY",
        "type": "Simple Product",
        "image": require("../assets/items/961_JHAAL BEGUN FRY91116.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "962",
        "price": "210",
        "label": "MOCHAR CHOP 6 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/962_MOCHAR CHOP64823.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "963",
        "price": "330",
        "label": "CHINGRI CUTLET 2 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/963_CHINGRI CUTLET82645.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "965",
        "price": "260",
        "label": "CURRY PATA FISH FRY 2 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/965_CURRY PATA FISH FRY56387.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "967",
        "price": "375",
        "label": "JEERA MORICH MANGSHO BHUNA",
        "type": "Simple Product",
        "image": require("../assets/items/_JEERA MORICH MANGSHO BHUNA74929.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "968",
        "price": "280",
        "label": "MURGIR POTLI BHAPA KEBAB 4 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/_MURGIR POTLI BHAPA KEBAB64558.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "969",
        "price": "280",
        "label": "PANCH PHORON DIYE MURGI FRY 6 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/_PANCH PHORON DIYE MURGI FRY44097.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "1276",
        "price": "585",
        "label": "ELISH FINGER",
        "type": "Simple Product",
        "image": require("../assets/items/_59628.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "966",
        "price": "260",
        "label": "DHONE PATA SHORSHE DIYE MACHER ELOJHELO",
        "type": "Simple Product",
        "image": require("../assets/items/966_DHONE PATA SHORSHE DIYE MACHER ELOJHELO30421.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "STARTER"
    },
    {
        "id": "1049",
        "price": "25",
        "label": "KHIR SANDESH 1 PC ",
        "type": "Simple Product",
        "image": require("../assets/items/_SANDESH22507.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SWEETS"
    },
    {
        "id": "833",
        "price": "30",
        "label": "AAM DOI আম দই ",
        "type": "Variable Product",
        "image": require("../assets/items/_AAM DOI আম দই 55808.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SWEETS"
    },
    {
        "id": "887",
        "price": "10",
        "label": "RASGULLA রসগোল্লা",
        "type": "Simple Product",
        "image": require("../assets/items/887_33572.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SWEETS"
    },
    {
        "id": "888",
        "price": "15",
        "label": "GULAB JAMUN গুলাব  জামুন ",
        "type": "Simple Product",
        "image": require("../assets/items/888_94697.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SWEETS"
    },
    {
        "id": "890",
        "price": "40",
        "label": "RASMALAI  রসমালাই ",
        "type": "Simple Product",
        "image": require("../assets/items/890_30391.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SWEETS"
    },
    {
        "id": "891",
        "price": "12",
        "label": "KALA JAMUN ",
        "type": "Simple Product",
        "image": require("../assets/items/891_85167.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SWEETS"
    },
    {
        "id": "905",
        "price": "50",
        "label": "GAJAR KA HALWA গাজরের হালুয়া",
        "type": "Simple Product",
        "image": require("../assets/items/_GAJAR KA HALWA গাজরের হালুয়া51183.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SWEETS"
    },
    {
        "id": "1261",
        "price": "40",
        "label": "PAAN CUSTARD",
        "type": "Simple Product",
        "image": require("../assets/items/1261_79218.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "SWEETS"
    },
    {
        "id": "764",
        "price": "35",
        "label": "COFFEE ",
        "type": "Variable Product",
        "image": require("../assets/items/_COFFEE কফি 38126.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "TEA"
    },
    {
        "id": "500",
        "price": "35",
        "label": "JAFFRAN CHAI ",
        "type": "Variable Product",
        "image": require("../assets/items/500_Jaffran Chai জাফরানি  চা 86102.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "TEA"
    },
    {
        "id": "501",
        "price": "15",
        "label": "MASALA CHAI",
        "type": "Variable Product",
        "image": require("../assets/items/501_Masala Chai মশলা  চা 49254.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "TEA"
    },
    {
        "id": "1297",
        "price": "465",
        "label": "MAYER BARIR ADORER BHOJ",
        "type": "Variable Product",
        "image": require("../assets/items/_80648.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "THALI"
    },
    {
        "id": "1298",
        "price": "250",
        "label": "Padmapatar Bhoj",
        "type": "Variable Product",
        "image": require("../assets/items/_42852.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "THALI"
    },
    {
        "id": "789",
        "price": "85",
        "label": "4 PC KARAISHUTIR KOCHURI WITH ALUR TARKARI",
        "type": "Simple Product",
        "image": require("../assets/items/789_4 PC KARAISHUTIR KOCHURI WITH ALUR DUM ৪ পিস্  কড়াই শুঁটির কচুরি সাথে আলুর দম 55256.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "THALI"
    },
    {
        "id": "791",
        "price": "150",
        "label": "MAYER BARIR NIRAMISH  BHOJ মায়ের বাড়ির নিরামিষ ভোজ  বাসমতি চালের ভাত,ভাজা মুগের ডাল,ঝুড়ি আলু ভাজা,মাদার্স  ভিলেজের যে কোনো একটি তরকারি ,চাটনি,পাঁপড় সাথে ১ পিস্  সন্দেশ",
        "type": "Simple Product",
        "image": require("../assets/items/791_MAYER BARIR NIRAMISH  BHOJ 22882.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "THALI"
    },
    {
        "id": "792",
        "price": "155",
        "label": "MAYER BARIR AMISH BHOJ  মায়ের বাড়ির আমিষ  ভোজ বাসমতি  চালের ভাত, ভাজা মুগের ডাল, ঝুড়ি আলু ভাজা, মাদার্স  ভিলেজের যে কোনো একটি তরকারি,  চাটনি, পাঁপড় সাথে ১ পিস্ সন্দেশ",
        "type": "Variable Product",
        "image": require("../assets/items/792_MAYER BARIR AMISH BHOJ 59775.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "THALI"
    },
    {
        "id": "823",
        "price": "50",
        "label": "4 PC LUCHI WITH ALOOR DUM OR TARKARI",
        "type": "Simple Product",
        "image": require("../assets/items/823_4 PC LUCHI WITH ALOOR DUM ৪ পিস্ লুচি সাথে আলুর দম 17738.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "THALI"
    },
    {
        "id": "827",
        "price": "160",
        "label": "MAYER BARIR NIRAMISH MOHA BHOJ মায়ের বাড়ির নিরামিষ মহা ভোজ - বাসমতি চালের ভাত , ডাল, আলু ভাজা,  ২ রকমের সব্জি সাথে স্যালাড, চাটনি, পাঁপড় ও দই সাথে ১ পিস্ সন্দেশ",
        "type": "Simple Product",
        "image": require("../assets/items/_MAYER BARIR NIRAMISH MOHA BHOJ মায়ের বাড়ির নিরামিষ মহা ভোজ - বাঁশকাঠি চালের ভাত 98084 ডাল98084 ২ রকমের সব্জি সাথে স্যালাড98084 চাটনি98084 পাঁপড় ও দই 38507.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "THALI"
    },
    {
        "id": "828",
        "price": "220",
        "label": "MAYER BARIR AMISH MOHA BHOJ- মায়ের বাড়ির  আমিষ  মহা ভোজ - বাসমতি  চালের, ভাত, ডাল,আলু ভাজা, ২ রকমের সব্জি,  স্যালাড, চাটনি, পাঁপড় ও দই সাথে ১ পিস্ সন্দেশ",
        "type": "Variable Product",
        "image": require("../assets/items/828_93807.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "THALI"
    },
    {
        "id": "359",
        "price": "295",
        "label": "MAYER BARIR POLAO MOHA BHOJ ",
        "type": "Variable Product",
        "image": require("../assets/items/359_11125.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "THALI"
    },
    {
        "id": "352",
        "price": "220",
        "label": "PULAO MURGIR MANGSHO ",
        "type": "Simple Product",
        "image": require("../assets/items/352_Polao Murgir Mangso পোলাও মুরগির মাংস30405.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "THALI"
    },
    {
        "id": "353",
        "price": "275",
        "label": "PULAO KHASIR MANGSHO",
        "type": "Variable Product",
        "image": require("../assets/items/353_Polao Khasir Mangso পোলাও খাসির মাংস75639.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "THALI"
    },

    {
        "id": "320",
        "price": "95",
        "label": "Chanar Dalna 4 Pc ",
        "type": "Simple Product",
        "image": require("../assets/items/320_Chanar Dalna 4 Pc ছানার ডালনা 8 পিস77884.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "Tori Torkari তরিতরকারি"
    },
    {
        "id": "11",
        "price": "80",
        "label": "MASALA UTHAPPAM ",
        "type": "Simple Product",
        "image": require("../assets/items/11_Masala Uthappam মশালা উত্তপম্18265.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "UTHAPPAM "
    },
    {
        "id": "13",
        "price": "75",
        "label": "ONION UTHAPPAM ",
        "type": "Simple Product",
        "image": require("../assets/items/13_Onion Uthappam ওনিয়ন উত্তপম্71664.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "UTHAPPAM "
    },
    {
        "id": "15",
        "price": "95",
        "label": "CHEESE CAPSICUM UTTAPAM ",
        "type": "Simple Product",
        "image": require("../assets/items/15_Cheese Capsicum Uthappam চীজ ক্যাপসিকাম উত্তপম্17334.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "UTHAPPAM "
    },
    {
        "id": "546",
        "price": "200",
        "label": "VANILLA 05  MAX DELIVERY TIME  4 HR",
        "type": "Variable Product",
        "image": require("../assets/items/546-00-1_VANILLA 05  MAX DELIVERY TIME  4 HR HALF Ib 13715.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VANILLA CAKES"
    },
    {
        "id": "547",
        "price": "200",
        "label": "VANILLA 06  MAX DELIVERY TIME  4 HR",
        "type": "Variable Product",
        "image": require("../assets/items/547-00-1_34762.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VANILLA CAKES"
    },
    {
        "id": "548",
        "price": "200",
        "label": "VANILLA 07  MAX DELIVERY TIME  4 HR",
        "type": "Variable Product",
        "image": require("../assets/items/548-00-1_VANILLA 07  MAX DELIVERY TIME  4 HR HALF Ib 66351.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VANILLA CAKES"
    },
    {
        "id": "549",
        "price": "200",
        "label": "VANILLA 08  MAX DELIVERY TIME  4 HR ",
        "type": "Variable Product",
        "image": require("../assets/items/549-00-1_VANILLA 08  MAX DELIVERY TIME  4 HR  HALF Ib 52303.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VANILLA CAKES"
    },

    {
        "id": "557",
        "price": "200",
        "label": "VANILLA 02  MAX DELIVERY TIME  4 HR ",
        "type": "Variable Product",
        "image": require("../assets/items/557-00-1_VANILLA 02  MAX DELIVERY TIME  4 HR 18795.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VANILLA CAKES"
    },
    {
        "id": "558",
        "price": "200",
        "label": "VANILLA 04  MAX DELIVERY TIME  4 HR",
        "type": "Variable Product",
        "image": require("../assets/items/558-00-1_VANILLA 04  MAX DELIVERY TIME  4 HR HALF Ib 23144.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VANILLA CAKES"
    },
    {
        "id": "571",
        "price": "200",
        "label": "VANILLA 03 MAX DELIVERY TIME 4 HR",
        "type": "Variable Product",
        "image": require("../assets/items/571-00-1_VANILLA 03 MAX DELIVERY TIME 4 HR HALF Ib 11132.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VANILLA CAKES"
    },
    {
        "id": "783",
        "price": "50",
        "label": "ALOOBHAJA ",
        "type": "Simple Product",
        "image": require("../assets/items/_ALOOBHAJA আলুভাজা 92837.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VEG STARTER"
    },
    {
        "id": "1062",
        "price": "150",
        "label": "THIN POTATO FRY",
        "type": "Simple Product",
        "image": require("../assets/items/1062_THIN POTATO FRY46208.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VEG STARTER"
    },
    {
        "id": "1063",
        "price": "160",
        "label": "MAXICAN NACHOS ",
        "type": "Simple Product",
        "image": require("../assets/items/1063_MAXICAN NACHOS 36309.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VEG STARTER"
    },
    {
        "id": "1065",
        "price": "180",
        "label": "CRACKLING CORN ",
        "type": "Simple Product",
        "image": require("../assets/items/1065_60307.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VEG STARTER"
    },
    {
        "id": "1066",
        "price": "150",
        "label": "HONEY BLACK PEPPER CRISPY POTATO ",
        "type": "Simple Product",
        "image": require("../assets/items/1066_HONEY BLACK PEPPER CRISPY POTATO 28850.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VEG STARTER"
    },
    {
        "id": "1069",
        "price": "190",
        "label": "ZAFRANI PANEER TIKKA",
        "type": "Simple Product",
        "image": require("../assets/items/1069_ZAFRANI PANEER TIKKA49271.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VEG STARTER"
    },
    {
        "id": "1070",
        "price": "180",
        "label": "PANEER TAKRAI ",
        "type": "Simple Product",
        "image": require("../assets/items/1070_PANEER TAKRAI 58616.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VEG STARTER"
    },
    {
        "id": "1071",
        "price": "220",
        "label": "CHILLI MUSHROOM",
        "type": "Simple Product",
        "image": require("../assets/items/1071_CHILLI MUSHROOM34202.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VEG STARTER"
    },
    {
        "id": "265",
        "price": "180",
        "label": "PAN FRIED CHILLI PANEER DRY ",
        "type": "Simple Product",
        "image": require("../assets/items/265_Pan Fried Chilli Paneer Dry প্যান ফ্রাইড চিলি পনীর ড্রাই 60436.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VEG STARTER"
    },
    {
        "id": "267",
        "price": "165",
        "label": "Crispy Chilli Baby Corn ",
        "type": "Simple Product",
        "image": require("../assets/items/267_Crispy Chilli Baby Corn ক্রিসপি চিলি বেবি কর্ন 39322.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VEG STARTER"
    },
    {
        "id": "283",
        "price": "60",
        "label": "VEG SPRING ROLL ",
        "type": "Variable Product",
        "image": require("../assets/items/283_VEG SPRING ROLL ভেজ স্প্রিং রোল 54090.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VEG STARTER"
    },
    {
        "id": "179",
        "price": "195",
        "label": "TANDOORI PANEER TIKKA 5 PCS ",
        "type": "Simple Product",
        "image": require("../assets/items/179_TANDOORI PANEER TIKKA 5 PCS তন্দুর পনির টিক্কা ৫ পিস 68281.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VEG STARTER"
    },
    {
        "id": "231",
        "price": "210",
        "label": "PANEER MALAI TIKKA 5 PCS",
        "type": "Simple Product",
        "image": require("../assets/items/231_PANEER MALAI TIKKA 5 PCS মালাই পানির টিক্কা ৫ পিস 13181.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VEG STARTER"
    },
    {
        "id": "228",
        "price": "195",
        "label": "ACHARI PANEER TIKKA 5 PCS ",
        "type": "Simple Product",
        "image": require("../assets/items/228_ACHARI PANEER TIKKA 5 PCS আচারি পনির টিক্কা ৫ পিস 83099.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VEG STARTER"
    },
    {
        "id": "550",
        "price": "250",
        "label": "VELVET 03 MAX DELIVERY TIME 10 HR ",
        "type": "Variable Product",
        "image": require("../assets/items/550-00-1_20275.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VELVET CAKES"
    },
    {
        "id": "560",
        "price": "250",
        "label": "VELVET 01 MAX DELIVERY TIME 10 HR",
        "type": "Variable Product",
        "image": require("../assets/items/560-00-1_VELVET 01 MAX DELIVERY TIME 10 HR80032.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VELVET CAKES"
    },
    {
        "id": "561",
        "price": "250",
        "label": "VELVET 02 MAX DELIVERY TIME 10 HR",
        "type": "Variable Product",
        "image": require("../assets/items/561-00-1_VELVET 02 MAX DELIVERY TIME 10 HR HALF Ib 90824.jpg"),
        "showItem": true,
        "itemUnavailable": false,
        "catagory": "VELVET CAKES"
    }
]