import {
  View,
  Text,
  Image,
  StyleSheet, Pressable, ScrollView
} from "react-native"
import { useState, useEffect } from "react"
import * as Font from "expo-font"

import HomeHeader from "../components/HomeHeader"
import HomeBanner from "../components/HomeBanner"
import HomeData from "../components/HomeData"
//https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json
//#F4CE14

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  
  useEffect(()=> {
    const loadFont = async () => {
      await Font.loadAsync({
        "Karla-Regular": require("../assets/fonts/Karla-Regular.ttf"),
        "MarkaziText-Regular": require("../assets/fonts/MarkaziText-Regular.ttf")
      })
      setLoading(false)
    }
    loadFont()
  }, [])
  
  
  return (
    <ScrollView style = {home.container}>
      <HomeHeader
        navigation = {navigation}
      />
      <HomeBanner 
        headerFont = {!loading ? "MarkaziText-Regular" : ""}
        bodyFont = {!loading ? "Karla-Regular" : ""}
      />
      <HomeData 
        font = {!loading ? "Karla-Regular" : ""}
      />
    </ScrollView>
  )
}
export default Home

const home = StyleSheet.create({
  container: {
    //flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
  }
})