import * as React from 'react';
import { View, Text, SafeAreaView,Button,TouchableOpacity } from 'react-native';

const CartScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
      <TouchableOpacity
            style={{alignItems: 'center',
            justifyContent:'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            width: 280,
            marginTop: 16,
            marginLeft:30 ,
            borderRadius:20
          }}
            onPress={
              () => navigation.navigate('OrderConfirmation')
            }>
            <Text>Checkout</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default CartScreen;
