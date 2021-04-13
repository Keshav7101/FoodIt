import * as React from 'react';
import { View, Text, SafeAreaView,Button } from 'react-native';

const ConfirmScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
              <Text>Your Order Is Confirmed</Text>	
		</View>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default ConfirmScreen;
