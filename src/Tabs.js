import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import {UserIcon, CartSVG2, HomeIcon} from '../assets/svgs';

const Tab = createMaterialBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      shifting={true}
      sceneAnimationType="shifting"
      barStyle={{backgroundColor: 'rgba(0,0,0,0)', height: '11%'}}
      labeled={false}>
      <Tab.Screen
        name="Home"
        component={Tab1}
        options={{
          tabBarIcon: () => <HomeIcon />,
          tabBarColor: 'transparent',
        }}
      />

      <Tab.Screen
        name="Shop"
        component={Tab2}
        options={{tabBarIcon: () => <CartSVG2 />, tabBarColor: 'yellow'}}
      />

      <Tab.Screen
        name="Sign Up"
        component={Tab3}
        options={{tabBarIcon: () => <UserIcon />, tabBarColor: 'transparent'}}
      />
    </Tab.Navigator>
  );
}
