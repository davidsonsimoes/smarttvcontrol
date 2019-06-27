import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from "react-router-native";

//Styles
import {
  HeaderDiv,
  HeaderText,
  ButtonDiv,
  UpAndDownDiv,
  LeftAndRightDiv
} from './styles'


export default class Control extends Component {

  renderHeader = () => (
    <HeaderDiv>
      <HeaderText>Você está no controle</HeaderText>
    </HeaderDiv>
  )

  renderButtons = () => {
    return (
      <View>
        <Button title="up" />
        <Button title="down" />
        <Button title="left" />
        <Button title="right" />
        <Button title="ok" />
        
      </View>
    )
  }

  render() {
    return (
      <View>
          {this.renderHeader()}
          {this.renderButtons()}
          <Link to="/" underlayColor="#f0f4f7">
            <Text>Home</Text>
          </Link>
      </View>
    );
  }
}

