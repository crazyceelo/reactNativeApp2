import React, { Component } from "react";
import { TextInput } from "react-native";
import { Button, Card, CardSection } from "./common";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text: text })}
            style={{ height: 40, width: 100 }}
          />
        </CardSection>
        <CardSection />

        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
