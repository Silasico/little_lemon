import {
  View, TextInput, Text, StyleSheet
} from "react-native"
import { useState, useEffect } from "react"

export default function ProfileForm({ details, setNewDetails, setError }) {
  
  return (
    <View style = {form.container}>
      <Text style= {form.label}>First Name</Text>
      <TextInput
        value = {details.firstName}
        placeholder = "Enter your first name"
        onChangeText = {value => {
          setNewDetails({...details, firstName: value})
          if (!value) {
            setError(true)
          } else {
            setError(false)
          }
        }}
        style = {form.input}
      />
      <Text style = {!details.firstName ? {color: "red", fontWeight: "bold", fontSize: 10, marginBottom: 10} : {display: "none"}}>First Name cannot be empty</Text>
      <Text style= {form.label}>Last Name</Text>
      <TextInput
        value = {details.lastName}
        placeholder = "Enter your last name"
        onChangeText = {value => {
          setNewDetails({...details, lastName: value})
          if (!value) {
            setError(true)
          } else {
            setError(false)
          }
        }}
        style = {form.input}
      />
      <Text style = {!details.lastName ? {color: "red", fontWeight: "bold", fontSize: 10, marginBottom: 10 } : {display: "none"}}>Last Name cannot be empty</Text>
      <Text style= {form.label}>Email</Text>
      <TextInput
        value = {details.email}
        placeholder = "Enter your email address"
        onChangeText = {value => {
          setNewDetails({...details, email: value})
          if (!value) {
            setError(true)
          } else {
            setError(false)
          }
        }}
        style = {form.input}
        keyboardType = "email-address"
      />
      <Text style = {!details.email ? {color: "red", fontWeight: "bold", fontSize: 10, marginBottom: 10} : {display: "none"}}>Emaill Address cannot be empty</Text>
      <Text style= {form.label}>Phone Number</Text>
      <TextInput
        value = {details.phone}
        placeholder = "Enter your Phone Number"
        onChangeText = {value => {
          setNewDetails({...details, phone: value})
          if (!value) {
            setError(true)
          } else {
            setError(false)
          }
        }}
        style = {form.input}
        keyboardType = "phone-pad"
      />
      <Text style = {!details.phone ? {color: "red", fontWeight: "bold", fontSize: 10, marginBottom: 10} : {display: "none"}}>Phone Number cannot be empty</Text>
    </View>
  )
}

const form = StyleSheet.create({
  container: {
    
  },
  label: {
    fontSize: 10,
    color: "#333333",
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "Karla-Regular",
  },
  input: {
    borderWidth: 0.7,
    borderColor: "#495E57",
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 7,
    fontFamily: "MarkaziText-Regular",
    fontSize: 18,
  }
})