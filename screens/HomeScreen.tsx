import React from 'react';
import { Text, StyleSheet, Pressable, View, Image, Dimensions, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';
import { Color } from '../GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SearchBar from '../components/Search';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import Background from '../shared/Background';
import { Image as ExpoImage } from 'expo-image';
import { CATAGORY, Catagory } from '../Const/Catagory.const';
import { Divider } from 'react-native-paper';

const { width: viewportWidth } = Dimensions.get('window');

const carouselItems = [
  {
    imgUrl: "https://mothershut.com/RestoFolders/MOTHERSHUT_Supela_Bhilai/Banner_5.jpg",
    title: "Airport Cabs",
  },
  {
    imgUrl: "https://mothershut.com/RestoFolders/MOTHERSHUT_Supela_Bhilai/Banner_4.jpg",
    title: "Gift Cards",
  },
  {
    imgUrl: "https://mothershut.com/RestoFolders/MOTHERSHUT_Supela_Bhilai/Banner_3.jpg",
    title: "Hourly Stays",
  },
  {
    imgUrl: "https://mothershut.com/RestoFolders/MOTHERSHUT_Supela_Bhilai/Banner_1.jpg",
    title: "Travel Insurance",
  },
  {
    imgUrl: "https://mothershut.com/RestoFolders/MOTHERSHUT_Supela_Bhilai/Banner_6.jpg",
    title: "Forex",
  },
  {
    imgUrl: "https://mothershut.com/RestoFolders/MOTHERSHUT_Supela_Bhilai/Banner_2.jpg",
    title: "HomeStays & Villas",
  }, {
    imgUrl: "https://mothershut.com/RestoFolders/MOTHERSHUT_Supela_Bhilai/popup_image_banner_1.jpg",
    title: "HomeStays & Villas",
  },
];
const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const categories: Catagory[] = CATAGORY;

  const handlePress = (itemTitle: string) => {
    navigation.navigate('SearchItem', { title: itemTitle });
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <TopBar />
        <View style={styles.homeScreen}>
          <Pressable style={styles.searchBar} onPress={() => handlePress('')}>
            <SearchBar editable={false} />
          </Pressable>
          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.wrapper}>
              <Swiper
                showsButtons={false}
                autoplay={true}
                autoplayTimeout={3} // Adjust the timeout as needed
              >
                {carouselItems.map((item, index) => (
                  <View style={styles.carouselItem} key={index}>
                    <Image source={{ uri: item.imgUrl }} style={styles.carouselImage} />
                  </View>
                ))}
              </Swiper>
            </View>
            
            <Text style={styles.categoryTitle}>{`What would you like to order?`}</Text>
            
            <View style={styles.categoryContainer}>
              {categories.map((item, index) => (
                <Pressable key={index} onPress={() => handlePress(item.title)}>
                  <View style={styles.itemContainer}>
                    <ExpoImage style={styles.itemImage} contentFit="cover" source={item.image} />
                    <Text style={styles.itemTitle}>{item.title}</Text>
                  </View>
                  <Divider />
                </Pressable>
              ))}
            </View>
          </ScrollView>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%', // Take full width minus padding
  },
  homeScreen: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  scrollView: {
    width: '100%',
    flex: 1,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  wrapper: {
    height: viewportWidth * 0.8,
    marginVertical: 5,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: viewportWidth * 0.8,
    height: viewportWidth * 0.8,
    resizeMode: "contain",
    borderRadius: 10,
  },
  carouselText: {
    fontSize: 18,
    marginTop: 10,
  },
  categoryTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#323643',
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 10,
    width: '90%',
  },
  categoryContainer: {
    width: '90%',
  },
  itemContainer: {
    width: '100%',
    height: 100,
    marginVertical: 10,
    justifyContent: "flex-start",
    alignItems: 'center',
    elevation: 2,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  itemTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: Color.colorBlack,
    marginLeft: 10,
    textAlign: "left",
  },
  itemImage: {
    width: 81,
    height: 81,
    borderRadius: 8,
  },
});

export default HomeScreen;
