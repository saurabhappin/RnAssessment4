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
      activeColor="#183D3D"
      sceneAnimationType="shifting"
      barStyle={{backgroundColor: '#5C8374'}}>
      <Tab.Screen
        name="Home"
        component={Tab1}
        options={{
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Tab2}
        options={{tabBarIcon: () => <CartSVG2 />}}
      />
      <Tab.Screen
        name="Sign Up"
        component={Tab3}
        options={{tabBarIcon: () => <UserIcon />}}
      />
    </Tab.Navigator>
  );
}
