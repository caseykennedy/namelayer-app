import { ScrollView, Text, View } from 'dripsy';
import React from 'react';

export function Domains() {
  return (
    <ScrollView
      sx={{
        backgroundColor: 'bg.600',
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
}
