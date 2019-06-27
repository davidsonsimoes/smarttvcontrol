import React, {Component} from 'react';
import { View, SafeAreaView } from 'react-native';
import Index from './src/index'



export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 1}}>
          <Index />
        </View>
      </SafeAreaView>
    );
  }
}

