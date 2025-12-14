import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { Color, FontSize, Border } from '../GlobalStyles';
import { Ionicons } from '@expo/vector-icons';

interface ErrorPopupProps {
  isVisible: boolean;
  title?: string;
  message: string;
  onClose: () => void;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ 
  isVisible, 
  title = 'Error',
  message, 
  onClose 
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropOpacity={0.5}
      animationIn="zoomIn"
      animationOut="zoomOut"
      style={styles.modal}
    >
      <View style={styles.popupContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="close-circle" size={64} color="#FF3B30" />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <Pressable
          style={styles.button}
          onPress={onClose}
        >
          <Text style={styles.buttonText}>OK</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  popupContainer: {
    backgroundColor: Color.colorWhite,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    width: '85%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  iconContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: FontSize.size_xl,
    fontWeight: '700',
    color: Color.colorBlack,
    marginBottom: 12,
  },
  message: {
    fontSize: FontSize.size_base,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: Border.br_9xl_5,
    minWidth: 120,
    alignItems: 'center',
    shadowColor: '#FF3B30',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontWeight: '600',
  },
});

export default ErrorPopup;

