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
      // backgroundColor: 'purple.700',
      borderWidth: 1,
      borderColor: 'purple.300',
      borderRadius: 'sm',
    }}
  >
    <Text variants={['sm', 'bold']} sx={{ color: 'purple.300' }}>
      c
    </Text>
  </View>
);
