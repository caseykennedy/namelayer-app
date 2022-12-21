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
      backgroundColor: 'gold.500',
      borderWidth: 1,
      borderColor: 'gold.500',
      borderRadius: 'sm',
    }}
  >
    <Text sx={{ color: 'black', fontWeight: 600 }}>ck</Text>
  </View>
);
