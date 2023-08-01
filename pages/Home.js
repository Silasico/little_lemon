import {
  View,
  Text,
  Image,
  StyleSheet, Pressable
} from "react-native"

import HomeHeader from "../components/HomeHeader"
import HomeBanner from "../components/HomeBanner"
//https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json

const Home = ({ navigation }) => {
  return (
    <View style = {home.container}>
      <HomeHeader
        navigation = {navigation}
      />
      <HomeBanner />
    </View>
  )
}
export default Home

const home = StyleSheet.create({
  container: {
    //flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
  }
})