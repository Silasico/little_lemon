import {
  Text, Image, View, StyleSheet, Pressable
} from "react-native"
import { useState, useEffect } from "react"

import { imgArr } from "./ImageResources"


const RenderList = ({ name, description, price, category, onPress, index }) => {
  const [imageSource, setImageSource] = useState(null)
  
  useEffect(() => {
    imgArr.map(img => img.name === name && setImageSource(img.source))
  }, [index])
  
  return (
    <Pressable 
      style = {style.container}
      onPress = {onPress}
    >
      <View style = {style.descriptionBox}>
        <Text style = {style.name}>
          {name}
        </Text>
        <Text style = {style.descriptions}>
          {description}
        </Text>
        <Text style = {style.price}>
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
    fontFamily: "Karla-Regular"
  },
  descriptions: {
    color: "#495E57",
    fontSize: 14,
    marginBottom: 10,
    fontFamily: "Karla-Regular",
  },
  price: {
    color: "#495E57",
    fontSize: 16,
    fontFamily: "Karla-Regular",
  },
  imageBox: {
  },
  image: {
    width: 80,
    height: 80
  }
})