import * as React from 'react';
import { View, Text, SafeAreaView,Button,TouchableOpacity,StyleSheet,Image } from 'react-native';

const CartScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
      <Image
              source={require('../assets/images/ok.png')}
              style={Styles.sliderImage}
            />
      </View>
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
    sliderImage: {
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        height:100,
        width:100,
    }
})
export default CartScreen;
