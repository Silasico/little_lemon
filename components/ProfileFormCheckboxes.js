import {
  View, Text, StyleSheet
} from "react-native"
import { useState } from "react"
import CheckBox from "expo-checkbox";

export default function ProfileFormCheckboxes({ details, setNewDetails }) {
  const [orderStatuses, setOrderStatuses] = useState(details.orderStatuses)
  const [passwordChanges, setPasswordChanges] = useState(details.passwordChanges)
  const [specialOffers, setSpecialOffers] = useState(details.specialOffers)
  const [newsletters, setNewsletters] = useState(details.newsletters)
  
  return (
    <View style = {checkbox.container}>
      <Text style = {checkbox.header}>Email Notification</Text>
      <View style = {checkbox.box}>
        <CheckBox
          disabled={false}
          value= {details.orderStatuses}
          onValueChange={(newValue) => {
            setOrderStatuses(newValue)
            setNewDetails({...details, orderStatuses: newValue})
            //console.log(details);
          }}
          color = "#495E57"
        />
        <Text style = {checkbox.label}>Order Statuses</Text>
      </View>
      <View style = {checkbox.box}>
        <CheckBox
          disabled={false}
          value= {details.passwordChanges}
          onValueChange={(newValue) => {
            setPasswordChanges(newValue)
            setNewDetails({...details, passwordChanges: newValue})
          }}
          color = "#495E57"
        />
        <Text style = {checkbox.label}>Password Changes</Text>
      </View>
      <View style = {checkbox.box}>
        <CheckBox
          disabled={false}
          value= {details.specialOffers}
          onValueChange={(newValue) => {
            setSpecialOffers(newValue)
            setNewDetails({...details, specialOffers: newValue})
          }}
          color = "#495E57"
        />
        <Text style = {checkbox.label}>Special Offers</Text>
      </View>
      <View style = {checkbox.box}>
        <CheckBox
          disabled={false}
          value= {details.newsletters}
          onValueChange={(newValue) => {
            setNewsletters(newValue)
            setNewDetails({...details, newsletters: newValue})
          }}
          color = "#495E57"
        />
        <Text style = {checkbox.label}>Newsletters</Text>
      </View>
    </View>
  )
}

const checkbox = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  header: {
    color: "#333333",
    fontSize: 15,
    marginTop: 10,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Karla-Regular"
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  label: {
    marginLeft: 10,
    fontFamily: "MarkaziText-Regular",
    fontSize: 18
  }
})