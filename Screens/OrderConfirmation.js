import * as React from 'react';
import { View, Text, SafeAreaView,Button,TouchableOpacity,StyleSheet,Image } from 'react-native';
import LottieView from 'lottie-react-native';

const CartScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <LottieView 
            key='animation'
            autoPlay
            resizeMode='cover'
            source={require('../assets/cart-checkout.json')}
            style={{height:300,marginLeft:8}}
        />
        <Text style={styles.confirmtext}>Your Order is Placed</Text>
        <Text style={styles.placeconfirm}>Your Order Will be delivered at</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    confirmtext:{
        fontSize:20,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:70
    },
    placeconfirm:{
        fontSize:20,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20
    }
})
export default CartScreen;
