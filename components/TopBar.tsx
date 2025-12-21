import React, { useState, useEffect, useRef } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, useFocusEffect, ParamListBase } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontSize, Color, Padding } from '../GlobalStyles';
import ServiceTypeModal from '../modals/ServiceTypeModal';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedAddress, setSelectedAddress, selectAddresses } from '../store/addressSlice';
import { getCurrentUser, onAuthChange } from '../services/firebaseService';
import { User } from 'firebase/auth';

type TopBarProps = {
  onBackPress?: () => void; // Optional custom back press handler
  back?: boolean; // Show back button when true
};

const TopBar: React.FC<TopBarProps> = ({ onBackPress, back = false }) => {
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
  const [user, setUser] = useState<User | null>(null);

  // Check if user is logged in
  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);

    // Listen to auth state changes
    const unsubscribe = onAuthChange((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

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
      {back && (
        <Pressable 
          onPress={handleBackPress} 
          style={styles.backButton}
          android_ripple={{ color: '#f0f0f0', borderless: true }}
        >
          <Ionicons name="arrow-back" size={24} color={Color.colorBlack} />
        </Pressable>
      )}

      <Pressable 
        onPress={handleAddressPress} 
        style={styles.addressContainer}
        android_ripple={{ color: '#f0f0f0', borderless: true }}
      >
        <View style={styles.addressContent}>
          <View style={styles.addressTextContainer}>
            <Text style={styles.deliverTo}>{'Deliver to'}</Text>
            <Text style={styles.prettyViewLane} numberOfLines={1}>
              {displayAddress}
            </Text>
          </View>
        </View>
      </Pressable>

      {user && (
        <Pressable 
          style={styles.profileButton}
          android_ripple={{ color: '#f0f0f0', borderless: true }}
        >
          <View style={styles.profileIconContainer}>
            <Ionicons name="person" size={22} color={Color.colorBlack} />
          </View>
        </Pressable>
      )}
      
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  addressContainer: {
    flex: 1,
    marginHorizontal: 12,
  },
  addressContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  deliverTo: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    color: Color.colorLightslategray_100,
    fontWeight: '500',
    textAlign: 'center',
  },
  prettyViewLane: {
    fontSize: FontSize.size_mini,
    lineHeight: 18,
    color: Color.mainColor,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 2,
  },
  chevronIcon: {
    marginLeft: 4,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TopBar;
