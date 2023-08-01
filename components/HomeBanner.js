import {
  View, Text, Image, StyleSheet
} from "react-native"
import { useState, useEffect } from "react"
import * as Font from "expo-font"
import { useFonts } from "expo-font"
import SearchBar from "./SearchBar";

const HomeBanner = () => {
  const [loading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState("")
  
  useEffect(()=> {
    const loadFont = async () => {
      await Font.loadAsync({
        "Karla-Regular": require("../assets/fonts/Karla-Regular.ttf"),
        "MarkaziText-Regular": require("../assets/fonts/MarkaziText-Regular.ttf")
      })
      setLoading(false)
    }
    loadFont()
  }, [])
  
  return (
    <View style = {banner.container}>
      <Text style = {loading ? banner.headerText : {...banner.headerText, fontFamily: "MarkaziText-Regular"}}>
      Little Lemon
      </Text>
      <View style = {banner.showcase}>
        <View style = {banner.showcaseTexts}>
          <Text style = {loading ? banner.showcaseHeader : {...banner.showcaseHeader, fontFamily: "MarkaziText-Regular"}}>Chicago</Text>
          <Text style = {loading ? banner.showcaseLines : {...banner.showcaseLines, fontFamily: "Karla-Regular"}}>We are a family owned Mediterranean Restaurant, focused on traditional recipes served with modern twist</Text>
        </View>
        <View style = {banner.imageBox}>
          <Image
            source = {require("../assets/images/Hero-image.png")}
            resizeMode = "cover"
            style = {banner.showcaseImage}
          />
        </View>
      </View>
      <View style = {banner.searchBox}>
        <SearchBar
          placeholder = "Enter your preferred delicacy to search"
          value = {searchValue}
          onClear = {() => setSearchValue("")}
          onChangeText = {val => setSearchValue(val)}
        />
      </View>
    </View>
  )
}

export default HomeBanner

const banner = StyleSheet.create({
  container: {
    backgroundColor: "#495E57",
    padding: 20,
  },
  headerText: {
    fontSize: 60,
    color: "yellow",
  },
  showcase: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  showcaseTexts: {
    flex: 1.5,
    marginRight: 10
  },
  showcaseHeader: {
    fontSize: 35,
    color: "#FFFFFF",
    marginBottom: 0,
  },
  showcaseLines: {
    fontSize: 16,
    color: "#FFFFFF"
  },
  imageBox: {
    flex: 1,
    marginLeft: 20,
  },
  showcaseImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  searchBox: {
    padding: 10,
  },
  search: {
    width: 200,
    height: 10,
    color: "#000000",
    fontSize: 16,
  }
})