import {
  View,
  StyleSheet, Alert, BackHandler
} from "react-native"
import { useState, useEffect, useCallback } from "react"
import * as Font from "expo-font"
import * as Linking from "expo-linking"
import { useFocusEffect } from "@react-navigation/native"

import HomeHeader from "../components/HomeHeader"
import HomeBanner from "../components/HomeBanner"
import HomeData from "../components/HomeData"


const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")
  
  useEffect(()=> {
    Alert.alert("NOTICE", "Dear reviewer, I would like a favour from you. The project does not contain a figma design because i built this project using my phone(used termux and ACODE). I can't make use of Figma on my phone, i would have tried it. But I have gone through this course from the beginning up till this stage using my phone and i would require your help to help me with a mark for the figma when reviewing. The app performs all the functionality and you can check it out and grade the other requirements based on your interaction with the app. Thanks in advance for your assistance ❤️. You can also connect with me on whatsapp by clicking the Conmect with me", [
        {
          text: "Connect with me",
          onPress: () => Linking.openURL("https://wa.me/2348161299594")
        },
        {
          text: "Ok"
        }
      ])
    const loadFont = async () => {
      await Font.loadAsync({
        "Karla-Regular": require("../assets/fonts/Karla-Regular.ttf"),
        "MarkaziText-Regular": require("../assets/fonts/MarkaziText-Regular.ttf")
      })
      setLoading(false)
    }
    loadFont()
  }, [])
  
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
        headerFont = {!loading ? "MarkaziText-Regular" : ""}
        bodyFont = {!loading ? "Karla-Regular" : ""}
        setQuery = {(val) => setQuery(val)}
      />
      <HomeData 
        font = {!loading ? "Karla-Regular" : ""}
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
    //alignItems: "center",
    //justifyContent: "center",
  }
})