import {
  View,
  Text,
} from "react-native"
import { useState, useEffect, } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AsyncStorage from "@react-native-async-storage/async-storage"

import DetailsContext, { AppContext } from "../context/context"

import Onboarding from "../pages/Onboarding"
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Splash from "../pages/Splash"

const Stack = createNativeStackNavigator()



const Navigation = () => {
  const [details, setDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const getData = async () => {
      try {
        //await AsyncStorage.removeItem("details")
        const storedData = await AsyncStorage.getItem("details")
        setDetails((storedData))
      } catch (e) {
        console.log(e);
      } finally {
        setTimeout(() => {setLoading(false)}, 0);
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
      <DetailsContext>
        <Stack.Navigator initialRouteName = {!loading && details ? "Home" : "Onboarding"} screenOptions = {{headerShown: false}}>
            <Stack.Screen name = "Onboarding" component ={Onboarding} />
            <Stack.Screen name = "Home" component ={Home} />
            <Stack.Screen name = "Profile" component ={Profile} />
        </Stack.Navigator>
      </DetailsContext>
    </NavigationContainer>
  )
}

export default Navigation