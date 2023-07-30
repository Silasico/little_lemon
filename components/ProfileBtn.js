import {
  Pressable, Text, StyleSheet
} from "react-native"

const profileBtn = ({bgColor = "#495E57", bColor = "#ffffff", name, onPress, color = "#ffffff" }) => {
  return(
    <Pressable
      style = {{
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 4,
        backgroundColor: bgColor,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: bColor,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress = {onPress}
    >
      <Text style = {{
        color: color,
        fontSize: 12,
        fontWeight: "bold"
      }}>{name}</Text>
    </Pressable>
  )
}
export default profileBtn

const btnStyle = StyleSheet.create({
  darkBtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: "#495E57",
    marginHorizontal: 10
  },
  lightBtn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#495E57",
    marginHorizontal: 10
  },
  darkBtnText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold"
  },
  lightBtnText: {
    color: "#495E57",
    fontSize: 12,
    fontWeight: "bold"
  },
})