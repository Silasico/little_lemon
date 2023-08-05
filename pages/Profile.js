import {
  View, Text, ScrollView, Pressable, Image, TextInput, StyleSheet
} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"


import ProfileHeader from "../components/ProfileHeader"
import ProfileBtn from "../components/ProfileBtn"
import ProfileBox from "../components/ProfileBox"

const Profile = ({navigation}) => {
  
  return (
    <ScrollView style = {profile.container}>
      <ProfileHeader 
        navigation = {navigation}
      />
      <ProfileBox 
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