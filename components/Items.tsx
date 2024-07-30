import React, { useMemo, useState, useEffect, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontSize, Color, Padding } from "../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItem } from "../store/cartSlice";
import { Item } from "../Const/Items.const";
import { RootState } from "../store/store";

interface ItemsProps {
  item: Item & { quantity?: number }; // Quantity is optional
}

const Items = React.memo(({ item }: ItemsProps) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) => state.cart.items[item.id]);
  const [quantity, setQuantity] = useState(cartItem?.quantity || 0);

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);

  const incrementQuantity = useCallback(() => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(updateCartItem({ item, quantity: newQuantity }));
  }, [quantity, dispatch, item]);

  const decrementQuantity = useCallback(() => {
    const newQuantity = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newQuantity);
    dispatch(updateCartItem({ item, quantity: newQuantity }));
  }, [quantity, dispatch, item]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        button: {
          height: 30,
          width: 30,
          borderRadius: 15,
          backgroundColor: Color.mainColor,
          justifyContent: 'center',
          alignItems: 'center',
          color: Color.colorWhite,
          textAlign: 'center',
        },
        quantity: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: 100,
        },
        label: {
          fontSize: FontSize.size_mid,
          textAlign: "left",
          fontWeight: "600",
        },
        foodimage: {
          height: 82,
          width: 82,
          borderRadius: 41,
          overflow: 'hidden',
        },
        itemprice: {
          color: Color.mainColor,
          width: 49,
        },
        itempriceParent: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 9,
        },
        groupParent: {
          justifyContent: "center",
          marginLeft: 15,
          flex: 1,
        },
        items: {
          flexDirection: "row",
          paddingHorizontal: Padding.p_8xs,
          paddingVertical: Padding.p_3xs,
          margin: 5,
          backgroundColor: Color.colorWhite,
          borderRadius: 10,
          elevation: 3,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
      }),
    []
  );

  return (
    <View style={styles.items}>
      <Image
        style={styles.foodimage}
        contentFit="cover"
        source={item.image}
      />
      <View style={styles.groupParent}>
        <View>
          <Text style={styles.label}>{item.label}</Text>
        </View>
        <View style={styles.itempriceParent}>
          <Text style={styles.itemprice}>₹{item.price}</Text>
          <View style={styles.quantity}>
            <Pressable onPress={decrementQuantity} style={styles.button}>
              <Text>-</Text>
            </Pressable>
            <Text style={styles.label}>{quantity < 10 ? `0${quantity}` : quantity}</Text>
            <Pressable onPress={incrementQuantity} style={styles.button}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
});

export default Items;
