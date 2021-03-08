import react from 'react';
import {CreateStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Home, Restaurant, OrderDelivery} from './screens'

const Stack = createStackNavigator();
const App = () => {
  return(
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:flase}} initialRouteName={'Home'}>
            <Stack.Screen name='Home' Component={Home} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}
export default App;