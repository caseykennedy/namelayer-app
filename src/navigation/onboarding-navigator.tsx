import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { ComponentType } from 'react';
import * as React from 'react';

import {
  ConfirmSeed,
  CreatePassword,
  OptInAnalytics,
  RevealSeed,
  SeedWarning,
  Start,
  Terms,
  WalletName,
} from '@/screens';
import { theme } from '@/ui';

export type OnboardingParamList = {
  Start: undefined;
  Terms: undefined;
  WalletName: {
    termsAccepted: boolean;
  };
  CreatePassword: undefined;
  SeedWarning: undefined;
  RevealSeed: undefined;
  ConfirmSeed: undefined;
  OptInAnalytics: undefined;
};

type OnboardType = {
  name: keyof OnboardingParamList;
  component: ComponentType<any>;
  label: string;
};

const Stack = createNativeStackNavigator<OnboardingParamList>();

export type TabList<T extends keyof OnboardingParamList> = {
  navigation: NativeStackNavigationProp<OnboardingParamList, T>;
  route: RouteProp<OnboardingParamList, T>;
};

const tabs: OnboardType[] = [
  {
    name: 'Start',
    component: Start,
    label: 'Start',
  },
  {
    name: 'Terms',
    component: Terms,
    label: 'Terms',
  },
  {
    name: 'WalletName',
    component: WalletName,
    label: 'Wallet Name',
  },
  {
    name: 'CreatePassword',
    component: CreatePassword,
    label: 'Create Password',
  },
  {
    name: 'SeedWarning',
    component: SeedWarning,
    label: 'Seed Warning',
  },
  {
    name: 'RevealSeed',
    component: RevealSeed,
    label: 'Reveal Seed',
  },
  {
    name: 'ConfirmSeed',
    component: ConfirmSeed,
    label: 'Confirm Seed',
  },
  {
    name: 'OptInAnalytics',
    component: OptInAnalytics,
    label: 'Opt-In Analytics',
  },
];

// const TabBarButton = (props) => <TouchableOpacity {...props} />;

export const OnboardingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.colors.bg[800],
        },
        headerShadowVisible: true,
        headerBackTitleVisible: false,
        headerTintColor: theme.colors.muted,
        headerTitleStyle: {
          fontSize: theme.fontSizes.sm,
          fontWeight: 'bold',
        },
      })}
    >
      <Stack.Group>
        {tabs.map(({ name, component, label }) => {
          return (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={() => ({
                title: label,
                headerShadowVisible: true, // applied here
              })}
            />
          );
        })}
      </Stack.Group>
    </Stack.Navigator>
  );
};
