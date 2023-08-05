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
        BackHandler.exitApp()
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
        <Text style = {onboarding.showcaseText}>Let us get to know you</Text>
        <Text style = {onboarding.formLabel}>
          First Name
        </Text>
        <TextInput
          value = {firstName}
          style = {onboarding.input}
          onChangeText = {value => setFirstName(value)}
        />
        <Text style = {onboarding.formLabel}>
          Email
        </Text>
        <TextInput
          value = {email}
          style = {onboarding.input}
          onChangeText = {value => setEmail(value)}
          inputType = "email"
        />
      </View>
      <Pressable 
        style = {onboarding.button}
        onPress = {changeScreen}
      >
        <Text style = {onboarding.buttonText}>Next</Text>
      </Pressable>
    </View>
  )
}

export default Onboarding;
// colors: #495E57 #EDEFEE

const onboarding = StyleSheet.create({
  container: {
  },
  header: {
    backgroundColor: '#EDEFEE',
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 50,
  },
  form: {
    backgroundColor: "#DDDDEE",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  showcaseText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#495E57",
    marginVertical: 50,
  },
  formLabel: {
    color: "#495E57",
    fontSize: 15,
    marginBottom: 15,
  },
  input: {
    borderWidth: 2,
    borderColor: "#495E57",
    width: 200,
    borderRadius: 10,
    marginBottom: 30,
    height: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#DDDDEE",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    left: 200,
    marginVertical: 40,
  },
  buttonText: {
    color: "#495E57",
    fontSize: 15,
    fontWeight: "bold",
  }
})