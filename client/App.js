import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner, CardSection } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: null
    };
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDB-_Xpb6MQGkom7BZk69o37KarWl-XK9k",
      authDomain: "authentication-93af9.firebaseapp.com",
      databaseURL: "https://authentication-93af9.firebaseio.com",
      projectId: "authentication-93af9",
      storageBucket: "authentication-93af9.appspot.com",
      messagingSenderId: "349513528502"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication" />
        {this.renderContent()}
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
