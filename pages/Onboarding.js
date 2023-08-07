import { View, Text, TextInput, Pressable, Image, StyleSheet, Alert, BackHandler } from 'react-native'
import { useState, useEffect, useCallback, useContext } from 'react'
import { Validate } from './FormValidation'
import AsyncStorage from "@react-native-async-storage/async-storage"

import { useFocusEffect } from "@react-navigation/native"

import { AppContext } from "../context/context"

const Onboarding = ({navigation}) => {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  
  const { details, setDetails } = useContext(AppContext)
  
  useFocusEffect(
    useCallback(() => {
      const onBackPressed = () => {
        Alert.alert("Exit?", "Would you like to leave application?", [
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
     })
  )
  
  const changeScreen = () => {
    const initials = firstName[0]
    if(Validate(firstName, email)) {
     storeData({firstName, email, initials})
     setDetails({firstName, email, initials})
     navigation.navigate("Home")
    } else {
      Alert.alert("Error...", "Please enter a valid name and email to continue")
    }
  }
  
  const storeData = async (data) => {
    try {
      await AsyncStorage.setItem("details", JSON.stringify(data))
    } catch (e) {
      Alert.alert(e.message)
    }
  }
  
  return (
    <View style = {onboarding.container}>
      <View style = {onboarding.header} >
        <Image
          source = {require('../assets/images/Logo.png')}
          resizeMode = 'contain'
          style = {onboarding.logo}
          
        />
      </View>
      <View style = {onboarding.form}>
        <Text style = {onboarding.showcaseText}>Welcome to Little Lemon Restaurant.
        
        Let us get to know you</Text>
        <Text style = {onboarding.formLabel}>
          First Name
        </Text>
        <TextInput
          value = {firstName}
          style = {onboarding.input}
          onChangeText = {value => setFirstName(value)}
          placeholder = "Enter your first name"
        />
        <Text style = {onboarding.formLabel}>
          Email Address
        </Text>
        <TextInput
          value = {email}
          style = {onboarding.input}
          onChangeText = {value => setEmail(value)}
          inputType = "email"
          placeholder = "Enter your email"
        />
        <Pressable 
          style = {onboarding.button}
          onPress = {changeScreen}
        >
          <Text style = {onboarding.buttonText}>CONTINUE</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Onboarding;
// colors: #495E57 #EDEFEE

const onboarding = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  header: {
    backgroundColor: '#EDEFEE',
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 50,
  },
  form: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  showcaseText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 30,
    textAlign: "center",
    lineHeight: 30,
    textTransform: "uppercase",
    color: "yellow",
  },
  formLabel: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: 250,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#fff",
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    backgroundColor: "#fff",
    width: 250,
    marginTop: 10,
  },
  buttonText: {
    color: "#495E57",
    fontSize: 15,
    fontWeight: "bold",
  }
})