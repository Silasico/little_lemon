import {
  View,
  StyleSheet, Alert, BackHandler
} from "react-native"
import { useState, useEffect, useCallback } from "react"
//import * as Linking from "expo-linking"
import { useFocusEffect } from "@react-navigation/native"

import HomeHeader from "../components/HomeHeader"
import HomeBanner from "../components/HomeBanner"
import HomeData from "../components/HomeData"


const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")
  
  useFocusEffect(
    useCallback(() => {
      const onBackPressed = () => {
        Alert.alert("Exit?", "Are you sure you want to exit app?", [
            {
              text: "Yes",
              onPress: () => BackHandler.exitApp()
            },
            {
              text: "No"
            }
          ])
        return true
      }
      
      BackHandler.addEventListener("hardwareBackPress", onBackPressed)
      
      return () => BackHandler.removeEventListener("hardwareBackPress", onBackPressed)
      
    }, [])
  )
  
  
  return (
    <View style = {home.container}>
      <HomeHeader
        navigation = {navigation}
      />
      <HomeBanner 
        setQuery = {(val) => setQuery(val)}
      />
      <HomeData 
        query = {query}
      />
     
    </View>
  )
}
export default Home

const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})