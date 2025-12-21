import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Pressable, View, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import TopBar from '../components/TopBar';
import { Color } from '../GlobalStyles';
import SearchBar from '../components/Search';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import { Image as ExpoImage } from 'expo-image';
import { CATAGORY, Catagory } from '../Const/Catagory.const';
import { ITEM, Item } from '../Const/Items.const';
import Items from '../components/Items';
import { getImagesFromFolder } from '../services/firebaseService';

const { width: viewportWidth } = Dimensions.get('window');

const HomeScreen = () => {
  const categories: Catagory[] = CATAGORY;
  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [carouselItems, setCarouselItems] = useState<{ imgUrl: string }[]>([]);

  const handleCategoryPress = (categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
    setSearchText(''); // Clear search text when category is selected
  };

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
    setSelectedCategory(''); // Clear category when searching
  };

  const handleClearFilter = () => {
    setSearchText('');
    setSelectedCategory('');
  };

  // Fetch carousel images from Firebase Storage
  useEffect(() => {
    const fetchCarouselImages = async () => {
      try {
        const imageUrls = await getImagesFromFolder('carouselimage/');
        if (imageUrls.length > 0) {
          setCarouselItems(imageUrls.map(url => ({ imgUrl: url })));
        }
      } catch (error) {
        // Silently fail - carousel will not be shown if no images
      }
    };

    fetchCarouselImages();
  }, []);

  useEffect(() => {
    if (searchText && searchText.length > 2) {
      // Filter by search text
      const filtered: Item[] = ITEM.filter((item: Item) => {
        return item.label.toLowerCase().includes(searchText.toLowerCase());
      });
      setFilteredItems(filtered);
    } else if (selectedCategory) {
      // Filter by category
      const filtered: Item[] = ITEM.filter((item: Item) => {
        return item.catagory.toLowerCase().includes(selectedCategory.toLowerCase());
      });
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  }, [searchText, selectedCategory]);

  const showSearchResults = (searchText.length > 2) || selectedCategory.length > 0;
  const hasResults = filteredItems.length > 0;

  return (
    <SafeAreaView style={{flex:1}}>
      <TopBar 
        back={showSearchResults} 
        onBackPress={showSearchResults ? handleClearFilter : undefined} 
      />
        <View style={styles.homeScreen}>
          <View style={styles.searchBarContainer}>
            <SearchBar 
              editable={true} 
              onChangeText={handleSearchTextChange}
            />
          </View>
          
          {showSearchResults ? (
            <View style={styles.searchResultsContainer}>
              {hasResults ? (
                <>
                  <Text style={styles.searchResultsTitle}>
                    {selectedCategory 
                      ? `${selectedCategory} - ${filteredItems.length} item${filteredItems.length > 1 ? 's' : ''}`
                      : `Found ${filteredItems.length} item${filteredItems.length > 1 ? 's' : ''}`
                    }
                  </Text>
                  <FlatList
                    data={filteredItems}
                    renderItem={({ item }) => <Items item={item} />}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.flatListContent}
                    showsVerticalScrollIndicator={false}
                  />
                </>
              ) : (
                <View style={styles.noResultsContainer}>
                  <Text style={styles.noResultsText}>No items found</Text>
                  <Text style={styles.noResultsSubtext}>Try searching with different keywords</Text>
                </View>
              )}
            </View>
          ) : (
            <ScrollView 
              style={styles.scrollView}
              contentContainerStyle={styles.scrollViewContent}
              showsVerticalScrollIndicator={false}
            >
              {carouselItems.length > 0 && (
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
              )}
              
              <Text style={styles.categoryTitle}>{`What would you like to order?`}</Text>
              
              <View style={styles.categoryContainer}>
                {categories.map((item, index) => (
                  <Pressable key={index} onPress={() => handleCategoryPress(item.title)}>
                    <View style={styles.itemContainer}>
                      <ExpoImage style={styles.itemImage} contentFit="cover" source={item.image} />
                      <Text style={styles.itemTitle}>{item.title}</Text>
                    </View>
                    <View style={styles.divider} />
                  </Pressable>
                ))}
              </View>
            </ScrollView>
          )}
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    width: '90%',
    marginBottom: 10,
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
  searchResultsContainer: {
    width: '90%',
    flex: 1,
  },
  searchResultsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Color.colorBlack,
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  noResultsText: {
    fontSize: 20,
    fontWeight: '600',
    color: Color.colorBlack,
    marginBottom: 8,
  },
  noResultsSubtext: {
    fontSize: 14,
    color: Color.colorGray_200,
  },
  wrapper: {
    height: Math.min(viewportWidth * 0.8, 400),
    marginVertical: 5,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: viewportWidth * 0.8,
    height: Math.min(viewportWidth * 0.8, 400),
    resizeMode: "contain",
    borderRadius: 10,
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
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '100%',
  },
});

export default HomeScreen;
