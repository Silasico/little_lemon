import {
  Text, Image, View, StyleSheet
} from "react-native"




const RenderList = ({ name, description, price, image, font }) => {

  
  return (
    <View style = {style.container}>
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
          source = {{uri: `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${image}?raw=true`}}
          resizeMode = "cover"
          style = {style.image}
        />
      </View>
    </View>
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
    flex: 4,
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
    flex: 2
  },
  image: {
    width: 80,
    height: 80
  }
})