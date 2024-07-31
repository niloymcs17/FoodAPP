import React from 'react';
import { Text, StyleSheet, Pressable, View, Image, Dimensions } from 'react-native';
import TopBar from '../components/TopBar';
import { Color } from '../GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SearchBar from '../components/Search';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import Background from '../shared/Background';

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

  const handlePress = (itemTitle: string) => {
    navigation.navigate('SearchItem', { title: itemTitle });
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <Background style={styles.homeScreen}>
      <TopBar />
        <View style={styles.homeScreen}>
          <Pressable style={styles.searchBar} onPress={() => handlePress('')}>
            <SearchBar editable={false} />
          </Pressable>
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
        </View>
      </Background>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', // Take full width minus padding
    marginBottom: 10,
  },
  homeScreen: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  wrapper: {
    height: 350,
    marginVertical: 10,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: viewportWidth * 0.8,
    height: "90%",
    resizeMode: 'cover',
    borderRadius: 10,
  },
  carouselText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default HomeScreen;
