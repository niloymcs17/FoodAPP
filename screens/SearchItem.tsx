import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, useRoute } from "@react-navigation/native";
import Items from "../components/Items";
import { FontSize, Color } from "../GlobalStyles";
import SearchBar from "../components/Search";
import { useState, useEffect } from "react";
import { ITEM, Item } from "../Const/Items.const";

const SearchItem = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [foodItem, setFoodItem] = useState<Item[]>([]);
    const route = useRoute();
    const { title } = route.params ;

    useEffect(() => {
        if (title) {
            const filteredItems: Item[] = ITEM.filter((item: Item) => {
                return item.catagory.toLowerCase().includes(title.toLowerCase());
            });
            setFoodItem(filteredItems);
        }
    }, [title]);

    const handleSearchTextChange = (text: string) => {
        if (text && text.length > 2) {
            const filteredItems: Item[] = ITEM.filter((item: Item) => {
                return item.label.toLowerCase().includes(text.toLowerCase());
            });
            setFoodItem(filteredItems);
        }
        console.log("Search text after debounce:", text);
    };

    return (
        <View style={styles.searchItem}>
            <View style={styles.navBar}>
                <Pressable
                    style={styles.back}
                    onPress={() => navigation.goBack()}
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
                    source={require("../assets/profile.png")}
                />
            </View>
            <SearchBar
                editable={true}
                onChangeText={handleSearchTextChange}
            />
            <FlatList
                data={foodItem}
                renderItem={({ item }) => <Items item={item} />}
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
        marginBottom: 10, // Adding margin for better spacing
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
