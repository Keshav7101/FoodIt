import React from 'react';
import { View, Text,TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';

const App = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/profile_images/530381904235610113/CVDbqftg_400x400.png',
          }}
          style={{ marginTop:20, marginLeft:30, width: 300, height: 150,borderTopRightRadius:30,borderBottomLeftRadius:30}}
        />
      </View>
      <TextInput
        style={{
          height: 45,
          width:280,
          borderColor: 'black',
          borderWidth: 2,
          marginLeft: 30,
          marginTop: 50,
          padding: 10,
          borderRadius:20
        }}
        placeholder= "Name"
      />
      
      <TextInput
        style={{
          height: 45,
          width:280,
          borderColor: 'black',
          borderWidth: 2,
          marginLeft: 30,
          marginTop: 20,
          padding:10,
          borderRadius:20
        }}
        placeholder= " Email"
      />

      <TextInput
        style={{
          height: 45,
          width:280,
          borderColor: 'black',
          borderWidth: 2,
          marginLeft: 30,
          marginTop: 20,
          padding:10,
          borderRadius:20
        }}
        placeholder= "Password"
      />
      <TextInput
        style={{
          height: 45,
          width:280,
          borderColor: 'black',
          borderWidth: 2,
          marginLeft: 30,
          marginTop: 20,
          padding:10,
          borderRadius:20
        }}
        placeholder= "Mobile No."
      />
      <View>
      <TouchableOpacity
            style={{alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            width: 280,
            marginTop: 20,
            marginLeft:30,
            borderRadius:20
          }}
            onPress={
              () => navigation.navigate('')
            }>
            <Text>SignUp</Text>
          </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity
            style={{alignItems: 'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            width: 280,
            marginTop: 20,
            marginLeft:30,
            borderRadius:20
          }}
            onPress={
              () => navigation.navigate('Login')
            }>
            <Text>Back to login</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default App;
