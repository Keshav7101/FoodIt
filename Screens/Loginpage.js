import * as React from 'react';
import {SafeAreaView, View,TouchableOpacity, Text, Image, ScrollView, TextInput, Header, Button, ImageBackground } from 'react-native';

const App = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <View>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/profile_images/530381904235610113/CVDbqftg_400x400.png',
          }}
          style={{ marginTop:20, marginLeft:30, width: 300, height: 150, borderTopRightRadius:30,borderBottomLeftRadius:30}}
        />
      </View>
      <TextInput
        style={{
          height: 45,
          width:280,
          borderColor: 'black',
          borderWidth: 2,
          marginLeft: 30,
          marginTop: 70,
          padding: 10,
          borderRadius:20
        }}
        placeholder= "  Loginid"
      />
      
      <TextInput
        style={{
          height: 45,
          width:280,
          borderColor: 'black',
          borderWidth: 2,
          marginLeft: 30,
          marginTop: 30,
          padding:10,
          borderRadius:20
        }}
        placeholder= "  Password"
      />
      <View>
      <TouchableOpacity
            style={{alignItems: 'center',
            justifyContent:'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            width: 280,
            marginTop: 20,
            marginLeft:30,
            borderRadius:20,
          }}
            onPress={
              () => navigation.navigate('')
            }>
            <Text>Login</Text>
          </TouchableOpacity>
      </View>
      <View style={{justifyContent:'center'}}>
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
              () => navigation.navigate('Signup')
            }>
            <Text>Signup</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

export default App;
