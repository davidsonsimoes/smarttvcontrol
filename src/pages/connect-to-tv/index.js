import React, {Component} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Link } from "react-router-native";
import Pulse from 'react-native-pulse';
import { db } from '../utils/firebase';

import styles from './stylesheet/stylesheet';



export default class ConnectToTv extends Component {
  constructor(props) {
    super(props);
    this.state = {smartTv: ''};
  }
  getTvData() {
    db.on('value', (snapshot) => {
      const messageObject = snapshot.val();
      if (messageObject) {
        this.setState({
          smartTv: messageObject.smarttv
        });
      }
    })
  }
  onConnect() {
    db.update({
      smarttvcontrol: true
    })
  }

  render() {
    const tvFound = this.state.smartTv;
    let buttonOrLabbel;

    if (tvFound == '') {
      buttonOrLabbel = <Text>Nenhuma TV encontrada.</Text>;
    } else {
      buttonOrLabbel = (
      <TouchableOpacity style={styles.connectButton} onPress={() => this.onConnect()}>
        <Text>{this.state.smartTv}</Text>
      </TouchableOpacity>
      );
    }
    return (
      <View style={styles.container}>
        {/* <Link to="/control" underlayColor="#f0f4f7"> */}
          <TouchableOpacity style={styles.findTvButton} title="Change" onPress={() => this.getTvData()}>
            <Pulse color='red' numPulses={3} diameter={200} speed={20} duration={1000} />
          </TouchableOpacity>
        {/* </Link> */}
        <Text>Toque para conectar a TV Atual {this.state.smartTv}</Text> 
        {buttonOrLabbel}
      </View>
    );
  }
}