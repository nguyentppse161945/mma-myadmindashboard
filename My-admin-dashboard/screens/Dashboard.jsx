import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import  {getMenuAPI}  from "../services/api.js";
import  {loginAPI}  from "../services/api.js";
import  ProfitIndicator  from "../components/ProfitIndicator.jsx";
import  ActionCenter  from "../components/ActionCenter.jsx";
import Icon from "react-native-vector-icons/FontAwesome";
import  {widthPercentageToDP as wp} from "react-native-responsive-screen";
import{heightPercentageToDP as hp} from "react-native-responsive-screen";
import LinearGradient from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


// import LinearGradient from 'react-native-linear-gradient'


const Dashboard = () => {
  const [portfolioData, setPortfolio] = useState([]);
  const [coinsData, setCoinsData] = useState([]);
  let [fontsLoaded] = useFonts({
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });


  useEffect(() => {
    const fetchCoinsData = async () => {
      try {
        const response = await getMenuAPI();
        setCoinsData(response);
      
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu coins:", error);
      }
    };

    fetchCoinsData();
  }, []);
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        // Bạn có thể sử dụng hàm loginAPI để lấy thông tin người dùng đã đăng nhập
        const user = await loginAPI("admin", "123456"); 
         if (user) {
          setPortfolio(user); // Lưu thông tin người dùng vào state portfolioData
        }
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu người dùng:", error);
      }
    };

    fetchPortfolioData();
  }, []);


  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
}
  return (
 

    <View style={{ flex: 1 }}>
      {/* Statusbar */}
      <StatusBar barStyle='light-content' translucent={true} backgroundColor='transparent' />
      {/* Header section  error here*/}
    
      
      {/* Body section */}
      <View style={{ flex: 2.5, backgroundColor: '#fff', paddingHorizontal: wp('5%') }}>
        {/* Action Center */}
        <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: hp('13%'), width: '100%', alignItems: 'center', justifyContent: 'space-around', borderRadius: 10, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', elevation: 10, shadowColor: '#000', shadowRadius: 10, marginTop: -25 }}>
          <ActionCenter img_src={require('../assets/icons/top-up.png')} img_text="Top-Up" />
          <ActionCenter img_src={require('../assets/icons/buy.png')} img_text="Buy" />
          <ActionCenter img_src={require('../assets/icons/withdraw.png')} img_text="WithDraw" />
        </View>
        {/* My Assets */}
        <View style={{ flexDirection: 'column' }}>
          {/* Text and button */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Text style={{ fontFamily: 'Roboto-Medium', color: '#333', fontSize: 22 }}>My Assets</Text>
            <TouchableOpacity onPress={() => console.log('see all')}>
              <Text style={{ fontFamily: 'Roboto-Medium', color: '#2249DA', fontSize: 20 }}>See All</Text>
            </TouchableOpacity>
          </View>
          {/* Horizontal asset slider */}
          <FlatList
            keyExtractor={(item) => item.id}
            data={coinsData.data}
            renderItem={({ item }) => (
              <View style={{ position: 'relative', flexDirection: 'column', height: hp('20%'), width: wp('65%'), borderWidth: 1, borderColor: '#ddd', backgroundColor: '#fff', borderRadius: 15, marginRight: 10, marginTop: 10 }}>
                {/* Coin and symbol */}
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingTop: 20 }}>
                  <Image style={{ height: 25, width: 25 }} source={require('../assets/icons/ethereum.png')} />
                  <Text style={{ fontFamily: 'Roboto-Bold', color: '#333', fontSize: 18 }}> {item.currency}/USDT</Text>
                </View>
                {/* coin and price indicator */}
                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-around', alignItems: 'center' }}>
                  {/* Coin Price */}
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontFamily: 'Roboto-Bold', color: '#333', fontSize: 20 }}>${item.amount}</Text>
                    <Text>0.0256 BNB</Text>
                  </View>
                  {/* indicator */}
                  <ProfitIndicator type={item.type} percentage_change={item.changes} />
                </View>
              </View>
            )}
            horizontal={true}
          />
        </View>
        {/* Market */}
        <View style={{ flex: 1, flexDirection: 'column' }}>
          {/* market text */}
          <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 22, color: '#333' }}>Market</Text>
          {/* coin list */}
          <FlatList
            keyExtractor={(item) => item.id}
            data={coinsData.data}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', height: hp('10%'), width: '100%', borderWidth: 1, borderColor: '#ddd', borderRadius: 15, justifyContent: 'space-between', paddingRight: 10, marginBottom: 10 }}>
                {/* Coin image, coin name and symbol */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {/* Coin image */}
                  <Image style={{ height: '65%' }} resizeMode="contain" source={require('../assets/icons/ethereum.png')} />
                  {/* Coin symbol */}
                  <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <Text style={{ fontFamily: 'Roboto-Medium', color: '#333', fontSize: 20 }}>{item.currency}</Text>
                    <Text>BNB/USDT</Text>
                  </View>
                </View>
                {/* Coin price and indicator */}
                <View style={{ flexDirection: 'column', backgroundColor: '#fff', alignContent: 'center', justifyContent: 'center' }}>
                  {/* price */}
                  <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 14, color: '#333' }}>${item.amount}</Text>
                  {/* indicator */}
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: item.type == "I" ? 'green' : 'red', fontFamily: 'Roboto-Bold', fontSize: 12 }}>{item.changes}</Text>
                    <Icon name={item.type == "I" ? 'chevron-circle-up' : 'chevron-circle-down'} color={item.type == "I" ? 'green' : 'red'} />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  sectionTitle: {
    textAlign: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: "#F4CE14",
    fontSize: 18,
    fontWeight: "bold",
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 20,
  },
});
