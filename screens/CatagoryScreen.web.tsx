import React from 'react';
import { Text, StyleSheet, ScrollView, View, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Color } from '../GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SearchBar from '../components/Search';
import { CATAGORY, Catagory } from '../Const/Catagory.const';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider } from 'react-native-paper';
import TopBar from '../components/TopBar';
import Background from '../shared/Background';
import { BlurView } from 'expo-blur';

const catagories: Catagory[] = CATAGORY;

const CatagoryScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handlePress = (itemTitle: string) => {
    navigation.navigate('SearchItem', { title: itemTitle });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background>
        <TopBar />
        <View style={styles.homeScreen}>
          <Pressable style={styles.searchBar} onPress={() => handlePress('')}>
            <SearchBar editable={false} />
          </Pressable>
          <ScrollView style={styles.category} contentContainerStyle={styles.scrollViewContent}>
            {catagories.map((item, index) => (
              <Pressable key={index} onPress={() => handlePress(item.title)}>
                <View key={index} style={styles.itemContainer}>
                  <BlurView intensity={50} style={styles.blurView} tint="light">
                    <Image style={styles.itemImage} contentFit="cover" source={item.image} />
                    <Text style={styles.itemTitle}>{item.title}</Text>
                  </BlurView>
                </View>
                <Divider />
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </Background>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    marginVertical: 10,
  },
  homeScreen: {
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
    justifyContent: "space-evenly",
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    flexDirection: "row",
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Slightly transparent for glass effect
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemTitle: {
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
  blurView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});

export default CatagoryScreen;
