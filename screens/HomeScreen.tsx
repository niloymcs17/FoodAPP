import React from 'react';
import { Text, StyleSheet, ScrollView, View, Pressable, TouchableOpacity, TextInput } from 'react-native';
import { Image } from 'expo-image';
import TopBar from '../components/TopBar';
import Search from '../components/Search';
import { FontFamily, Color, FontSize } from '../GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SearchBar from '../components/Search';
import { FontAwesome } from '@expo/vector-icons';
export interface Catagory {
  title: string;
  image: any;
}

const items: Catagory[] = [
  { title: 'BREAKFAST FOR YOUR BEST MORNING', image: require('../assets/catagory/BREAKFAST.jpg') },
  { title: 'MOTHERS HUT SPECIAL', image: require('../assets/catagory/MOTHERS_HUT_SPECIAL.jpg') },
  { title: 'BUDGET COMBO', image: require('../assets/catagory/BUDGET_COMBO.jpg') },
  { title: 'BASHUDHA বসুধা খাবার যেখানে আবেগময়', image: require('../assets/catagory/BASHUDHA.jpg') },
  { title: 'MOTHER`S HUT BUFFET যা চাই তাই পাই যত ইচ্ছা তত খাই UNLIMITED FOOD FOR MORE DETAILS- 6297235418 / 6296892007', image: require('../assets/catagory/MOTHER`S_HUT_BUFFET.jpg') },
  { title: 'SOUP', image: require('../assets/catagory/SOUP.jpg') },
];

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handlePress = () => {
    navigation.navigate('SearchItem');
  };

  return (
    <View style={styles.homeScreen}>
      <TopBar />
      <Text style={styles.title}>{`What would you like to order?`}</Text>
      <TouchableOpacity style={styles.searchBar} onPress={handlePress}>
        <SearchBar />
      </TouchableOpacity>
      <ScrollView style={styles.category} contentContainerStyle={styles.scrollViewContent}>
        {items.map((item, index) => (
          <Pressable onPress={() => navigation.navigate("SearchItem")}>
            <View key={index} style={styles.itemContainer}>
              <Image style={styles.itemImage} contentFit="cover" source={item.image} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar:{
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%", // Take full width minus padding
    marginVertical: 10,
  },
  homeScreen: {
    backgroundColor: Color.colorWhite,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#323643',
    textAlign: 'left',
    marginTop: 20,
    fontFamily: FontFamily.sofiaPro,
  },
  category: {
    width: '100%',
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "flex-start",
  },
  itemContainer: {
    width: 250,
    height: 100,
    margin: 10,
    justifyContent: "flex-start",
    alignItems: 'center',
    elevation: 30,
    flexDirection: "row"
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: '500',
    color: Color.colorBlack,
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.sofiaPro,
  },
  itemImage: {
    width: 81,
    height: 81,
  },
});

export default HomeScreen;
