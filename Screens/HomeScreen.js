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

import Swiper from 'react-native-swiper';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/banner4.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/banner1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/banner2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/banner3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>
      <View style={{ flex:1}}>
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
        <View style={{flex:1}}>
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
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
export default HomeScreen;
