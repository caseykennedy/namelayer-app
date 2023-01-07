import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, SafeAreaView, Text, View } from 'dripsy';
import React, { useState } from 'react';

import type { RootStackParamList } from '@/navigation/types';
import { Button } from '@/ui/components/button';

import { OnboardingFooter, OnboardingLayout } from './layout';
import TermsOfUse from './terms-of-use';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Terms'>;

export const Terms = ({ navigation }: ScreenProps) => {
  const [accepted, setAccepted] = useState(false);
  return (
    <OnboardingLayout>
      <SafeAreaView sx={{ flex: 1 }}>
        <View
          sx={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>Please review and accept our terms.</Text>
        </View>

        <TermsOfUse />

        <View
          sx={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Pressable
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              bg: accepted ? 'purple.700' : 'purple.800',
              borderRadius: 'full',
              mr: 'gutter',
              height: 42,
              width: 42,
            }}
            onPress={() => setAccepted(!accepted)}
          >
            <Text>•</Text>
          </Pressable>
          <Text>I accept the terms of use.</Text>
        </View>

        <OnboardingFooter>
          <Button
            variant={accepted ? 'primary' : 'default'}
            disabled={!accepted}
            onPress={() =>
              navigation.navigate('WalletName', { termsAccepted: accepted })
            }
          >
            Next
          </Button>
        </OnboardingFooter>
      </SafeAreaView>
    </OnboardingLayout>
  );
};
