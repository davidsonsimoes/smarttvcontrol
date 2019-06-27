import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Link } from "react-router-native";

import styles from './stylesheet/stylesheet';



export default class ConnectToTv extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Link to="/control" underlayColor="#f0f4f7">
          <View style={styles.connectButton}></View>
        </Link>
        <Text>Toque para conectar a TV</Text>
      </View>
      // <View style={styles.container}>
      //   <View style={styles.item1}>
      //   <Text style={{fontSize:20, color:"#fff"}}>Item number 1</Text>
      //   </View>
      //   <View style={styles.item2}>
      //   <Text style={{fontSize:20, color:"#fff"}}>Item number 1</Text>
      //   </View>
      //   <View style={styles.item3}>
      //   <Text style={{fontSize:20, color:"#fff"}}>Item number 1</Text>
      //   </View>
      //   <View style={styles.item4}>
      //   <Text style={{fontSize:20, color:"#fff"}}>Item number 1</Text>
      //   </View>
      // </View>
    );
  }
}