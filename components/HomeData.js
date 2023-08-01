import {
  Text, View, Pressable, StyleSheet, FlatList
} from "react-native"
import { useEffect, useState } from "react"
import axios from "axios"

import RenderList from "./RenderList"

const HomeData = ({ font }) => {
  const sections = ["Starters", "Mains", "Desserts", "Drinks"]
  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json").then(res => {
      const fetchedData = res.data.menu
      setData(fetchedData)
      console.log();
    }).catch(err => {
      console.log(err);
    })
  }, [])
  
  return (
    <View style = {style.container}>
      <Text style = {{...style.headerText, fontFamily: font}}>ORDER FOR DELIVERY!</Text>
      <View style = {style.filterCont}>
        {sections.map((item,index) => (
          <Pressable
            style = {style.filterBtn}
            key = {index}
          >
            <Text style = {style.filterBtnText}>{item}</Text>
          </Pressable>
        ))}
      </View>
      <View style = {style.listBox}>
      <FlatList
        data = {data}
        renderItem = {({item}) => {
          return (
            <RenderList
              name = {item.name}
              description = {item.description}
              price = {item.price}
              image = {item.image}
              font = {font}
            />
          )
        }}
        style = {style.list}
      />
      </View>
    </View>
  )
}

export default HomeData

const style = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  filterCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filterBtn: {
    backgroundColor: "#EDEEEF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
  },
  filterBtnText: {
    color: "#495E57",
    fontWeight: "bold",
    fontSize: 12,
  },
  listBox: {
    marginVertical: 20,
    paddingVertical: 20,
    borderTopWidth: 0.5,
    borderTopColor: "#"
  },
  list: {
    
  }
})