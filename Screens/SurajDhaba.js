import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  FlatList,Image
} from 'react-native';
import Swiper from 'react-native-swiper';

const DATA = [
	{
	  id: '1',
	  title: 'Veg Roll',
	},
	{
	  id: '2',
	  title: 'Egg Roll',
	},
	{
	  id: '3',
	  title: 'Paneer Roll',
	},
	{
		id: '4',
		title: 'Veg Roll',
	  },
	  {
		id: '5',
		title: 'Chicken Roll',
	  },
	  {
		id: '6',
		title: 'Chowmein Roll',
	  },
	  {
		id: '7',
		title: 'Alu parantha',
	  },
	  {
		id: '8',
		title: 'Paneer Parantha',
	  },
	  {
		id: '9',
		title: 'Gobhi Parantha',
	  },
	  {
		id: '10',
		title: 'Fried Rice',
	  },
	  {
		id: '11',
		title: 'Egg curry',
	  },
	  {
		id: '12',
		title: 'Sada Parantha',
	  },
  ];

const FirstPage = ({navigation}) => {
  const [foodName, setFoodName] = useState('');
  const Item = ({ title }) => (
	<View style={styles.item}>
	  <Text style={styles.title}>{title}</Text>
	</View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
		<View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={true}
          height={150}
          activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/suraj1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/suraj2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/suraj3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/suraj4.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.container}>
        <TextInput
          value={foodName}
          onChangeText={(foodName) => setFoodName(foodName)}
          placeholder={'Food Item'}
          style={styles.inputStyle}
        />
		<FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      	/>
        {/* On click of the button we will send the data as a Json
          From here to the Cart Screen using navigation */}
        <Button
          title="Go to Cart"
          onPress={() =>
            navigation.navigate('Cart', {
              paramKey: foodName,
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
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
  item: {
    backgroundColor: '#64A1FF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
	borderRadius:20
  },
  title: {
    fontSize: 32,
  },
  sliderContainer: {
    height: 150,
    width: '95%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
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