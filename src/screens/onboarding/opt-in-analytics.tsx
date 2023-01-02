import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, Text, View } from 'dripsy';
import React from 'react';

import type { RootStackParamList } from '@/navigation/types';
import { Button } from '@/ui/components/button';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Terms'>;

export const OptInAnalytics = ({ navigation }: ScreenProps) => {
  return (
    <View
      sx={{
        flex: 1,
        backgroundColor: 'bg.800',
      }}
    >
      <SafeAreaView sx={{ flex: 1 }}>
        <View
          sx={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text variants={['xxl', 'medium', 'centered']}>Opt-In Analytics</Text>
        </View>
        <View
          sx={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: 'lg',
          }}
        >
          <Button
            sx={{
              alignItems: 'center',
              px: 'md',
              py: 'sm',
              mb: 'md',

              bg: 'purple.700',
              borderRadius: 'xs',
              borderStyle: 'solid',
              borderColor: 'border.dark',
              borderWidth: 1,

              width: '100%',
            }}
            onPress={() => navigation.navigate('Root', { screen: 'Profile' })}
          >
            <Text>finish</Text>
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};
