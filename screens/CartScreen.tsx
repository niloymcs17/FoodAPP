import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; // Adjust based on your store setup
import Items from "../components/Items";
import { FontSize, Color, Padding } from "../GlobalStyles";
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { SCREEN_NAME } from "../Const/ScreenName.const";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { selectCartItems } from "../store/selectors";

const CartScreen = () => {
  // Retrieve cart items from Redux store and convert object to array
  const cartItems = useSelector(selectCartItems);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const renderItem = ({ item }:any) => (
    <Items item={item} /> // Pass the item with its quantity to the Items component
  );

  const handlePress = () => {
    // Handle button press, e.g., proceed to checkout
    navigation.navigate(SCREEN_NAME.PAYMENT);
    console.log("Proceed to checkout with total amount:", totalPrice);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Total: ₹{totalPrice.toFixed(2)}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: Padding.p_8xs,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Color.mainColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    fontWeight: 'bold',
  },
});

export default CartScreen;
