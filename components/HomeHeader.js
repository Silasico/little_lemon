import {
  View, Image, StyleSheet, Pressable
} from "react-native"


const HomeHeader = ({ navigation }) => {
  
  
  return (
    <View style = {header.container}>
      <View style = {header.logoBox}>
        <Image
          source = {require("../assets/images/Logo.png")}
          style = {header.logo}
          resizeMode = "contain"
        />
      </View>
      <Pressable
        onPress = {() => navigation.navigate("Profile")}
        style = {header.imageBox}
      >
        <Image
          source = {require("../assets/images/Profile.png")}
          style = {header.image}
          resizeMode = "contain"
        />
      </Pressable>
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
  }
})