import {
  Text, View, Image, StyleSheet, Alert
} from "react-native"
import {useState, useEffect} from "react"
import * as ImagePicker from "expo-image-picker"

import ProfileBtn from "./ProfileBtn"

export default function ProfileImageBox({ details, setNewDetails }) {
  
  // const changeProfilePicture = async () => {
  //   const result = await DocumentPicker.getDocumentAsync({})
  //   if (result && !result.canceled) {
  //     setNewDetails({...details, uri: result.assets[0].uri})
  //   }
  // }
  
  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setNewDetails({...details, uri: result.assets[0].uri})
        
      }
    } catch (error) {
      Alert.alert("Error picking an image", error);
    }
  };

  
  const removeProfilePicture = () => {
    Alert.alert("Are you sure you want to remove your profile picture?", "", [
        {
          text: "Yes",
          onPress: () => details.uri ? setNewDetails({...details, uri: ""}) : Alert.alert("You don't have a profile picture")
        },
        {
          text: "No"
        }
      ])
  }
  
  return (
    <View style = {box.container}>
      <View style = {box.imageBox}>
        <Text style = {box.text}>Avatar</Text>
        {details.uri ? <Image
          source = {{uri: details.uri}}
          resizeMode = 'contain'
          style = {box.picture}
        /> : (
        <View style = {box.placeholderImage}>
          <Text style = {box.placeholderText}>{details.initials}</Text>
        </View>)
        }
      </View>
      <View style = {box.btnBox}>
        <ProfileBtn
          bgColor = "#495E57"
          bColor= "#ffffff"
          name = "Change"
          color = "#ffffff"
          onPress = {pickImage}
          style = {box.btn}
        />
        <ProfileBtn
          bgColor = "#FFFFFF"
          bColor= "#495E57"
          name = "Remove"
          color = "#495E57"
          onPress = {removeProfilePicture}
          style = {box.btn}
        />
      </View>
    </View>
  )
}

const box = StyleSheet.create({
  container: {
    paddingRight: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginBottom: 25,
  },
  text: {
    fontSize: 10,
    marginBottom: 10,
  },
  picture: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
   placeholderImage: {
    width: 60,
    height: 60,
    backgroundColor: "orange",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  placeholderText: {
    fontSize: 35,
    color: "#FFFFFF",
    fontFamily: "Karla-Regular",
    fontWeight: "bold"
  },
  imageBox: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnBox: {
    flexDirection: "row",
    marginTop: 20,
    paddingRight: 20,
    gap: 10,
  },
  btn: {
    marginRight: 20
  }
})