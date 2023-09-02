import { Modal, View, Text, Pressable, StyleSheet, Image, ScrollView } from "react-native"
import { useState, useEffect } from "react"
import { Ionicons } from '@expo/vector-icons';
import { imgArr } from "./ImageResources"
import ProfileBtn from "./ProfileBtn"

const ProductModal = ({visible, handleCloseModal, selectedItem}) => {
  const [imageSource, setImageSource] = useState(null)
  
  useEffect(() => {
    imgArr.map(img => img.name === selectedItem.name && setImageSource(img.source))
  }, [selectedItem])
  
  return (
    <Modal
      animationType = "slide"
      transparent = {true}
      statusBarTranslucent = {true}
      visible = {visible}
      onRequestClose ={handleCloseModal}
      statusBarTranslucent = {false}
    >
      <Pressable 
        style = {styles.modalBackdrop}
        onPress = {handleCloseModal}
      >
        <Pressable 
          style = {styles.modalContainer}
          onPress = {() => {}}
        >
          <View style = {styles.container}>
            <View style = {styles.header}>
              <Pressable
                onPress = {handleCloseModal}
              >
                <Ionicons name="arrow-back" size={22} color="black"/>
              </Pressable>
            </View>
            <Image
              source = {imageSource}
              style = {{width: "100%", height: 250,}}
              resizeMode = {"cover"}
            />
            <View style = {{padding: 10}}>
              <View style ={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 0.5, marginBottom: 10}}>
                <Text style = {{fontSize: 30, fontFamily: "MarkaziText-Regular"}}>{selectedItem.name}</Text>
                <Text style = {{fontSize: 18, fontFamily: "Karla-Regular"}}>${selectedItem.price}</Text>
              </View>
              <Text style = {{fontSize: 20, fontFamily: "MarkaziText-Regular", marginBottom: 10}}>• {selectedItem.description}</Text>
              <Text style = {{fontSize: 18, fontFamily: "MarkaziText-Regular", textAlign: "right", color: "orange", marginBottom: 20}}>Category: {selectedItem.category}</Text>
              <ProfileBtn
                name = {`Proceed to order for $${selectedItem.price}`}
                onPress = {handleCloseModal}
              />
            </View>
            
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  )
}

export default ProductModal

const styles = StyleSheet.create({
  modalBackdrop:{
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    height: "100%",
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  header: {
    padding: 15
  },
  container: {
    overflow: "scroll"
  }
})