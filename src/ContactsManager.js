import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {UserIcon, CartSVG2, HomeIcon} from '../assets/svgs';
import AllUsersSreen from './AllUsersScreen';
import UserScreen from './UserScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function ContactsManager() {
  return (
    <NavigationContainer>
      <Stack.Navigator shifting={true} sceneAnimationType="shifting">
        <Stack.Screen
          name="Contacts"
          component={AllUsersSreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="User Details"
          component={UserScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
