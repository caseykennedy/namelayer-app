import { SafeAreaView, Text } from 'dripsy';
import React from 'react';

type Props = {
  title: string;
  message: string;
};

export function OnboardingHeader({ title, message }: Props) {
  return (
    <SafeAreaView sx={{ mb: 'md' }}>
      <Text variants={['lg', 'medium']} sx={{ mb: 'xs' }}>
        {title}
      </Text>
      <Text variants={['muted']}>{message}</Text>
    </SafeAreaView>
  );
}
