import {
  View, Text, Pressable, Image, StyleSheet
} from "react-native"
import { useState, useEffect, useContext } from "react"
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from "../context/context"

export default function ProfileHeader({navigation}) {
  const { details } = useContext(AppContext)
  
  return (
    <View style = {profile.header}>
        <Pressable style = {profile.backBtn} onPress = {() => navigation.pop()}>
          <Ionicons name="arrow-back" size={18} color="white"/>
        </Pressable>
        <Image
          source = {require('../assets/images/Logo.png')}
          resizeMode = 'contain'
          style = {profile.logo}
        />
        {details.uri ? <Image
          source = {{uri: details.uri}}
          resizeMode = 'contain'
          style = {profile.picture}
        /> : (
        <View style = {profile.placeholderImage}>
          <Text style = {profile.placeholderText}>{details.initials}</Text>
        </View>)
        }
      </View>
  )
}

const profile = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 15,
    flexDirection: "row",
    backgroundColor: "#ffffff"
  },
  backBtn: {
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "#495E57",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 150,
    height: 70,
  },
  picture: {
    width: 40,
    height: 40,
    borderRadius: 40,
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