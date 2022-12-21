import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Row, Text, View } from 'dripsy';
import React from 'react';

import { Avatar } from '@/ui';
import { Settings } from '@/ui/icons';

// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from './tab-navigator';

const userActions = [
  {
    label: 'Add new wallet',
  },
  {
    label: 'Transaction history',
  },
  {
    label: 'Settings',
  },
];

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={(props) => <CustomDrawer {...props} />}
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
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        // options={{
        //   drawerIcon: ({ color }) => (
        //     <Ionicons name="home-outline" size={22} color={color} />
        //   ),
        // }}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawer = (props: DrawerContentComponentProps) => {
  // console.log('props', props);
  return (
    <View sx={{ flex: 1, backgroundColor: 'bg.900' }}>
      <DrawerContentScrollView
        {...props}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <View sx={{ height: 192, pt: 'xs', p: 'gutter' }}>
          <Row
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Avatar size={44} />
            <Text variants={['md', 'medium']}>Primary Wallet</Text>
          </Row>
        </View>

        <View sx={{ flex: 1, backgroundColor: 'bg.700', p: 'gutter' }}>
          <Text>Primary Wallet</Text>
          {/* <DrawerItemList {...props} /> */}
        </View>
      </DrawerContentScrollView>

      <View
        sx={{
          backgroundColor: 'bg.800',
          borderTopWidth: 2,
          borderColor: 'border.dark',
          pb: 'lg',
        }}
      >
        {userActions.map(({ label }) => (
          <Pressable
            onPress={() => {}}
            sx={{
              borderBottomWidth: 1,
              borderColor: 'border.light',
              p: 'gutter',
            }}
            key={label}
          >
            <Row
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text variants={['sm', 'muted']}>{label}</Text>
              <Settings size={18} />
            </Row>
          </Pressable>
        ))}
      </View>
    </View>
  );
};
