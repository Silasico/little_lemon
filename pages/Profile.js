import {
  View, Text, ScrollView, Pressable, Image, TextInput, StyleSheet
} from "react-native"
import { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"


import ProfileHeader from "../components/ProfileHeader"
import ProfileBtn from "../components/ProfileBtn"
import ProfileBox from "../components/ProfileBox"

const Profile = ({navigation}) => {
  const [details, setDetails] = useState({})
  
  useEffect(() => {
    const getData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("details")
        setDetails(await JSON.parse(storedData))
      } catch (e) {
        console.log(e);
      }
    }
    getData()
  }, []) 
  
  return (
    <ScrollView style = {profile.container}>
      <ProfileHeader 
        navigation = {navigation}
        details = {details}
      />
      <ProfileBox 
        details = {details}
        setDetails = {(data) => setDetails(data)}
        navigation = {navigation}
      />
    </ScrollView>
  )
}

export default Profile

const profile = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF"
  }
})