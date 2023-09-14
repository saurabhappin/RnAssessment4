import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {ProfileIcon, AddressIcon} from '../../assets/svgs';
import Contact from '../screens/ContactInformation';
import Address from '../screens/AddressInformation';

const Tab = createMaterialBottomTabNavigator();

export default function UserScreen() {
  return (
    <Tab.Navigator
      shifting={true}
      sceneAnimationType="shifting"
      barStyle={{backgroundColor: 'transparent'}}>
      <Tab.Screen
        name="Profile"
        component={Contact}
        options={{
          tabBarIcon: () => <ProfileIcon />,
        }}
      />
      <Tab.Screen
        name="Address"
        component={Address}
        options={{tabBarIcon: () => <AddressIcon />}}
      />
    </Tab.Navigator>
  );
}
