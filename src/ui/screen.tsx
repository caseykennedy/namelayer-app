import { View } from 'dripsy';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Screen = ({ children }: Props) => (
  <View
    sx={{
      flex: 1,
      backgroundColor: 'bg.600',
    }}
  >
    {children}
  </View>
);
