import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {NavigationContainer} from '@react-navigation/native';
import tabs from './navigation/tabs'
import {Home, Restaurant, OrderDelivery} from './screens'

const Stack = createStackNavigator();
const App = () => {
  return(
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:flase}} initialRouteName={'Home'}>
            <Stack.Screen name='Home' Component={tabs} />
            <Stack.Screen name='Restaurant' Component={Restaurant} />
            <Stack.Screen name='OrderDelivery' Component={OrderDelivery} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}
export default App;
//hello guys
