import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LottieView from 'lottie-react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: "#253DF9"}}>
        <Text style={{color: "white", fontSize: 20}}> textInComponent 2 </Text>
        {/* <LottieView source={require('./Lottie/33756-community-logo-animation.json')} autoPlay loop={false} /> */}
        <LottieView source={require('./Lottie/ezgif.com-crop.mp4.lottie.json')} autoPlay loop={false} />
        
      </View>
    )
  }
}
