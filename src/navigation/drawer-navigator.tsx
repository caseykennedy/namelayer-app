import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { NavDrawer } from '@/ui/components';

import { TabNavigator } from './tab-navigator';

export type DrawerStackParamList = {
  Main: undefined;
};

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<DrawerStackParamList>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={(props) => <NavDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#212028',
          // shadowOffset: {
          //   width: 0,
          //   height: 10,
          // },
          // shadowOpacity: 0.8,
          // shadowRadius: 14,
          // elevation: 25,
          // shadowColor: '#000000',
        },
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#ffffff',
        drawerInactiveTintColor: '#333333',
        drawerLabelStyle: {
          // marginLeft: -25,
          fontSize: 15,
        },
      }}
    >
      <Stack.Screen name="Main" component={TabNavigator} />
    </Drawer.Navigator>
  );
};
