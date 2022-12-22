import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ComponentType } from 'react';
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';

import { Dashboard, Domains, Wallet } from '@/screens';
import { Settings as SettingsIcon, Style as DashboardIcon, theme } from '@/ui';
import { colors } from '@/ui/theme/colors';

type TabParamList = {
  Dashboard: undefined;
  Domains: undefined;
  Settings: undefined;
  Wallet: undefined;
};

type TabType = {
  name: keyof TabParamList;
  component: ComponentType<any>;
  label: string;
};

type TabIconsType = {
  [key in keyof TabParamList]: (props: SvgProps) => JSX.Element;
};

const Tab = createBottomTabNavigator<TabParamList>();

const tabsIcons: TabIconsType = {
  Dashboard: (props: SvgProps) => <DashboardIcon {...props} />,
  Domains: (props: SvgProps) => <SettingsIcon {...props} />,
  Settings: (props: SvgProps) => <SettingsIcon {...props} />,
  Wallet: (props: SvgProps) => <SettingsIcon {...props} />,
};

export type TabList<T extends keyof TabParamList> = {
  navigation: NativeStackNavigationProp<TabParamList, T>;
  route: RouteProp<TabParamList, T>;
};

const tabs: TabType[] = [
  {
    name: 'Dashboard',
    component: Dashboard,
    label: 'Dashboard',
  },
  {
    name: 'Wallet',
    component: Wallet,
    label: 'Wallet',
  },
  {
    name: 'Domains',
    component: Domains,
    label: 'Domains',
  },
  // {
  //   name: 'Settings',
  //   component: Settings,
  //   label: 'Settings',
  // },
];

type BarIconType = {
  name: keyof TabParamList;
  color: string;
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

// const TabBarButton = (props) => <TouchableOpacity {...props} />;

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color }) => <BarIcon name={route.name} color={color} />,
        tabBarInactiveBackgroundColor: colors.bg[900],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: [
          {
            backgroundColor: colors.bg[900],
            borderTopWidth: 1,
            borderTopColor: colors.border.light,
            height: 90,
          },
        ],
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '500',
        },
      })}
    >
      <Tab.Group
        screenOptions={{
          headerShown: true,
        }}
      >
        {tabs.map(({ name, component, label }) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={() => ({
                title: label,
                headerStyle: {
                  backgroundColor: theme.colors.bg[900],
                  borderBottomWidth: 0,
                  borderColor: theme.colors.border.dark,
                },
                headerShadowVisible: false, // applied here
                // headerBackTitleVisible: false,
                headerTintColor: theme.colors.aqua[500],
                headerTitleStyle: {
                  fontSize: theme.fontSizes.sm,
                  fontWeight: 'bold',
                },
              })}
            />
          );
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};
