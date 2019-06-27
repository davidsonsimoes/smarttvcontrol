import React, {Component} from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import Control from './pages/control'



export default class Index extends Component {
  render() {
    return (
      <Control />
    );
  }
}

