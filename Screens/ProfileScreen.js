import React from 'react';
import {SafeAreaView, StyleSheet, View, Text,Image} from 'react-native';
import LottieView from 'lottie-react-native';

const SecondPage = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <LottieView
            key='animation'
            autoPlay
            resizeMode='cover'
            source={require('../assets/Watermelon.json')}
            style={{height:350,marginLeft:0,marginTop:0}}
        />
        <Text style={styles.placed}>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
  },
  placed:{
    fontSize:20,
  }
});