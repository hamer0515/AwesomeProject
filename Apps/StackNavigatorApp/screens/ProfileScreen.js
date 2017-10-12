import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Jane's profile"
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>{params.name}</Text>
      </View>
    );
  }
}
