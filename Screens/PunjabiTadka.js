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

const DATA = [
	{
	  id: '1',
	  title: 'Chowmein Rs.50',
	},
	{
	  id: '2',
	  title: 'Egg Chowmein Rs.70',
	},
	{
	  id: '3',
	  title: 'Paneer Chowmein Rs.80',
	},
	{
		id: '4',
		title: 'Fried Rice Rs.75',
	  },
	  {
		id: '5',
		title: 'Chicken Fried Rice Rs.120',
	  },
	  {
		id: '6',
		title: 'Chicken Chilli Rs.150',
	  },
	  {
		id: '7',
		title: 'Butter Chicken Rs.130',
	  },
	  {
		id: '8',
		title: 'Kadhai Chicken Rs.120',
	  },
	  {
		id: '9',
		title: 'Chicken do pyaza Rs.135',
	  },
	  {
		id: '10',
		title: 'Butter Roti Rs.12',
	  },
	  {
		id: '11',
		title: 'Naan Rs.10',
	  },
	  {
		id: '12',
		title: 'Sada Parantha Rs.8',
	  },
  ];
  import Swiper from 'react-native-swiper';

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
              source={require('../assets/images/spicy1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/spicy2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/spicy3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/spicy4.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.container}>
        {/*Input to get the value from the user*/}
        <Text style={styles.welcometext}>Welcome to Spicy Restaurant</Text>
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
          //Button Title
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
    borderRadius:20
  },
  item: {
    backgroundColor: '#64A1FF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
	  borderRadius:20
  },
  title: {
    fontSize: 20,
  },
  sliderContainer: {
    height: 150,
    width: '95%',
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
  welcometext:{
    fontSize:20
  }
});