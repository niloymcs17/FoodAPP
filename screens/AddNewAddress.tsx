import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, TextInput, ScrollView, ActivityIndicator } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, useRoute, ParamListBase, RouteProp } from "@react-navigation/native";
import { FontSize, Color, Border } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux';
import { addAddress, setSelectedAddress } from '../store/addressSlice';
import { Ionicons } from '@expo/vector-icons';
import SuccessPopup from '../modals/SuccessPopup';

type AddNewAddressRouteParams = {
  AddNewAddress: {
    returnToModal?: boolean;
    serviceType?: string | null;
  };
};

const AddNewAddress = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute<RouteProp<AddNewAddressRouteParams, 'AddNewAddress'>>();
  const dispatch = useDispatch();
  const { returnToModal, serviceType } = route.params || {};
  const [loading, setLoading] = useState(false);
  const [gettingLocation, setGettingLocation] = useState(false);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    label: "",
    latitude: undefined as number | undefined,
    longitude: undefined as number | undefined,
  });
  const [errors, setErrors] = useState({
    label: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // Permission denied - user can still enter address manually
        console.log('Location permission denied');
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  };

  const getCurrentLocation = async () => {
    try {
      setGettingLocation(true);
      const { status } = await Location.getForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        // Permission denied - user can still enter address manually
        setGettingLocation(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Reverse geocode to get address
      const geocode = await Location.reverseGeocodeAsync({ latitude, longitude });
      
      if (geocode && geocode.length > 0) {
        const addr = geocode[0];
        setAddress({
          ...address,
          street: `${addr.street || ''} ${addr.streetNumber || ''}`.trim(),
          city: addr.city || addr.subAdministrativeArea || '',
          state: addr.region || '',
          zipCode: addr.postalCode || '',
          latitude,
          longitude,
        });
        // Clear errors for fields that were auto-filled
        setErrors({
          ...errors,
          street: "",
          city: "",
          state: "",
          zipCode: "",
        });
      }
    } catch (error) {
      console.error('Error getting location:', error);
      // Error getting location - user can still enter address manually
    } finally {
      setGettingLocation(false);
    }
  };

  const validateForm = () => {
    const newErrors = {
      label: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    };

    let isValid = true;

    // Validate Label
    if (!address.label.trim()) {
      newErrors.label = "Address label is required";
      isValid = false;
    } else if (address.label.trim().length < 2) {
      newErrors.label = "Address label must be at least 2 characters";
      isValid = false;
    }

    // Validate Street Address
    if (!address.street.trim()) {
      newErrors.street = "Street address is required";
      isValid = false;
    } else if (address.street.trim().length < 5) {
      newErrors.street = "Street address must be at least 5 characters";
      isValid = false;
    }

    // Validate City
    if (!address.city.trim()) {
      newErrors.city = "City is required";
      isValid = false;
    } else if (address.city.trim().length < 2) {
      newErrors.city = "City must be at least 2 characters";
      isValid = false;
    }

    // Validate Zip Code (optional but if provided, should be valid)
    if (address.zipCode.trim() && !/^\d{4,10}$/.test(address.zipCode.trim())) {
      newErrors.zipCode = "Zip code must be 4-10 digits";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSave = () => {
    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const newAddress = {
      id: Date.now().toString(),
      label: address.label.trim(),
      street: address.street.trim(),
      city: address.city.trim(),
      state: address.state.trim(),
      zipCode: address.zipCode.trim(),
      latitude: address.latitude,
      longitude: address.longitude,
      isDefault: false,
    };

    dispatch(addAddress(newAddress));
    
    // Automatically select the newly added address if it's the first one or marked as default
    if (returnToModal) {
      // Set the new address as selected
      dispatch(setSelectedAddress(newAddress.id));
    }
    
    setLoading(false);
    // Show success popup
    setShowSuccessPopup(true);
  };

  const handleSuccessPopupClose = () => {
    setShowSuccessPopup(false);
    navigation.goBack();
  };

  const handleFieldChange = (field: keyof typeof address, value: string) => {
    setAddress({ ...address, [field]: value });
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </Pressable>
        <Text style={styles.title}>Delivery Address</Text>
      </View>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <Pressable 
          style={styles.locationButton}
          onPress={getCurrentLocation}
          disabled={gettingLocation}
        >
          {gettingLocation ? (
            <ActivityIndicator color={Color.mainColor} />
          ) : (
            <Ionicons name="location" size={20} color={Color.mainColor} />
          )}
          <Text style={styles.locationButtonText}>
            {gettingLocation ? 'Getting Location...' : 'Use Current Location'}
          </Text>
        </Pressable>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Address Label *</Text>
            <TextInput
              style={[styles.input, errors.label && styles.inputError]}
              placeholder="e.g., Home, Office"
              value={address.label}
              onChangeText={(text) => handleFieldChange('label', text)}
            />
            {errors.label ? <Text style={styles.errorText}>{errors.label}</Text> : null}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Street Address *</Text>
            <TextInput
              style={[styles.input, errors.street && styles.inputError, styles.multilineInput]}
              placeholder="Enter street address"
              value={address.street}
              onChangeText={(text) => handleFieldChange('street', text)}
              multiline
            />
            {errors.street ? <Text style={styles.errorText}>{errors.street}</Text> : null}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>City *</Text>
            <TextInput
              style={[styles.input, errors.city && styles.inputError]}
              placeholder="Enter city"
              value={address.city}
              onChangeText={(text) => handleFieldChange('city', text)}
            />
            {errors.city ? <Text style={styles.errorText}>{errors.city}</Text> : null}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>State</Text>
            <TextInput
              style={[styles.input, errors.state && styles.inputError]}
              placeholder="Enter state"
              value={address.state}
              onChangeText={(text) => handleFieldChange('state', text)}
            />
            {errors.state ? <Text style={styles.errorText}>{errors.state}</Text> : null}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Zip Code</Text>
            <TextInput
              style={[styles.input, errors.zipCode && styles.inputError]}
              placeholder="Enter zip code"
              value={address.zipCode}
              onChangeText={(text) => handleFieldChange('zipCode', text)}
              keyboardType="numeric"
            />
            {errors.zipCode ? <Text style={styles.errorText}>{errors.zipCode}</Text> : null}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.saveButton} onPress={handleSave} disabled={loading}>
          {loading ? (
            <ActivityIndicator color={Color.colorWhite} />
          ) : (
            <Text style={styles.saveButtonText}>Save Address</Text>
          )}
        </Pressable>
      </View>

      <SuccessPopup
        isVisible={showSuccessPopup}
        message="Address saved successfully!"
        onClose={handleSuccessPopupClose}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderColor: Color.mainColor,
    borderRadius: Border.br_md,
    padding: 12,
    marginBottom: 20,
  },
  locationButtonText: {
    marginLeft: 8,
    fontSize: FontSize.size_base,
    color: Color.mainColor,
    fontWeight: '500',
  },
  form: {
    gap: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.colorBlack,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: Border.br_md,
    padding: 12,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    backgroundColor: Color.colorWhite,
    minHeight: 44,
  },
  inputError: {
    borderColor: "#FF3B30",
    borderWidth: 1.5,
  },
  multilineInput: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  errorText: {
    color: "#FF3B30",
    fontSize: FontSize.size_sm,
    marginTop: 4,
    marginLeft: 4,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  saveButton: {
    backgroundColor: Color.mainColor,
    borderRadius: Border.br_9xl_5,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    color: Color.colorWhite,
  },
});

export default AddNewAddress;

