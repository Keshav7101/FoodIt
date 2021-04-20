import * as React from 'react';
import { View, Text, SafeAreaView,Button,TextInput,TouchableOpacity } from 'react-native';

const EditScreen = (navigation, route) => {
    const [postText, setPostText] = React.useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
        multiline
        placeholder="Name"
        style={{ height: 40, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <TextInput
        multiline
        placeholder="Mobile Number"
        style={{ height: 40, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
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
              () => navigation.navigate('Profile')
            }>
            <Text>Done</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default EditScreen;
