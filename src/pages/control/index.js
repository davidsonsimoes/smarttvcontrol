import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Link } from "react-router-native";


export default class Control extends Component {
  render() {
    return (
      <View>
          <Text>Control</Text>
          <Link to="/" underlayColor="#f0f4f7">
            <Text>Home</Text>
          </Link>
      </View>
    );
  }
}

