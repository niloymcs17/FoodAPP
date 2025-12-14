import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { selectAddresses, setSelectedAddress, Address } from '../store/addressSlice';
import { useNavigation } from '@react-navigation/native';
import { Color } from '../GlobalStyles';
import { Ionicons } from '@expo/vector-icons';
import ErrorPopup from './ErrorPopup';

const serviceTypes = ['Delivery', 'Pick Up', 'Table Order'];

interface ServiceTypeModalProps {
    isVisible: boolean;
    onClose: (data: { serviceType: string | null; addressId?: string | null }) => void;
    initialServiceType?: string | null;
    initialAddressId?: string | null;
}

const ServiceTypeModal: React.FC<ServiceTypeModalProps> = ({ 
    isVisible, 
    onClose,
    initialServiceType = null,
    initialAddressId = null
}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const addresses = useSelector(selectAddresses);
    const [selectedService, setSelectedService] = useState<string | null>(initialServiceType);
    const [selectedAddressId, setSelectedAddressId] = useState<string | null>(initialAddressId);
    const [showErrorPopup, setShowErrorPopup] = useState(false);

    // Update selected service when modal opens with initial value
    useEffect(() => {
        if (isVisible && initialServiceType) {
            setSelectedService(initialServiceType);
        }
    }, [isVisible, initialServiceType]);

    useEffect(() => {
        if (addresses.length > 0) {
            if (initialAddressId && addresses.find(addr => addr.id === initialAddressId)) {
                // Use the provided initial address ID
                setSelectedAddressId(initialAddressId);
                dispatch(setSelectedAddress(initialAddressId));
            } else if (selectedAddressId === null || !addresses.find(addr => addr.id === selectedAddressId)) {
                // If no selection or selected address was deleted, use default or first address
                const defaultAddress = addresses.find(addr => addr.isDefault) || addresses[0];
                if (defaultAddress) {
                    setSelectedAddressId(defaultAddress.id);
                    dispatch(setSelectedAddress(defaultAddress.id));
                }
            }
        } else if (addresses.length === 0) {
            // No addresses left, clear selection
            setSelectedAddressId(null);
        }
    }, [addresses, initialAddressId, dispatch, selectedAddressId]);

    const handleServiceSelect = (service: string) => {
        setSelectedService(service);
        if (service !== 'Delivery') {
            setSelectedAddressId(null);
        } else if (addresses.length > 0 && !selectedAddressId) {
            const defaultAddress = addresses.find(addr => addr.isDefault) || addresses[0];
            setSelectedAddressId(defaultAddress.id);
        }
    };

    const handleAddressSelect = (addressId: string) => {
        setSelectedAddressId(addressId);
        dispatch(setSelectedAddress(addressId));
    };


    const handleAddNewAddress = () => {
        // Store that we should reopen modal after adding address
        // We'll use a navigation param to track this
        onClose({ serviceType: null, addressId: null });
        setTimeout(() => {
            (navigation as any).navigate('AddNewAddress', { 
                returnToModal: true,
                serviceType: selectedService || 'Delivery'
            });
        }, 300);
    };

    const handleConfirm = () => {
        if (selectedService === 'Delivery' && !selectedAddressId) {
            if (addresses.length === 0) {
                setShowErrorPopup(true);
                return;
            }
        }
        onClose({ 
            serviceType: selectedService, 
            addressId: selectedService === 'Delivery' ? selectedAddressId : null 
        });
    };

    const renderAddressItem = ({ item }: { item: Address }) => (
        <Pressable 
            onPress={() => handleAddressSelect(item.id)} 
            style={({ pressed }) => [
                styles.addressOption,
                pressed && { opacity: 0.7 }
            ]}
        >
            <RadioButton
                value={item.id}
                status={selectedAddressId === item.id ? 'checked' : 'unchecked'}
                onPress={() => handleAddressSelect(item.id)}
            />
            <View style={styles.addressInfo}>
                <View style={styles.addressLabelRow}>
                    <Text style={styles.addressLabel}>{item.label}</Text>
                    {item.isDefault && (
                        <View style={styles.defaultBadge}>
                            <Text style={styles.defaultBadgeText}>Default</Text>
                        </View>
                    )}
                </View>
                <Text style={styles.addressText}>
                    {item.street}, {item.city}, {item.state} {item.zipCode}
                </Text>
            </View>
        </Pressable>
    );

    return (
        <>
        <Modal 
            isVisible={isVisible} 
            onBackdropPress={() => onClose({ serviceType: null, addressId: null })} 
            backdropOpacity={0.8} 
            style={styles.modal}
        >
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Service Type</Text>
                
                {serviceTypes.map((service) => (
                    <TouchableOpacity 
                        key={service} 
                        onPress={() => handleServiceSelect(service)} 
                        style={styles.serviceOption}
                    >
                        <RadioButton
                            value={service}
                            status={selectedService === service ? 'checked' : 'unchecked'}
                            onPress={() => handleServiceSelect(service)}
                        />
                        <Text style={styles.serviceText}>{service}</Text>
                    </TouchableOpacity>
                ))}

                {selectedService === 'Delivery' && (
                    <View style={styles.addressSection}>
                        <View style={styles.addressHeader}>
                            <Text style={styles.addressSectionTitle}>Delivery Addresses</Text>
                            <TouchableOpacity 
                                style={styles.addNewButton}
                                onPress={handleAddNewAddress}
                            >
                                <Ionicons name="add-circle-outline" size={20} color={Color.mainColor} />
                                <Text style={styles.addAddressText}>Add New</Text>
                            </TouchableOpacity>
                        </View>
                        
                        {addresses.length === 0 ? (
                            <View style={styles.noAddressContainer}>
                                <Ionicons name="location-outline" size={48} color="#999" />
                                <Text style={styles.noAddressText}>No saved addresses</Text>
                                <Text style={styles.noAddressSubtext}>Add your first delivery address</Text>
                                <TouchableOpacity 
                                    style={styles.addAddressButton}
                                    onPress={handleAddNewAddress}
                                >
                                    <Ionicons name="add" size={20} color="white" />
                                    <Text style={styles.addAddressButtonText}>Add Address</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <FlatList
                                data={addresses}
                                renderItem={renderAddressItem}
                                keyExtractor={(item) => item.id}
                                style={styles.addressList}
                                contentContainerStyle={styles.addressListContent}
                                scrollEnabled={true}
                                nestedScrollEnabled={true}
                                showsVerticalScrollIndicator={false}
                                keyboardShouldPersistTaps="handled"
                            />
                        )}
                    </View>
                )}

                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </Modal>
        <ErrorPopup
            isVisible={showErrorPopup}
            title="No Address"
            message="Please add a delivery address first."
            onClose={() => setShowErrorPopup(false)}
        />
    </>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: '80%',
        maxHeight: '80%',
        alignSelf: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    serviceOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
    },
    serviceText: {
        fontSize: 16,
    },
    confirmButton: {
        backgroundColor: Color.mainColor,
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: Color.mainColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 16,
    },
    addressSection: {
        marginTop: 20,
        maxHeight: 300,
    },
    addressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    addressSectionTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
    addNewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Color.mainColor,
        backgroundColor: Color.mainColor + '10',
    },
    addAddressText: {
        fontSize: 14,
        color: Color.mainColor,
        fontWeight: '600',
        marginLeft: 4,
    },
    addressList: {
        maxHeight: 200,
    },
    addressListContent: {
        paddingBottom: 5,
    },
    addressOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1,
    },
    addressInfo: {
        flex: 1,
        marginLeft: 10,
    },
    addressLabelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    addressLabel: {
        fontSize: 15,
        fontWeight: '600',
        color: Color.colorBlack,
    },
    defaultBadge: {
        backgroundColor: Color.mainColor + '20',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        marginLeft: 8,
    },
    defaultBadgeText: {
        fontSize: 10,
        color: Color.mainColor,
        fontWeight: '600',
    },
    addressText: {
        fontSize: 13,
        color: '#666',
        lineHeight: 18,
    },
    noAddressContainer: {
        alignItems: 'center',
        paddingVertical: 30,
    },
    noAddressText: {
        fontSize: 16,
        color: '#666',
        fontWeight: '500',
        marginTop: 12,
        marginBottom: 4,
    },
    noAddressSubtext: {
        fontSize: 13,
        color: '#999',
        marginBottom: 20,
    },
    addAddressButton: {
        backgroundColor: Color.mainColor,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: Color.mainColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    addAddressButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 6,
    },
});

export default ServiceTypeModal;

