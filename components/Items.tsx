import React, { useMemo, useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

export type ItemsType = {
  maskGroup?: ImageSourcePropType;
  label: string;
  price: string;
};

const Items = ({ maskGroup, label, price  }: ItemsType) => {
  const [quantity, setQuantity] = useState(0); // Initial quantity set to 0

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        button: {
          height: 30,
          width: 30,
          borderRadius: 15,
          fontSize: 18,
          backgroundColor: Color.mainColor,
          justifyContent: 'center',
          alignItems: 'center',
          color: Color.colorWhite,
          textAlign: 'center',
          lineHeight: 30, // Ensures the text is vertically centered
        },
        quantity: {
          flexDirection: "row", // Ensures horizontal alignment
          justifyContent: "space-between", // Adds space between items
          alignItems: "center", // Aligns items vertically centered
          width: 100,
        },
        itemsFlexBox: {
          alignItems: "center",
          flexDirection: "row",
        },
        redNHotTypo: {
          width: "auto",
          textAlign: "left",
          fontFamily: FontFamily.sofiaPro,
          fontSize: FontSize.size_lg,
          color: Color.colorBlack,
          fontWeight: "600",
        },
        label: {
          fontSize: FontSize.size_mid,
          textAlign: "left",
          fontWeight: "600",
        },
        foodimage: {
          height: 82,
          width: 82, // Ensures the image is square
          borderRadius: 41, // Makes the image circular
          overflow: 'hidden', // Ensures the image is clipped to the border radius
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
          zIndex: 1,
          marginTop: 20,
          backgroundColor: Color.colorWhite,
          borderRadius: 10,
          elevation: 3, // Android shadow
          shadowColor: "#000", // iOS shadow
          shadowOffset: { width: 0, height: 2 }, // iOS shadow
          shadowOpacity: 0.25, // iOS shadow
          shadowRadius: 3.84, // iOS shadow
        },
      }),
    [quantity]
  );

  return (
    <View style={styles.items}>
      <Image
        style={styles.foodimage}
        contentFit="scale-down"
        source={maskGroup}
      />
      <View style={styles.groupParent}>
        <View>
          <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.itempriceParent}>
          <Text style={styles.itemprice}>₹{price}</Text>
          <View style={styles.quantity}>
            <TouchableOpacity onPress={decrementQuantity}>
              <Text style={styles.button}>-</Text>
            </TouchableOpacity>
            <Text style={styles.label}>{quantity < 10 ? `0${quantity}` : quantity}</Text>
            <TouchableOpacity onPress={incrementQuantity}>
              <Text style={styles.button}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Items;
