import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Link } from "react-router-native";
import styled from 'styled-components';




export default class ConnectToTv extends Component {
  render() {
    return (
      <View>
          <Text>Connect To Tv Page</Text>
          <Link to="/control">
          <ConnectButton>

          </ConnectButton>
          </Link>
      </View>
    );
  }
}


const ConnectButton = styled.View`
  position: relative;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  display: flex;
  width: 100px;
  height: 100px;
  font-size: 1px;
  background: #5a99d4;
`;
