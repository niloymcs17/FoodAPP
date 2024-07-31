import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';

const serviceTypes = ['Delivery', 'Pick Up', 'Table Order'];

interface ModalComponentProps {
    isVisible: boolean;
    onClose: (data: { serviceType: string | null }) => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isVisible, onClose }) => {
    const [selectedService, setSelectedService] = useState<string | null>(null);

    const handleServiceSelect = (service: string) => {
        setSelectedService(service);
    };

    const handleConfirm = () => {
        onClose({ serviceType: selectedService });
    };

    return (
        <Modal isVisible={isVisible} onBackdropPress={() => onClose({ serviceType: null })} backdropOpacity={0.8} style={styles.modal}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Service Type</Text>
                {serviceTypes.map((service) => (
                    <TouchableOpacity key={service} onPress={() => handleServiceSelect(service)} style={styles.serviceOption}>
                        <RadioButton
                            value={service}
                            status={selectedService === service ? 'checked' : 'unchecked'}
                            onPress={() => handleServiceSelect(service)}
                        />
                        <Text style={styles.serviceText}>{service}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </Modal>
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
        maxHeight: '60%',
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
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ModalComponent;
