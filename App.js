import React, {Component} from 'react'
import { View, SafeAreaView } from 'react-native'
import { NativeRouter, Route } from 'react-router-native'

import ConnectToTv from './src/pages/connect-to-tv'
import Control from './src/pages/control'



export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <View style={{flex: 1}}>
            <Route exact path="/" component={ConnectToTv} />
            <Route path="/control" component={Control} />
          </View>
        </SafeAreaView>
      </NativeRouter>
    );
  }
}

