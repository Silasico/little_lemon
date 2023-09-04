import {
  View, Text, StyleSheet, Alert
} from "react-native"
import { useState, useEffect, useContext } from "react"
import ProfileImageBox from "./ProfileImageBox"
import ProfileForm from "./ProfileForm"
import ProfileBtn from "./ProfileBtn"
import ProfileFormCheckboxes from "./ProfileFormCheckboxes"
import { Validate } from "../pages/FormValidation"

import { AppContext } from "../context/context"

import AsyncStorage from "@react-native-async-storage/async-storage"

export default function ProfileBox ({ navigation }) {
  const { details, setDetails } = useContext(AppContext)
  const [newDetails, setNewDetails] = useState({})
  let errMsg = ""
  let error = false
  
  const setError = (val => error = val)
  const setErrMsg = (val => errMsg = val)
  
  useEffect(() => {
    setNewDetails(details)
  }, [details])
  
  const logout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout, all your details would be lost as they are stored locally on your devices", [
        {
          text: "Yes, please log me out",
          onPress: async () => {
            await AsyncStorage.clear()
            setDetails(null)
          }
        },
        {
          text: "No, Thank you",
        }
      ])
    
  }
  const discardChanges = () => {
    Alert.alert("Are you sure you want to discard your changes?", "", [
        {
          text: "No",
        },
        {
          text: "Yes",
          onPress: () => {
            setDetails(details)
            navigation.pop()
          }
        }
      ])
  }
  const saveChanges = async () => {
    let changed = true
    if (newDetails.firstName && newDetails.lastName && newDetails.email && newDetails.phone ) {
     if (Validate(newDetails.firstName, newDetails.email, newDetails.lastName)) {
       error = false
     } else {
       error = true
       setErrMsg("Names must not contain any special character and email must be a valid email")
     }
      
    } else {
      error = true
      setErrMsg("Please Input all fields")
    }
    
    if (!error) {
      const initials = newDetails.firstName[0] + newDetails.lastName[0]
      setDetails({...newDetails, initials: initials})
      setNewDetails({...newDetails, initials: initials})
      try{
        await AsyncStorage.setItem("details", JSON.stringify({...newDetails, initials: initials}))
        navigation.pop()
      } catch(e) {
        console.log(e);
      }
    } else {
      Alert.alert("Error", errMsg)
    }
   
  }
  
  return(
    <View style = {profile.profileBox}>
      <Text style = {profile.profileBoxHeader}>Personal Information</Text>
      <ProfileImageBox 
        details = {newDetails}
        setNewDetails = {setNewDetails}
      />
      <ProfileForm 
        details = {newDetails}
        setNewDetails = {setNewDetails}
        setError = {(val) => setError(val)}
      />
      <ProfileFormCheckboxes details = {newDetails} setNewDetails = {setNewDetails} />
      <View style = {profile.btnBox}>
        <ProfileBtn
          bgColor = "#FFFFFF"
          bColor= "#495E57"
          name = "Discard Changes"
          color = "#495E57"
          onPress = {discardChanges}
        />
        <ProfileBtn
          bgColor = "#495E57"
          bColor= "#ffffff"
          name = "Save Changes"
          color = "#ffffff"
          onPress = {saveChanges}
        />
      </View>
      <ProfileBtn
        bgColor = "#FAD000"
        bColor= "orange"
        name = "Log out"
        color = "#000000"
        onPress = {logout}
        style = {profile.logoutbtn}
      />
    </View>
  )
}

const profile = StyleSheet.create({
  profileBox: {
    padding: 10,
    paddingBottom: 20,
    borderWidth: 0.3,
    borderColor: "#495E57",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  profileBoxHeader: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333333"
  },
  btnBox: {
    marginBottom: 15,
    flexDirection: "row",
    gap: 10,
  }
})