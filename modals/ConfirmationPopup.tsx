import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { Color, FontSize, Border } from '../GlobalStyles';
import { Ionicons } from '@expo/vector-icons';

interface ConfirmationPopupProps {
  isVisible: boolean;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmButtonColor?: string;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ 
  isVisible, 
  title = 'Confirm',
  message,
  confirmText = 'OK',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  confirmButtonColor = Color.mainColor,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onCancel}
      backdropOpacity={0.5}
      animationIn="zoomIn"
      animationOut="zoomOut"
      style={styles.modal}
    >
      <View style={styles.popupContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="help-circle" size={64} color={confirmButtonColor} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, styles.cancelButton]}
            onPress={onCancel}
          >
            <Text style={styles.cancelButtonText}>{cancelText}</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: confirmButtonColor }]}
            onPress={onConfirm}
          >
            <Text style={styles.confirmButtonText}>{confirmText}</Text>
          </Pressable>
        </View>
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
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: Border.br_9xl_5,
    alignItems: 'center',
    minWidth: 100,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  cancelButton: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowOpacity: 0,
    elevation: 0,
  },
  cancelButtonText: {
    color: '#666',
    fontSize: FontSize.size_base,
    fontWeight: '600',
  },
  confirmButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontWeight: '600',
  },
});

export default ConfirmationPopup;

