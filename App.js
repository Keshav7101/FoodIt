import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import VectorIcons from 'react-native-vector-icons';

import HomeScreen from './Screens/HomeScreen';
import SurajDhaba from './Screens/SurajDhaba';
import Spicy from './Screens/Spicy';
import Loginpage from "./Screens/Loginpage";
import Signup from "./Screens/Signup";
import Searchpage from './Screens/Searchpage';
import CartPage from './Screens/CartPage';
import OrderConfirmation from './Screens/OrderConfirmation'

const Stack = createStackNavigator();

function Home() {
  return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#3944BC' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'FoodIt' }}/>
        <Stack.Screen
          name="SurajDhaba"
          component={SurajDhaba}
          options={{ title: 'Suraj Dhaba' }} />
        <Stack.Screen
          name="Spicy"
          component={Spicy}
          options={{ title: 'Spicy Restaurant' }} />
      </Stack.Navigator>
  );
}

function Search() {
  return (
    <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerStyle: { backgroundColor: '#3944BC' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Search"
          component={Searchpage}
          options={{ title: 'Search' }}/>
      </Stack.Navigator>
  );
}

function Cart() {
  return (
    <Stack.Navigator
        initialRouteName="CartPage"
        screenOptions={{
          headerStyle: { backgroundColor: '#3944BC' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="CartPage"
          component={CartPage}
          options={{ title: 'Cart' }}/>
        <Stack.Screen
          name="OrderConfirmation"
          component={OrderConfirmation}
          options={{ title: 'Confirmation' }}/>
      </Stack.Navigator>
  );
}

function Profile() {
  return (
    <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerStyle: { backgroundColor: '#3944BC' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Login"
          component={Loginpage}
          options={{ title: 'Login' }}/>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: 'Signup' }}/>
      </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#3944BC',
        style: {
          backgroundColor: '#ffffff'
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Find',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
