import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartReducer";

const ProductItem = ({ item }) => {
  const [addedTOCart, setAddedTOCart] = useState(false);

  // doing the same thing  again dec dispatch
  const dispatch=useDispatch()
  const addItemToCart = (item) => {
    setAddedTOCart(true);
    dispatch(addToCart(item));
    // after 6 seconds return to be default(false)
    setTimeout(() => {
      setAddedTOCart(false);
    }, 60000);
  };
  return (
    <Pressable style={{ marginHorizontal: 20, marginVertical: 25 }}>
      <Image
        style={{ width: 150, height: 150, resizeMode: "contain" }}
        source={{ uri: item?.image }}
      />
      <Text
        numberOfLines={1}
        style={{ width: 150, marginTop: 10, fontWeight: "500" }}
      >
        {item?.title}{" "}
      </Text>
      <View
        style={{
          marginTop: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          $ {item?.price}{" "}
        </Text>
        <View style={{ backgroundColor: "green", padding: 3, borderRadius: 5 }}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
            {item?.rating?.rate} rating
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[{
          backgroundColor: "#ffc72c",
          padding: 6,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginTop: 10,
        },
        addedTOCart?styles.addedToCartButton : styles.addToCartButton,

      
      ]}
        onPress={()=>addItemToCart(item)}
      >
         {addedTOCart ? (
          <View>
            <Text>Added to Cart</Text>
          </View>
        ) : (
          <Text>Add to Cart </Text>
        )}
        
      </TouchableOpacity>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  addToCartButton:{
    backgroundColor:'#ffac1c'
  },
  addedToCartButton:{
    backgroundColor:'green'
  }
});
