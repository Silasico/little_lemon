import {
  View, Text, Image, StyleSheet
} from "react-native"
import { useState } from "react"
import { useFonts } from "expo-font"
import SearchBar from "./SearchBar";

const HomeBanner = ({ headerFont, bodyFont, setQuery, updateList }) => {
  const [searchValue, setSearchValue] = useState("")
  
  
  
  return (
    <View style = {banner.container}>
      <Text style = {{...banner.headerText, fontFamily: headerFont}}>
      Little Lemon
      </Text>
      <View style = {banner.showcase}>
        <View style = {banner.showcaseTexts}>
          <Text style = {{...banner.showcaseHeader, fontFamily: headerFont}}>Chicago</Text>
          <Text style = {{...banner.showcaseLines, fontFamily: bodyFont}}>We are a family owned Mediterranean Restaurant, focused on traditional recipes served with modern twist</Text>
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
          onClear = {() => setQuery("")}
          onChangeText = {val => {
            setQuery(val)
          }}
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
    flex: 4,
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
    flex: 2,
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