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
  CreatePassword: {
    termsAccepted: boolean;
    walletName: string;
  };
  SeedWarning: {
    termsAccepted: boolean;
    walletName: string;
    password: string;
  };
  RevealSeed: {
    termsAccepted: boolean;
    walletName: string;
    password: string;
  };
  ConfirmSeed: {
    termsAccepted: boolean;
    walletName: string;
    password: string;
    seedphrase: string;
  };
  OptInAnalytics: {
    termsAccepted: boolean;
    walletName: string;
    password: string;
    seedphrase: string;
  };
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
    label: 'Terms of use',
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
    label: 'Seed Phrase Warning',
  },
  {
    name: 'RevealSeed',
    component: RevealSeed,
    label: 'Reveal Seed Phrase',
  },
  {
    name: 'ConfirmSeed',
    component: ConfirmSeed,
    label: 'Confirm Seedphrase',
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
          backgroundColor: theme.colors.bg[900],
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
