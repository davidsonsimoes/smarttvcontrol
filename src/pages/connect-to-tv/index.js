import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Link } from "react-router-native";



export default class ConnectToTv extends Component {
  render() {
    return (
      <View>
          <Text>Connect To Tv Page</Text>
          <Link to="/control" underlayColor="#f0f4f7">
            <Text>Control</Text>
          </Link>
      </View>
    );
  }
}

