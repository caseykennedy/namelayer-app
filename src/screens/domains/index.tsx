import { ScrollView, Text, View } from 'dripsy';
import React from 'react';

export const Domains = () => {
  return (
    <ScrollView
      sx={{
        backgroundColor: 'bg.900',
      }}
    >
      <View
        sx={{
          flex: 1,
          pt: 'xxl',
        }}
      >
        <Text variants={['lg', 'medium', 'centered']}>Domains</Text>
      </View>
    </ScrollView>
  );
};
