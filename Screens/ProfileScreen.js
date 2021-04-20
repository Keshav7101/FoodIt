import React from 'react';
import {SafeAreaView, StyleSheet, View, Text,Image,Button} from 'react-native';
import LottieView from 'lottie-react-native';

const SecondPage = ({navigation,route}) => {
  
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
        title="Edit Profile"
        onPress={() => navigation.navigate('Edit')}
        />
        <Text style={{ margin: 10 }}>Hello {route.params?.post}</Text>
        </View>
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