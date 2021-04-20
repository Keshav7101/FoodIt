import React from 'react';
import {SafeAreaView, StyleSheet, View, Text,Image,Button} from 'react-native';
import LottieView from 'lottie-react-native';

const SecondPage = ({navigation,route}) => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../assets/images/user2.png')}
          style={{ marginTop:0, width: 120, height: 120, borderTopRightRadius:30,borderBottomLeftRadius:30}}
        />
        <View style={{flex:0}}>
        <Button
        title="Edit Profile"
        onPress={() => navigation.navigate('Edit')}
        />
        </View>
        <Text style={{ margin: 10 }}>Hello {route.params?.post}</Text>
        </View>
        <LottieView
            key='animation'
            autoPlay
            resizeMode='cover'
            source={require('../assets/Watermelon.json')}
            style={{height:350,marginLeft:0,marginTop:0}}
        />
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
});