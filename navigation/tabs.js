import React from 'react';
import {
    View, Image, TouchableOpacity
} from 'react-native'
import {createBottomNavigator, BottomTabBar } from '@react-navigation/BottomTabBar';
import {Home} from '../screens';
import {COLORS, icons} from '../constants';
 const Tabs = createBottomNavigator();

 const Tabs = () => {
     return(
         <Tab.Navigator>
             <Tab.Screens
                name='Home'
                component={Home}
                options={{
                    tabBarIcon:
                        <Image
                            source={icons.cutlery}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary

                            }}
                        />
                    }
                }             
             />
         </Tab.Navigator>
     )
 }
// this is tab space