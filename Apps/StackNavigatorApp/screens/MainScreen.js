import React, { Component } from "react";
import { View, Button } from "react-native";

export default class MainScreen extends Component {
  static navigationOptions = {
    title: "Main Screen"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate("Profile", { name: "Jane" })}
        />
        <Button
          title="Go to press me screen"
          onPress={() => navigate("PressMe")}
        />
      </View>
    );
  }
}
