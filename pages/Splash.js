import { View, Text, Image, StyleSheet } from "react-native"

const Splash = () => {
  return (
    <View style = {splash.container}>
      <Image
        source = {require('../assets/images/Logo.png')}
        resizeMode = 'contain'
        style = {splash.logo}
      />
      <Text style = {splash.name}>Little Lemon Restaurant</Text>
    </View>
  )
}
export default Splash

const splash = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20
  },
  name: {
    color: "#495E57",
    fontWeight: "bold",
    fontSize: 30,
  }
})