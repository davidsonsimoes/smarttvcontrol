import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from "react-router-native";
import { db } from '../utils/firebase';



export default class Control extends Component {

  // changeData() {
  //   db.update({
  //     mobile: "Whindows Phone"
  //   })
  // }
  render() {
    
    return (
      <View>
          <Text>Control</Text>
          <Link to="/" underlayColor="#f0f4f7">
            <Text>Home</Text>
          </Link>
          {/* <Button
          title="Change"
          onPress={() => this.changeData()}
           /> */}
      </View>
    );
  }
}

