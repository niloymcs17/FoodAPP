import * as React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Items from "../components/Items";
import { FontSize, Color } from "../GlobalStyles";
import SearchBar from "../components/Search";
import { useState, useEffect } from "react";
import { ITEM, Item } from "../Const/Items.const";
import { SafeAreaView } from "react-native-safe-area-context";
import Background from "../shared/Background";
import TopBar from "../components/TopBar";

const SearchItem = () => {
    const [foodItem, setFoodItem] = useState<Item[]>([]);
    const route = useRoute();
    const { title }:any = route.params;

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
        <SafeAreaView style={styles.searchItem}>
            <TopBar />
            <View style={styles.searchBarContainer}>
                <SearchBar
                    editable={true}
                    onChangeText={handleSearchTextChange}
                />
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={foodItem}
                    renderItem={({ item }) => <Items item={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchBarContainer: {
        marginHorizontal: 20,
        marginBottom: 10,
    },
    flatListContainer: {
        marginHorizontal: 20,
        flex: 1,
        width:"90%"
    },
    searchItem: {
        backgroundColor: Color.colorWhite,
        flex: 1,
        overflow: "hidden",
        width: "100%",
        alignItems: 'center', // Center the content horizontally
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
});

export default SearchItem;
