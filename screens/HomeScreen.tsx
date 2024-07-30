import React from 'react';
import { Text, StyleSheet, ScrollView, View, Pressable, TouchableOpacity, TextInput } from 'react-native';
import { Image } from 'expo-image';
import TopBar from '../components/TopBar';
import {  Color } from '../GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SearchBar from '../components/Search';
import { CATAGORY, Catagory } from '../Const/Catagory.const';


const catagories: Catagory[] = CATAGORY

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handlePress = (itemTitle: string) => {
    navigation.navigate('SearchItem', { title: itemTitle });
  };

  return (
    <View style={styles.homeScreen}>
      <TopBar />
      <Text style={styles.title}>{`What would you like to order?`}</Text>
      <TouchableOpacity style={styles.searchBar} onPress={() => handlePress('')}>
        <SearchBar />
      </TouchableOpacity>
      <ScrollView style={styles.category} contentContainerStyle={styles.scrollViewContent}>
        {catagories.map((item, index) => (
          <Pressable key={index} onPress={() => handlePress(item.title)}>
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
  },
  itemImage: {
    width: 81,
    height: 81,
  },
});

export default HomeScreen;
