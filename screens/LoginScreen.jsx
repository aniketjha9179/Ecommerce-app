import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import RegisterScreen from "./RegisterScreen";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          navigation.navigate("Main");
        }
      } catch (err) {
        console.log("error message", err);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    const user = {
      email: email,
      password: password,
    };
    axios
      .post("http://192.168.43.68:8000/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.navigate("Main");
      })
      .catch((err) => {
        Alert.alert("Login Error", "Invalid Email");
        console.log("Error Name:", err);
      });
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image
          style={{ height: 120, width: 180, marginTop: 80 }}
          source={require("../assets/images/Amazon GIF - Amazon - Discover & Share GIFs.gif")}
        />
      </View>
      <KeyboardAvoidingView>
        <View
          style={
            {
              // alignItems: "center"
            }
          }
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "500",
              marginTop: 2,
              color: "#041e42",
            }}
          >
            Login
          </Text>
        </View>

        <View style={{ marginTop: 2, flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#edede9",
              alignItems: "center",
              gap: 10,
              paddingVertical: 2,
              borderRadius: 10,
              marginTop: 30,
              justifyContent: "space-around",
            }}
          >
            <MaterialCommunityIcons
              style={{ marginLeft: 10 }}
              name="email"
              size={20}
              color="gray"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 320,
                fontSize: email ? 16 : 16,
              }}
              placeholder="mail@gmail.com"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#edede9",
              alignItems: "center",
              gap: 10,
              paddingVertical: 2,
              borderRadius: 10,
              marginTop: 30,
              justifyContent: "space-around",
            }}
          >
            <Entypo
              style={{ marginLeft: 10 }}
              name="lock"
              size={20}
              color="gray"
            />
            <TextInput
              value={password}
              onChangeText={(txt) => setPassword(txt)}
              secureTextEntry={true}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 320,
                fontSize: password ? 16 : 16,
              }}
              placeholder="Enter password"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <Text style={{ color: "black", fontWeight: "500" }}>
              Keep me logged In
            </Text>
            <Text style={{ color: "#007fff", fontWeight: "500" }}>
              Forgot password
            </Text>
          </View>
          <View style={{ marginTop: 70 }} />
          <Pressable
            style={{
              width: 200,
              backgroundColor: "#fb8500",
              borderRadius: 10,
              marginLeft: "auto",
              marginRight: "auto",
              paddingVertical: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={handleLogin}
          >
            <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
              Login
            </Text>
          </Pressable>
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
            onPress={() =>
              navigation.navigate(
                "Register"
                // { screen: { RegisterScreen } }
              )
            }
          >
            <Text
              style={{
                textAlign: "center",
                marginTop: 20,
                color: "gray",
                fontSize: 16,
              }}
            >
              Don't have an account{" "}
              <Text style={{ color: "#6c757d", fontWeight: "500" }}>
                {" "}
                SignUp
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
