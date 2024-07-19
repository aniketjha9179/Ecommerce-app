import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartReducer";

const ProductInfoScreen = () => {
  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100;
  const route = useRoute();
  const [addedTOCart, setAddedTOCart] = useState(false);
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    setAddedTOCart(true);
    dispatch(addToCart(item));
    // after 6 seconds return to be default(false)
    setTimeout(() => {
      setAddedTOCart(false);
    }, 60000);
  };
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginTop: 45, flex: 1, backgroundColor: "white" }}
    >
      <View
        style={{
          backgroundColor: "#00ced1",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            borderRadius: 5,
            height: 38,
            flex: 1,
            backgroundColor: "white",
          }}
        >
          <AntDesign
            style={{ paddingLeft: 10 }}
            name="search1"
            size={20}
            color="black"
          />
          <TextInput placeholder="Amazon.in" />
        </Pressable>
        <TouchableOpacity>
          <Feather name="mic" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            style={{ width, height, marginTop: 25, resizeMode: "contain" }}
            source={{ uri: item }}
            key={index}
          >
            <View
              style={{
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#c60c30",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: 12,
                  }}
                >
                  20% off{" "}
                </Text>
              </View>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: "#e0e0e0",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Entypo name="share" size={24} color="black" />
              </View>
            </View>
            {/* heart icon */}
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "#e0e0e0",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                marginTop: "auto",
                marginLeft: 20,
                marginBottom: 20,
              }}
            >
              <AntDesign name="hearto" size={24} color="black" />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>
          {route?.params?.title}{" "}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "600", marginTop: 6 }}>
          {" "}
          ₹ {route?.params?.price}{" "}
        </Text>
      </View>
      {/* end line */}
      <Text style={{ height: 1, borderColor: "#d0d0d0", borderWidth: 1 }} />
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text>Color : </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {" "}
          {route?.params.color}{" "}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Text>size : </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {" "}
          {route?.params.size}{" "}
        </Text>
      </View>
      <Text style={{ height: 1, borderColor: "#d0d0d0", borderWidth: 1 }} />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 15, marginVertical: 5, fontWeight: "bold" }}>
          Total : ₹{route?.params?.price}
        </Text>
        <Text style={{ color: "#00ced1" }}>
          Free Delivery Tomorrow By 3 PM. Order within 10hrs 30 mins{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 5,
            alignItems: "center",
            gap: 5,
          }}
        >
          <Ionicons name="location" size={24} color="black" />
          <Text style={{ fontSize: 15, fontWeight: "500" }}>
            Deliver to Aniket Jha -Bhopal 462010{" "}
          </Text>
        </View>
      </View>
      <Text style={{ color: "green", marginHorizontal: 10, fontWeight: "600" }}>
        In Stock
      </Text>
      <TouchableOpacity
        style={[{
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginVertical: 10, 
        },  
      addedTOCart?styles.addedToCartButton : styles.addToCartButton,
      ]}
        onPress={() => addItemToCart(route?.params?.item)}
      >
        {addedTOCart ? (
          <View>
            <Text>Added to Cart</Text>
          </View>
        ) : (
          <Text>Add to Cart </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={{ 
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
          marginVertical: 10,
          bottom: 5,
          backgroundColor:'#ffac1c'

        }}
      >
        <Text>Buy Now </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductInfoScreen;

const styles = StyleSheet.create({
  addToCartButton:{
    backgroundColor:'#ffac1c'
  },
  addedToCartButton:{
    backgroundColor:'green'

  }

});
