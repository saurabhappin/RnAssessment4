import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Screens from '../navigation/Screens';
import Screen1 from '../navigation/Screen1';
// import Screen2 from './Screen2';
import Screen3 from '../navigation/Screen3';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="ShopAway"
          component={Screens}
          options={{drawerLabel: 'Home'}}
        />
        <Drawer.Screen name="Wishlist" component={Screen1} />
        {/* <Drawer.Screen name="Screen2" component={Screen2} /> */}
        <Drawer.Screen name="About Us" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
