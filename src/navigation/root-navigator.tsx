import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

import { useAuth } from '@/core';
import { useIsFirstTime } from '@/core/hooks';
import { ConfirmTx, Onboarding } from '@/screens';

import { AuthNavigator } from './auth-navigator';
import { DrawerNavigator } from './drawer-navigator';
import { NavigationContainer } from './navigation-container';
import { TxNavigator } from './tx-navigator';

const RootStack = createNativeStackNavigator();

export const Root = () => {
  const status = useAuth((state) => state.status);
  const [isFirstTime] = useIsFirstTime();
  const hideSplash = React.useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  useEffect(() => {
    if (status !== 'idle') {
      hideSplash();
    }
  }, [hideSplash, status]);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'default',
      }}
    >
      {isFirstTime ? (
        <RootStack.Screen name="Onboarding" component={Onboarding} />
      ) : (
        <>
          <RootStack.Group>
            {status !== 'signOut' ? (
              <RootStack.Screen name="Auth" component={AuthNavigator} />
            ) : (
              <>
                <RootStack.Screen name="App" component={DrawerNavigator} />
              </>
            )}
          </RootStack.Group>

          <RootStack.Group
          // screenOptions={{
          //   gestureEnabled: true,
          // }}
          >
            <RootStack.Screen name="Tx" component={TxNavigator} />
          </RootStack.Group>
        </>
      )}
      <RootStack.Group
        screenOptions={{
          presentation: 'modal',
        }}
      >
        <RootStack.Screen name="ConfirmTx" component={ConfirmTx} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export const RootNavigator = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);
