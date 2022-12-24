import { ScrollView, Text, View } from 'dripsy';
import React from 'react';

export const Wallet = (props: any) => {
  return (
    <ScrollView
      sx={{
        backgroundColor: 'bg.900',
      }}
      {...props}
    >
      <View
        sx={{
          flex: 1,
          pt: 'xxl',
        }}
      >
        <Text variants={['lg', 'medium', 'centered']}>Wallet</Text>
      </View>
    </ScrollView>
  );
};
