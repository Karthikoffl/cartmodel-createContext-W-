import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { CartContext } from "../CartContext";
import { getProduct } from "../services/ProductsService.js";

export function Product({ name, price, image, onPress, id }) {
  const [product, setProduct] = useState({});
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getProduct(id));
  });

  function onAddToCart() {
    addItemToCart(product.id);
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.thumb} source={image} />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>Rs. {price}</Text>
        </View>
        <View>
          <Button onPress={onAddToCart} title="Add to cart" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
});
