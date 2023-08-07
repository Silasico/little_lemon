import {
  View, TextInput,Pressable, StyleSheet
} from "react-native"
import { useState } from "react"
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ value, onChangeText, onClear, onSearch, placeholder }) => {
  const [val, setVal] = useState("")
  
  return (
    <View style = {search.container}>
      <Pressable style = {search.searchIcon}
        onPress = {onSearch}
      >
        <AntDesign name="search1" size={18} color="black" />
      </Pressable>
      <View style = {search.input}>
        <TextInput
          value = {val}
          onChangeText = {(newval) => {
            setVal(newval)
            onChangeText(newval)
          }}
          placeholder = {placeholder}
        />
      </View>
      <Pressable 
        style = {search.clearIcon}
        onPress = {() => {
          setVal("")
          onClear()
        }}
      >
        <AntDesign name="close" size={18} color="black" />
      </Pressable>
    </View>
  )
}

export default SearchBar

const search = StyleSheet.create({
  container: {
    backgroundColor: "#EDEEEF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    color: "#000000",
    fontSize: 20,
    flex: 1
  },
  clearIcon: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  }
})