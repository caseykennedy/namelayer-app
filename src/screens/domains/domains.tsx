import { ScrollView, Text, View } from 'dripsy';
import React from 'react';

export const Domains = () => {
  return (
    <ScrollView
      sx={{
        backgroundColor: 'bg.800',
      }}
    >
      <View
        sx={{
          flex: 1,
          pt: 'xxl',
          pb: 'lg',
          backgroundColor: 'bg.900',
        }}
      >
        <Text variants={['lg', 'medium', 'centered']}>Domains</Text>
      </View>
    </ScrollView>
  );
};
