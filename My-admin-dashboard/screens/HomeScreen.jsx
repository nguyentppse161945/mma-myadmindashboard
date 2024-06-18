import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import Dashboard from './Dashboard'
import Search from './Search'
import * as Font from 'expo-font';
import { useFonts } from "expo-font";


const Tab = createBottomTabNavigator();

 const HomeScreen = () => {
    let [fontsLoaded] = useFonts({
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
      });
      if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarStyle:{
            position:'absolute',
            marginBottom:'2%',
            marginTop:'2%',
            marginHorizontal:'2%',
            borderRadius:10,
            height:50,
            ...styles.shadow
        },
        tabBarShowLabel:false,

    }} >
        <Tab.Screen options={{
            tabBarIcon:({focused})=>(
                <View style={{alignItems:'center'}} >
                     <Icon name={focused ? 'home' : 'home-outline'} size={20} color={focused ? '#fff' : 'grey'} />
                     <Text style={{color: focused ? '#fff':'grey',fontFamily:'Roboto-Bold', fontSize:10}} >Dashboard</Text>       
                </View>
            )
        }}  name="Dashboard" component={Dashboard}/>
        <Tab.Screen options={{
            tabBarIcon:({focused})=>(
                <View>
                    <Icon name={focused ? 'search':'search-outline'} size={20} color={focused ? '#fff' :'grey'} />
                    <Text style={{color:focused ? '#fff' : 'grey', fontSize:10, fontFamily:'Roboto-Bold'}} >Search</Text>
                </View>
            )
        }} name="Search" component={Search} />
    </Tab.Navigator>
)
 }
 
 export default HomeScreen

 
const styles = StyleSheet.create({
  shadow:{
      elevation:5,
      shadowColor:'#000',
      backgroundColor:'#00003f',
      borderWidth:1,
      borderColor:'transparent',
  }
})
