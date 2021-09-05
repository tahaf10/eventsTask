import React, { Component } from 'react';
import {View, Text} from 'react-native';

export type SplashScreenParams = undefined;

class SplashScreen extends Component {

  async componentDidMount() {

  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white',justifyContent:'center',alignItems:'center' }}>



        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontWeight:'bold',fontSize:40}}>This is the SplashScreen</Text> 
        
        </View>

        

      </View>
    )
  }
}
export default SplashScreen;
