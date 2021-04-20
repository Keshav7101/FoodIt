import * as React from 'react';
import { View, Text, SafeAreaView,Button,TextInput,TouchableOpacity,Image} from 'react-native';

const EditScreen = (navigation, route) => {
    const [Name, setName] = React.useState('');
    const [Mobileno, setMobileno] = React.useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16,alignItems:'center'}}>
      <Image
          source={require('../assets/images/user2.png')}
          style={{ marginTop:20, width: 120, height: 120, borderTopRightRadius:30,borderBottomLeftRadius:30}}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
        multiline
        placeholder="Name"
        style={{ height: 40, width:250, padding: 10, backgroundColor: 'white',marginBottom:15 }}
        value={Name}
        onChangeText={setName}
        />
          <TextInput
        multiline
        placeholder="Mobile Number"
        style={{ height: 40, width:250, padding: 10, backgroundColor: 'white' }}
        value={Mobileno}
        onChangeText={setMobileno}
          />
      <View>
      <TouchableOpacity
            style={{alignItems: 'center',
            justifyContent:'center',
            backgroundColor: '#DDDDDD',
            padding: 10,
            width: 280,
            marginTop: 20,
            marginLeft:0,
            borderRadius:20,
          }}>
            <Text>Done</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default EditScreen;
