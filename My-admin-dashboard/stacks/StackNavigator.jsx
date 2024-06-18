import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name='Welcome' component={Welcome}/>
    <Stack.Screen
      name="Login"
      options={{
        headerShown: false,
      }}
      component={LoginScreen}
    />
    <Stack.Screen
      name="Home"
      options={({ navigation }) => ({
        headerTitle: "My AdminDashboard",
        headerStyle: {
          backgroundColor:"#FF1493",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 30,
          color: "#FFFFFF",
        },
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons name="logout" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
      component={HomeScreen}
    />
  </Stack.Navigator>
);

export default StackNavigator;
