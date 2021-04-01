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
      </View>
      <View style={{ flex: 1, padding: 16 }}>
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
            Hungry? FoodIt
          </Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('SurajDhaba')
            }>
              <View>
              <Image
          source={{uri:'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/08/Masala-Dosa1.jpg',}}
          style={{
            height:120,
            width:295,
            marginLeft:3,
            borderRadius:20
          }}
        />
        </View>
        <Text style={{marginTop:5,marginLeft:10,fontSize:20}}>Suraj Dhaba</Text>
          </TouchableOpacity>
        </View>

          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('Spicy')
            }>
              <Image
          source={{
            uri:
              'https://i.redd.it/8oxnulzkqza11.jpg',
          }}
          style={{
            height:120,
            width:295,
            marginLeft:3,
            borderRadius:20
          }}
        />
            <Text style={{marginTop:5,marginLeft:10,fontSize:20}}>Spicy Restaurant</Text>
          </TouchableOpacity>
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
