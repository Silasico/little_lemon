import {
  View,
  Text,
  Image,
  StyleSheet, Pressable
} from "react-native"

const Home = ({navigation}) => {
  return (
    <View style = {home.container}>
      <Text>Welcome to the Home Screen</Text>
      <Pressable
        onPress = {() => navigation.navigate("Profile")}
      ><Text>Profile Page</Text></Pressable>
    </View>
  )
}
export default Home

const home = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})