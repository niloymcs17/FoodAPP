import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import {  FontSize, Color, Padding } from '../GlobalStyles';

const TopBar = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.topBar}>
      <Pressable onPress={() => navigation.navigate('SideMenu')}>
        <Image style={styles.menuIcon} contentFit="cover" source={require('../assets/menu.png')} />
      </Pressable>

      <Pressable onPress={() => navigation.navigate('AddNewAddress')} style={styles.addressContainer}>
        <Text style={styles.deliverTo}>{'Deliver to'}</Text>
        <Text style={styles.prettyViewLane}>{'4102 Pretty View Lane'}</Text>
      </Pressable>

      <Image style={styles.vectorIcon} contentFit="cover" source={require('../assets/vector.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Padding.p_10xs,
    paddingVertical: 0,
  },
  menuIcon: {
    width: 38,
    height: 38,
  },
  addressContainer: {
    alignItems: 'center',
  },
  deliverTo: {
    fontSize: FontSize.size_sm,
    lineHeight: 17,
    color: Color.colorLightslategray_100,
    fontWeight: '500',
    textAlign: 'center',
  },
  prettyViewLane: {
    fontSize: FontSize.size_mini,
    lineHeight: 18,
    color: Color.mainColor,
    textAlign: 'center',
  },
  vectorIcon: {
    width: 59,
    height: 57,
  },
});

export default TopBar;
