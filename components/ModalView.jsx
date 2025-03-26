import { View, Text, Modal, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ModalView = ({visible, onClose, children}) => {
  return (
    <Modal
    animationType="slide"
    transparent
    visible={visible}
    onRequestClose={onClose}
    >
    <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
            <TouchableWithoutFeedback>
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeText}>X</Text>
                    </TouchableOpacity>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        </View>
    </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
    backdrop: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContainer: {
      width: "85%",
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 20,
      elevation: 5,
      position: "relative",
    },
    closeButton: {
      position: "absolute",
      right: 10,
      top: 10,
      zIndex: 1,
    },
    closeText: {
      fontSize: 28,
      fontWeight: "bold",
    },
  });

export default ModalView