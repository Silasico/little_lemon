import {
  Text, View, Pressable, StyleSheet, FlatList, ScrollView, Alert
} from "react-native"
import { useEffect, useState } from "react"
import axios from "axios"
import { createTable, saveData, getAllData, filterData } from "./Database"
import * as Sqlite from "expo-sqlite"

import RenderList from "./RenderList"

const db = Sqlite.openDatabase("little-lemon")


const HomeData = ({ font, query }) => {
  const sections = ["Starters", "Mains", "Desserts", "Drinks"]
  const [activeSections, setActiveSections] = useState([])
  const [data, setData] = useState([])
  
  useEffect(() => {
    const checkStorage = async () => {
      await createTable()
      try {
        let fetchedData = await getAllData()
        
        if(fetchedData.length > 0) {
          setData(fetchedData)
          setActiveSections([...sections])
        } else {
          axios.get("https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json").then(res => {
            fetchedData = res.data.menu
            setData(fetchedData)
            saveData(fetchedData)
          }).catch(err => {
            Alert.alert(err.message, "Please connect to the internet first time in the app")
            setData([])
          })
        }
        
      } catch (e) {console.log(e.message)}
    }
    
    checkStorage()
 } , [])
 
useEffect(() => {
  const renderUi = async () => {
    setData(await filterData(activeSections, query))
  }
  renderUi()
}, [activeSections, query])
 
 const checkButtonStyles = (item) => {
   let present
   for (var j = 0; j < activeSections.length; j++) {
     if (activeSections[j] == item) {
       present = true
       return style.activeBtn
       break;
     }else {
       present = false
     }
   }
   if (!present) {
     return style.filterBtn
   }
 }

const checkButtonTextStyles = (item) => {
   let present
   for (var j = 0; j < activeSections.length; j++) {
     if (activeSections[j] == item) {
       present = true
       return style.activeBtnText
       break;
     }else {
       present = false
     }
   }
   if (!present) {
     return style.filterBtnText
   }
 }

 const toggleActive = (item) => {
   let present
   let newArr
   for (var j = 0; j < activeSections.length; j++) {
     if (activeSections[j] == item) {
       present = true
       newArr = activeSections.filter(sec => sec != activeSections[j])
       setActiveSections(newArr)
       break
     } else {
       present = false
     }
   }
   
   if (!present) {
     newArr = [...activeSections, item]
     setActiveSections(newArr)
   }
 }
 
  
  return (
    <View style = {style.container}>
      <Text 
        style = {{...style.headerText, fontFamily: font}}
      >
        ORDER FOR DELIVERY!
      </Text>
      <View 
        style = {style.filterCont}
      >
        {sections.map((item, index) => (
          <Pressable
            style = {checkButtonStyles(item)}
            key = {index}
            onPress = {() => {
              toggleActive(item)
            }}
          >
            <Text 
              style = {checkButtonTextStyles(item)}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style = {style.listBox}>
      {data.length > 0 ? <FlatList
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
      /> : <Text style = {{...style.errorText, fontFamily: font}}>No item in this category</Text>}
      </View>
    </View>
  )
}

export default HomeData

const style = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  filterCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  filterBtn: {
    backgroundColor: "#EDEEEF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
  },
  activeBtn: {
    backgroundColor: "#495E57",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
  },
  filterBtnText: {
    color: "#495E57",
    fontWeight: "bold",
    fontSize: 12,
  },
  activeBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  listBox: {
    marginTop: 20,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    flex: 2
  },
  errorText: {
    textAlign: "center",
    fontSize: 20,
    color: "#999"
  }
})