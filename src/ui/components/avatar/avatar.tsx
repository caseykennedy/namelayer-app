import { Text, View } from 'dripsy';
import * as React from 'react';

type Props = {
  size?: number;
};

export const Avatar = ({ size = 28 }: Props) => (
  <View
    sx={{
      alignItems: 'center',
      justifyContent: 'center',
      height: size,
      width: size,
      backgroundColor: 'bg.100',
      borderWidth: 1,
      borderColor: 'border.dark',
      borderRadius: 'sm',
    }}
  >
    <Text variants={['sm', 'bold']} sx={{ color: 'bg.900' }}>
      c
    </Text>
  </View>
);
