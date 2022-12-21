import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';

import { useAuth } from '@/core';
import { useIsFirstTime } from '@/core/hooks';
import { Onboarding } from '@/screens';

import { AuthNavigator } from './auth-navigator';
import { DrawerNavigator } from './drawer-navigator';
import { NavigationContainer } from './navigation-container';

const Stack = createNativeStackNavigator();

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
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'default',
      }}
    >
      {isFirstTime ? (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      ) : (
        <Stack.Group>
          {status !== 'signOut' ? (
            <Stack.Screen name="Auth" component={AuthNavigator} />
          ) : (
            <Stack.Screen name="App" component={DrawerNavigator} />
          )}
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export const RootNavigator = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);
