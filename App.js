import { StyleSheet, Text, View, Platform } from 'react-native';
import { useContext } from "react";
import Navigation from './components/Navigation'
import { StatusBar } from 'expo-status-bar';
import Constant from "expo-constants";
import DetailsContext, { AppContext } from "./context/context"

export default function App() {
  return (
    <View style = {styles.container}>
      <StatusBar
        animated = {true}
        hidden = {false}
        style = {"light"}
        backgroundColor = {"#495E57"}
      />
      <DetailsContext>
        <Navigation />
      </DetailsContext>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constant.statusBarHeight : null,
  },
});
