import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const SecondPage = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <LottieView
            key='animation'
            autoPlay
            resizeMode='cover'
            source={require('../assets/cart-checkout.json')}
            style={{height:300,marginLeft:6}}
        />
        <Text style={styles.placed}>Your order is placed</Text>
        <Text style={styles.textStyle}>
          Your Order will be delivered at {'\n'} {route.params.paramKey}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
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