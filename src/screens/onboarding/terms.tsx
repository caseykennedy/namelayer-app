import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, SafeAreaView, Text, View } from 'dripsy';
import React, { useState } from 'react';

import type { RootStackParamList } from '@/navigation/types';
import { Button } from '@/ui/components/button';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Terms'>;

export const Terms = ({ navigation }: ScreenProps) => {
  const [accepted, setAccepted] = useState(false);
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
          <Text variants={['xxl', 'medium', 'centered']}>Terms</Text>
        </View>

        <View
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Pressable
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              p: 'sm',
              bg: accepted ? 'purple.700' : 'purple.800',
              borderRadius: 'full',
            }}
            onPress={() => setAccepted(!accepted)}
          >
            <Text>•</Text>
          </Pressable>
          <Text>I accept the terms of use.</Text>
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

              bg: accepted ? 'purple.700' : 'purple.800',
              borderRadius: 'xs',
              borderStyle: 'solid',
              borderColor: 'border.dark',
              borderWidth: 1,

              width: '100%',
            }}
            disabled={!accepted}
            onPress={() =>
              navigation.navigate('WalletName', { termsAccepted: accepted })
            }
          >
            <Text>Next</Text>
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};
