import {
  Text, View, Pressable, StyleSheet, FlatList, ScrollView, Alert
} from "react-native"
import { useEffect, useState } from "react"
import axios from "axios"
import { createTable, saveData, getAllData, filterData } from "./Database"
import * as Sqlite from "expo-sqlite"
import RenderList from "./RenderList"
import ProductModal from "./ProductModal"

const db = Sqlite.openDatabase("little-lemon")


const HomeData = ({ query }) => {
  const sections = ["Starters", "Mains", "Desserts", "Drinks"]
  const [activeSections, setActiveSections] = useState(sections)
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})
  
  
  useEffect(() => {
    const checkStorage = async () => {
      await createTable()
      try {
        let fetchedData = await getAllData()
        
        if(fetchedData.length > 0) {
          setData(fetchedData)
          setActiveSections(sections.map(section => section.toLowerCase()))
        } else {
          axios.get("https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json").then(res => {
            fetchedData = res.data.menu
            setData(fetchedData)
            setFilteredData(data)
            saveData(fetchedData)
            setActiveSections(sections.map(section => section.toLowerCase()))
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
    /*const renderUi = async () => {
      setData(await filterData(activeSections, query))
    }*/
    const renderUi = () => {
      setFilteredData(data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()) && activeSections.includes(item.category)))
    }
    renderUi()
  }, [activeSections, query])
 
 const checkButtonStyles = (item) => {
   let present
   for (var j = 0; j < activeSections.length; j++) {
     if (activeSections[j] == item.toLowerCase()) {
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
     if (activeSections[j] == item.toLowerCase()) {
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
     if (activeSections[j] == item.toLowerCase()) {
       present = true
       newArr = activeSections.filter(sec => sec != activeSections[j])
       setActiveSections(newArr)
       break
     } else {
       present = false
     }
   }
   
   if (!present) {
     newArr = [...activeSections, item.toLowerCase()]
     setActiveSections(newArr)
   }
 }
 
 const handleProductPress = (item) => {
   setSelectedItem(item)
   setModalVisible(true)
   
 }
  
  return (
    <View style = {style.container}>
    
      <ProductModal
        visible = {modalVisible}
        handleCloseModal = {() => setModalVisible(false)}
        selectedItem = {selectedItem}
        
      />
      
      <Text 
        style = {style.headerText}
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
      {filteredData.length > 0 ? <FlatList
        data = {filteredData}
        renderItem = {({item, index}) => {
          return (
            <RenderList
              name = {item.name}
              description = {item.description}
              price = {item.price}
              image = {item.image}
              onPress = {() => handleProductPress(item)}
              index = {index}
            />
          )
        }}
        style = {style.list}
        showsVerticalScrollIndicator = {false}
      /> : <Text style = {style.errorText}>No item in this category</Text>}
      </View>
    </View>
  )
}

export default HomeData

const style = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Karla-Regular"
  },
  filterCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
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
    marginTop: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    flex: 2
  },
  errorText: {
    textAlign: "center",
    fontSize: 20,
    color: "#999",
    fontFamily: "Karla-Regular"
  }
})