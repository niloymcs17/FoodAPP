import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, Border } from "../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from 'react-redux';
import { selectAddresses, deleteAddress, setSelectedAddress, setDefaultAddress, Address } from '../store/addressSlice';
import { Ionicons } from '@expo/vector-icons';
import DeleteConfirmationPopup from '../modals/DeleteConfirmationPopup';

const DeliveryAddressList = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const addresses = useSelector(selectAddresses);
  const [deletePopupVisible, setDeletePopupVisible] = useState(false);
  const [addressToDelete, setAddressToDelete] = useState<string | null>(null);
  const [addressLabel, setAddressLabel] = useState<string>('');

  const handleAddNew = () => {
    navigation.navigate('AddNewAddress' as never);
  };

  const handleDeleteClick = (addressId: string, label: string) => {
    setAddressToDelete(addressId);
    setAddressLabel(label);
    setDeletePopupVisible(true);
  };

  const handleDeleteConfirm = () => {
    if (addressToDelete) {
      dispatch(deleteAddress(addressToDelete));
      setDeletePopupVisible(false);
      setAddressToDelete(null);
      setAddressLabel('');
    }
  };

  const handleDeleteCancel = () => {
    setDeletePopupVisible(false);
    setAddressToDelete(null);
    setAddressLabel('');
  };

  const handleSetDefault = (addressId: string) => {
    dispatch(setDefaultAddress(addressId));
    dispatch(setSelectedAddress(addressId));
  };

  const renderAddressItem = ({ item }: { item: Address }) => (
    <View style={styles.addressCard}>
      <View style={styles.addressHeader}>
        <View style={styles.addressInfo}>
          <View style={styles.labelRow}>
            <Text style={styles.addressLabel}>{item.label}</Text>
            {item.isDefault && (
              <View style={styles.defaultBadge}>
                <Text style={styles.defaultBadgeText}>Default</Text>
              </View>
            )}
          </View>
          <Text style={styles.addressText}>
            {item.street}
          </Text>
          <Text style={styles.addressText}>
            {item.city}, {item.state} {item.zipCode}
          </Text>
        </View>
        <View style={styles.actionButtons}>
          {!item.isDefault && (
            <Pressable
              style={styles.setDefaultButton}
              onPress={() => handleSetDefault(item.id)}
            >
              <Ionicons name="star-outline" size={18} color={Color.mainColor} />
              <Text style={styles.setDefaultText}>Set Default</Text>
            </Pressable>
          )}
          <Pressable
            style={styles.deleteButton}
            onPress={() => handleDeleteClick(item.id, item.label)}
          >
            <Ionicons name="trash-outline" size={20} color="#FF3B30" />
          </Pressable>
        </View>
      </View>
    </View>
  );

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
        <Text style={styles.title}>Delivery Addresses</Text>
        <View style={styles.placeholder} />
      </View>

      {addresses.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="location-outline" size={64} color="#999" />
          <Text style={styles.emptyText}>No saved addresses</Text>
          <Text style={styles.emptySubtext}>Add your first delivery address</Text>
          <Pressable
            style={styles.addButton}
            onPress={handleAddNew}
          >
            <Ionicons name="add" size={20} color="white" />
            <Text style={styles.addButtonText}>Add Address</Text>
          </Pressable>
        </View>
      ) : (
        <>
          <FlatList
            data={addresses}
            renderItem={renderAddressItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
          <View style={styles.footer}>
            <Pressable
              style={styles.addNewButton}
              onPress={handleAddNew}
            >
              <Ionicons name="add-circle" size={24} color={Color.colorWhite} />
              <Text style={styles.addNewButtonText}>Add New Address</Text>
            </Pressable>
          </View>
        </>
      )}

      <DeleteConfirmationPopup
        isVisible={deletePopupVisible}
        message={`Are you sure you want to delete "${addressLabel}"?`}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
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
    justifyContent: "space-between",
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
    flex: 1,
    textAlign: "center",
  },
  placeholder: {
    width: 34,
  },
  listContent: {
    padding: 20,
    paddingBottom: 100,
  },
  addressCard: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_md,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  addressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  addressInfo: {
    flex: 1,
    marginRight: 12,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  addressLabel: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    color: Color.colorBlack,
    marginRight: 8,
  },
  defaultBadge: {
    backgroundColor: Color.mainColor + '20',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  defaultBadgeText: {
    fontSize: 10,
    color: Color.mainColor,
    fontWeight: "600",
  },
  addressText: {
    fontSize: FontSize.size_sm,
    color: "#666",
    marginBottom: 4,
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  setDefaultButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Color.mainColor,
  },
  setDefaultText: {
    fontSize: FontSize.size_sm,
    color: Color.mainColor,
    marginLeft: 4,
    fontWeight: "500",
  },
  deleteButton: {
    padding: 8,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: Color.colorWhite,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  addNewButton: {
    backgroundColor: Color.mainColor,
    borderRadius: Border.br_9xl_5,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Color.mainColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  addNewButtonText: {
    fontSize: FontSize.size_base,
    fontWeight: "600",
    color: Color.colorWhite,
    marginLeft: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  emptyText: {
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    color: "#666",
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: FontSize.size_base,
    color: "#999",
    marginBottom: 32,
    textAlign: "center",
  },
  addButton: {
    backgroundColor: Color.mainColor,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: Border.br_9xl_5,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: Color.mainColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  addButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    marginLeft: 8,
  },
});

export default DeliveryAddressList;

