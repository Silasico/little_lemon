import {
  View, Image, StyleSheet, Pressable, Text,
} from "react-native"
import { useEffect, useState, useContext } from "react"
import { AppContext } from "../context/context"

import AsyncStorage from "@react-native-async-storage/async-storage"

const HomeHeader = ({ navigation }) => {
  const { details, setDetails } = useContext(AppContext)
  
    
    return (
      <View style = {header.container}>
        <View style = {header.logoBox}>
          <Image
            source = {require("../assets/images/Logo.png")}
            style = {header.logo}
            resizeMode = "contain"
          />
        </View>
        {details &&
        <Pressable
          onPress = {() => navigation.navigate("Profile")}
          style = {header.imageBox}
        >
          {details.uri ? <Image
            source = {{uri: details.uri}}
            style = {header.image}
            resizeMode = "contain"
          /> : <View style = {header.placeholderImage}>
            <Text style = {header.placeholderText}>{details.initials}</Text>
          </View>
            
          }
        </Pressable>
        }
        
      </View>
    )
  
  
}

export default HomeHeader

const header = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 0,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoBox: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 70,
  },
  imageBox: {
    flex: 1
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  placeholderImage: {
    width: 40,
    height: 40,
    backgroundColor: "orange",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  placeholderText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
})