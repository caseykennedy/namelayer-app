import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, SafeAreaView, Text, View } from 'dripsy';
import React, { useState } from 'react';

import type { RootStackParamList } from '@/navigation/types';
import { Button } from '@/ui/components/button';

import { OnboardingFooter, OnboardingHeader, OnboardingLayout } from './layout';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SeedWarning'>;

export const SeedWarning = ({ navigation, route }: ScreenProps) => {
  const { termsAccepted, walletName, password } = route.params;
  const [accepted, setAccepted] = useState(false);
  const isImporting = false;

  return (
    <OnboardingLayout>
      <OnboardingHeader
        title={
          isImporting
            ? 'Import your recovery seed phrase.'
            : 'Please be sure to back up your recovery seed phrase.'
        }
        message={
          isImporting
            ? 'Entering your seed on any website is dangerous. You could lose all your funds if you accidentally visit a phishing website or if your computer is compromised.'
            : 'Your seed phrase will be generated in the next screen. It will allow you to recover your wallet if lost, stolen, or compromised.'
        }
      />
      <SafeAreaView sx={{ flex: 1 }}>
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
          <Text>
            {isImporting
              ? 'I understand the risks, let me enter my seed phrase.'
              : 'I understand that if I lose my seed phrase, I will no longer be able to access my wallet.'}
          </Text>
        </View>

        <OnboardingFooter>
          <Button
            variant={accepted ? 'primary' : 'default'}
            disabled={!accepted}
            onPress={() =>
              navigation.navigate('RevealSeed', {
                termsAccepted,
                walletName,
                password,
              })
            }
          >
            Next
          </Button>
        </OnboardingFooter>
      </SafeAreaView>
    </OnboardingLayout>
  );
};
