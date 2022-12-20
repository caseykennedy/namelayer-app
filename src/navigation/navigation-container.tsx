import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native';
import * as React from 'react';

export const NavigationContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <RNNavigationContainer>{children}</RNNavigationContainer>;
};
