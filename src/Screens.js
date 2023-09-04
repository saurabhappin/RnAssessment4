import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

export default function Screens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IndividualTabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Contacts" component={Screen1} />
      {/* <Stack.Screen name="Screen2" component={Screen2} /> */}
      <Stack.Screen name="About Us" component={Screen3} />
    </Stack.Navigator>
  );
}
