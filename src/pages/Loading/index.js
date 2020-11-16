import React from 'react';
import {View, Text, Image} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>LOADING...</Text>

      <LottieView
        source={require('../../assets/lotties/28245-fishing-bowl.json')}
        imageAssetsFolder={'images'}
        loop
        autoPlay
        style={{width: 150, height: 150}}
      />
    </View>
  );
}
