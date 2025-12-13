import React, { useState } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { FontSize, Color, Padding } from '../GlobalStyles';
import ModalComponent from '../modals/ModalComponent';

type TopBarProps = {
  onBackPress?: () => void; // Optional custom back press handler
};

const TopBar: React.FC<TopBarProps> = ({ onBackPress }) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedDetails, setSelectedDetails] = useState<{ serviceType: string | null }>({
    serviceType: null
  });

  const handleAddressPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = (data: { serviceType: string | null}) => {
    setSelectedDetails(data);
    setModalVisible(false);
  };

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.topBar}>
      <Pressable onPress={handleBackPress}>
        <Image style={styles.menuIcon} contentFit="cover" source={require('../assets/back.png')} />
      </Pressable>

      <Pressable onPress={handleAddressPress} style={styles.addressContainer}>
        <Text style={styles.deliverTo}>{'Deliver to'}</Text>
        <Text style={styles.prettyViewLane}>{'4102 Pretty View Lane'}</Text>
      </Pressable>

      <Image style={styles.vectorIcon} contentFit="cover" source={require('../assets/profile.png')} />
      
      <ModalComponent isVisible={isModalVisible} onClose={handleModalClose} />
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
