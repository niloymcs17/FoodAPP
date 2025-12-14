import React, { useState, useEffect, useRef } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, useFocusEffect, ParamListBase } from '@react-navigation/native';
import { FontSize, Color, Padding } from '../GlobalStyles';
import ServiceTypeModal from '../modals/ServiceTypeModal';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedAddress, setSelectedAddress, selectAddresses } from '../store/addressSlice';

type TopBarProps = {
  onBackPress?: () => void; // Optional custom back press handler
};

const TopBar: React.FC<TopBarProps> = ({ onBackPress }) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const selectedAddress = useSelector(selectSelectedAddress);
  const addresses = useSelector(selectAddresses);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedDetails, setSelectedDetails] = useState<{ serviceType: string | null }>({
    serviceType: null
  });
  const [modalInitialAddressId, setModalInitialAddressId] = useState<string | null>(null);
  const previousAddressCountRef = useRef<number>(0);
  const shouldReopenModalRef = useRef<boolean>(false);

  // Listen for navigation events to detect when AddNewAddress is opened from modal
  useEffect(() => {
    const unsubscribe = navigation.addListener('state', (e) => {
      const state = e.data.state;
      if (state) {
        const routes = state.routes;
        const currentRoute = routes[routes.length - 1];
        // Check if we're navigating to AddNewAddress with returnToModal param
        if (currentRoute.name === 'AddNewAddress' && currentRoute.params) {
          const params = currentRoute.params as { returnToModal?: boolean };
          if (params.returnToModal) {
            shouldReopenModalRef.current = true;
          }
        }
      }
    });

    return unsubscribe;
  }, [navigation]);

  // Track when addresses are added and reopen modal if needed
  useFocusEffect(
    React.useCallback(() => {
      const currentAddressCount = addresses.length;
      
      // If address count increased and we should reopen modal
      if (currentAddressCount > previousAddressCountRef.current && shouldReopenModalRef.current) {
        shouldReopenModalRef.current = false;
        // Get the newly added address (should be the last one)
        const newAddress = addresses[addresses.length - 1];
        if (newAddress) {
          setModalInitialAddressId(newAddress.id);
        }
        // Small delay to ensure state is updated
        setTimeout(() => {
          setModalVisible(true);
          setSelectedDetails({ serviceType: 'Delivery' });
        }, 300);
      }
      
      previousAddressCountRef.current = currentAddressCount;
    }, [addresses.length])
  );

  const handleAddressPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = (data: { serviceType: string | null; addressId?: string | null }) => {
    setSelectedDetails({ serviceType: data.serviceType });
    if (data.addressId) {
      dispatch(setSelectedAddress(data.addressId));
    }
    setModalVisible(false);
    shouldReopenModalRef.current = false;
    setModalInitialAddressId(null); // Reset after modal closes
  };

  const displayAddress = selectedAddress 
    ? `${selectedAddress.street}, ${selectedAddress.city}`
    : '4102 Pretty View Lane';

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
        <Text style={styles.prettyViewLane} numberOfLines={1}>
          {displayAddress}
        </Text>
      </Pressable>

      <Image style={styles.vectorIcon} contentFit="cover" source={require('../assets/profile.png')} />
      
      <ServiceTypeModal 
        isVisible={isModalVisible} 
        onClose={handleModalClose}
        initialServiceType={selectedDetails.serviceType}
        initialAddressId={modalInitialAddressId}
      />
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
