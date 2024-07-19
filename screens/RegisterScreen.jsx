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
  ActivityIndicator
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, Entypo, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!username || !email || !password) {
      Alert.alert("Validation Error", "All fields are required");
      return;
    }
  
    const user = { name: username, email, password };
  
    try {
      setLoading(true);
      // Use your local IP address if testing on a mobile device or emulator
      const response = await axios.post("http://192.168.43.68:8000/register", user); // Replace 192.168.x.x with your local IP address
      setLoading(false);
      console.log(response);
      Alert.alert("Registration Successful", "You have registered successfully");
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setLoading(false);
      const errorMessage = error.response?.data?.message || "An error occurred during registration";
      Alert.alert("Registration Error", errorMessage);
      console.log("Registration failed", error);
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/images/image_processing20210420-6371-q7ezr6.gif")}
        />
      </View>
      <KeyboardAvoidingView>
        <View>
          <Text style={styles.title}>SignUp</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <FontAwesome name="user" size={20} color="gray" />
            <TextInput
              value={username}
              onChangeText={setUsername}
              style={styles.input}
              placeholder="Username"
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="email" size={20} color="gray" />
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholder="mail@gmail.com"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <Entypo name="lock" size={20} color="gray" />
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              style={styles.input}
              placeholder="Enter password"
            />
          </View>
          <View style={styles.spacer} />
          <Pressable onPress={handleRegister} style={styles.button}>
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Signup</Text>
            )}
          </Pressable>
          <TouchableOpacity
            style={styles.loginLink}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginText}>
              Already have an account{" "}
              <Text style={styles.loginTextBold}>Log in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 300,
    marginTop: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: "500",
    marginTop: 2,
    color: "#041e42",
  },
  formContainer: {
    marginTop: 2,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#edede9",
    alignItems: "center",
    gap: 10,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 30,
    justifyContent: "space-around",
  },
  input: {
    color: "gray",
    marginVertical: 10,
    width: 320,
    fontSize: 16,
  },
  spacer: {
    marginTop: 10,
  },
  button: {
    width: 200,
    backgroundColor: "#fb8500",
    borderRadius: 10,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  loginLink: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
    fontSize: 16,
  },
  loginTextBold: {
    color: "#6c757d",
    fontWeight: "500",
  },
});
