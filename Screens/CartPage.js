import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const FirstPage = ({navigation,route}) => {
  const [placeName, setPlaceName] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <Text style={styles.textStyle}>
          Your Order items
        </Text>
        <TextInput
          value={placeName}
          onChangeText={(placeName) => setPlaceName(placeName)}
          placeholder={'Delivery Place'}
          style={styles.inputStyle}
        />
        {/* On click of the button we will send the data as a Json
          From here to the Second Screen using navigation */}
        <Button
          title="Checkout"
          //Button Title
          onPress={() =>
            navigation.navigate('OrderConfirmation', {
              paramKey: placeName,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
});