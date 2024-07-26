import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const OrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace("Main");
    }, 6000); // Set a delay before navigating to the Main screen

    return () => clearTimeout(timeout); // Clearss timeout on component unmount
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        source={require("../assets/Animation  firework.json")}
        style={styles.fireworks}
        autoPlay
        loop={true}
        speed={1}
      />
      <LottieView
        source={require("../assets/Animation  firework.json")}
        style={styles.fireworks}
        autoPlay
        loop={true}
        speed={1}
      />
       <LottieView
        source={require("../assets/Animation _two.json")}
        style={{flex:2, height:500,width:450,}}
        autoPlay
        loop={true}
        speed={1}
      />
     
      <View style={styles.messageContainer}>
     
        <Text style={styles.messageText}>Your Order Has Been Received!</Text>
      </View>
      
      <Pressable
            onPress={()=>navigation.navigate("Main")}
            style={{
              backgroundColor: "#FFC72C",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
              marginBottom:30,
              paddingHorizontal:25
            }}
          >
            <Text style={{color:'white',fontSize:18,paddingHorizontal:20}}>Continue to shopping  </Text>
          </Pressable>
      
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fireworks: {
    height: 800,
    width: 600,
    position: "absolute",
    top: "30%",
  },
  messageContainer: {
    marginTop: 40,
  },
  messageText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom:300
  },
});
