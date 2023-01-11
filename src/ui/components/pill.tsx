import { View } from 'dripsy';
import * as React from 'react';

type Props = {
  borderColor?: string;
  children: React.ReactNode;
};

export const Pill = ({ borderColor = 'border.light', children }: Props) => {
  return (
    <View
      sx={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        px: 'xs',
        py: 'xxs',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor,
        borderRadius: 'sm',
      }}
    >
      {children}
    </View>
  );
};
