import React from 'react';
import { Text, StyleSheet, ScrollView, View, Pressable } from 'react-native';
import { Image } from 'expo-image';
import {  Color } from '../GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SearchBar from '../components/Search';
import { CATAGORY, Catagory } from '../Const/Catagory.const';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider } from 'react-native-paper';


const catagories: Catagory[] = CATAGORY

const CatagoryScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handlePress = (itemTitle: string) => {
    navigation.navigate('SearchItem', { title: itemTitle });
  };

  return (
    <SafeAreaView style={styles.homeScreen}>
      <Text style={styles.title}>{`What would you like to order?`}</Text>
      <Pressable style={styles.searchBar} onPress={() => handlePress('')}>
        <SearchBar editable={false} />
      </Pressable>
      <ScrollView style={styles.category} contentContainerStyle={styles.scrollViewContent}>
        {catagories.map((item, index) => (
          <Pressable key={index} onPress={() => handlePress(item.title)}>
            <View key={index} style={styles.itemContainer}>
              <Image style={styles.itemImage} contentFit="cover" source={item.image} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
            <Divider />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
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
    width: 300,
    height: 100,
    margin: 10,
    justifyContent: "flex-start",
    alignItems: 'center',
    elevation: 30,
    flexDirection: "row"
  },
  itemTitle: {
    width: 220,
    fontSize: 14,
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

export default CatagoryScreen;
