import {
  Text, Image, View, StyleSheet, Pressable
} from "react-native"
import { useState, useEffect } from "react"

import { imgArr } from "./ImageResources"


const RenderList = ({ name, description, price, font, category, onPress }) => {
  const [imageSource, setImageSource] = useState(null)
  
  useEffect(() => {
    imgArr.map(img => img.name === name && setImageSource(img.source))
  }, [])
  
  return (
    <Pressable 
      style = {style.container}
      onPress = {onPress}
    >
      <View style = {style.descriptionBox}>
        <Text style = {{...style.name, fontFamily: font}}>
          {name}
        </Text>
        <Text style = {{...style.descriptions, fontFamily: font}}>
          {description}
        </Text>
        <Text style = {{...style.price, fontFamily: font}}>
          ${price}
        </Text>
      </View>
      <View style = {style.imageBox}>
        <Image
          source = {imageSource}
          resizeMode = "cover"
          style = {style.image}
        />
      </View>
    </Pressable>
  )
}

export default RenderList

const style = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 20,
  },
  descriptionBox: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descriptions: {
    color: "#495E57",
    fontWeight: "light",
    fontSize: 14,
    marginBottom: 10,
  },
  price: {
    color: "#495E57",
    fontSize: 16,
  },
  imageBox: {
  },
  image: {
    width: 80,
    height: 80
  }
})