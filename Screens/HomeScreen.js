import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View>
      <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.Y9l3CWSz5B50kLes_LMr0AHaE8?pid=ImgDet&rs=1',
          }}
          style={{ marginTop:20, marginLeft:5,
            borderRadius:20,
            width: 350, height: 200}}
        />
      <View style={{ flex: 1, padding: 16 }}>
      </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Hungry! FoodIt
          </Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 320,
    height:170,
    marginTop: 16,
    marginBottom:5,
    borderRadius:20
  },
});
export default HomeScreen;
