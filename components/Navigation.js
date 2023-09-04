import {
  View,
  Text,
} from "react-native"
import { useState, useEffect, useContext } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as Font from "expo-font"
import DetailsContext, { AppContext } from "../context/context"

import Onboarding from "../pages/Onboarding"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Splash from "../pages/Splash"

const Stack = createNativeStackNavigator()



const Navigation = () => {
  const { details, setDetails } = useContext(AppContext)
  const [loading, setLoading] = useState(true)
  
  
  useEffect(() => {
    const getData = async () => {
      try {
        await Font.loadAsync({
          "Karla-Regular": require("../assets/fonts/Karla-Regular.ttf"),
          "MarkaziText-Regular": require("../assets/fonts/MarkaziText-Regular.ttf")
        })
       
      } catch (e) {
        console.log(e);
      } finally {
        setTimeout(() => setLoading(false), 1000);
      }
    }
    getData()
  }, [])
  
  
  if (loading) {
    return(
      <Splash />
    )
  }
  
  return (
    <NavigationContainer>
        {!details ? <Onboarding /> :
          <Stack.Navigator initialRouteName = {"Home"} screenOptions = {{headerShown: false}}>
              <Stack.Screen name = "Home" component ={Home} />
              <Stack.Screen name = "Profile" component ={Profile} />
          </Stack.Navigator>
        }
    </NavigationContainer>
  )
}

export default Navigation