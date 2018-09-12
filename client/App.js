import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import { Header } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDB-_Xpb6MQGkom7BZk69o37KarWl-XK9k",
      authDomain: "authentication-93af9.firebaseapp.com",
      databaseURL: "https://authentication-93af9.firebaseio.com",
      projectId: "authentication-93af9",
      storageBucket: "authentication-93af9.appspot.com",
      messagingSenderId: "349513528502"
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  }
});
