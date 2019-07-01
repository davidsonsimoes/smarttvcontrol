import React, {Component} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Pulse from 'react-native-pulse';
import { Redirect } from "react-router-native";
import { db } from '../utils/firebase';

import styles from './stylesheet/stylesheet';



export default class ConnectToTv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smartTv: '',
      tvSelected: false
    };
  }
  getTvData() {
    db.on('value', (snapshot) => {
      const messageObject = snapshot.val();
      if (messageObject) {
        this.setState({
          smartTv: messageObject.smarttv,
          tvSelected: messageObject.isConected
        });
      }
    })
  }
  onConnect() {
    db.update({
      smarttvcontrol: true,
      mobile: DeviceInfo.getDeviceName()
    })
  }

  render() {
    const tvFound = this.state.smartTv;
    const tvSelected = this.state.tvSelected;
    let buttonOrLabbel;

    if (tvSelected === true) {
      return <Redirect to='/control' />
    }

    if (tvFound == '') {
      buttonOrLabbel = <Text style={{marginTop: 25, color: "grey"}}>Nenhuma TV encontrada.</Text>;
    } else {
      buttonOrLabbel = (
      <TouchableOpacity style={styles.connectButton} onPress={() => this.onConnect()}>
        <Text style={{ color: 'white' }}>{this.state.smartTv}</Text>
      </TouchableOpacity>
      );
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.findTvButton} title="Change" onPress={() => this.getTvData()}>
          <Pulse color='red' numPulses={3} diameter={200} speed={20} duration={1000} />
        </TouchableOpacity>
        <Text style={{marginTop: 25}}>Toque para conectar a TV</Text> 
        {buttonOrLabbel}
      </View>
    );
  }
}