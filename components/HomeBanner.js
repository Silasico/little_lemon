import {
  View, Text, Image, StyleSheet
} from "react-native"
import { useState, useCallback } from "react"
import { useFonts } from "expo-font"
import SearchBar from "./SearchBar";
import debounce from "lodash.debounce"

const HomeBanner = ({ headerFont, bodyFont, setQuery, updateList }) => {
  
  const delayQuery = (value) => {
    setQuery(value)
  }
  const debouncedQuery = debounce(delayQuery, 500)
  
  
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
          onClear = {() => setQuery("")}
          onChangeText = {debouncedQuery}
        />
      </View>
    </View>
  )
}

export default HomeBanner

const banner = StyleSheet.create({
  container: {
    backgroundColor: "#495E57",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 50,
    color: "yellow",
  },
  showcase: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  showcaseTexts: {
    flex: 1,
    marginRight: 10
  },
  showcaseHeader: {
    fontSize: 25,
    color: "#FFFFFF",
    marginBottom: 0,
  },
  showcaseLines: {
    fontSize: 16,
    color: "#FFFFFF"
  },
  imageBox: {
    marginLeft: 20,
  },
  showcaseImage: {
    width: 80,
    height: 80,
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