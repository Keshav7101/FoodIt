import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StatusBar } from 'react-native';

const App = () => {
  return (
    <View>
      <StatusBar  
                    backgroundColor = "#ff7417"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />
                
      <Text style={{fontWeight: 'bold'}}>Login Page</Text>
      <View>
        <Text>Here user will login</Text>
        <Image
          source={{
            uri: 'https://i.pinimg.com/originals/82/be/d4/82bed479344270067e3d2171379949b3.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        placeholder= "Loginid"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        placeholder= "Password"
      />
    </View>
  );
}

export default App;
