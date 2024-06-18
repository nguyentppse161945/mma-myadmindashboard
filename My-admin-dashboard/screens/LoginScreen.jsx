import {
  Alert,
  Button,
  StatusBar,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { loginAPI } from "../services/api";
import { useFonts } from "expo-font";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("123456");
  let [fontsLoaded] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  const handleLogin = async () => {
    try {
      if (username == "" || password == "") {
        Alert.alert("Username and Password are required!");
      } else {
        const isValid = await loginAPI(username, password);
        if (isValid) {
          navigation.navigate("Home");
        } else {
          Alert.alert("Username or Password incorrect!");
        }
      }
    } catch (error) {
      Alert.alert("Login Error", error.message);
    }
  };
 
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
}
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username: </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="username"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password: </Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="password"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#333",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
