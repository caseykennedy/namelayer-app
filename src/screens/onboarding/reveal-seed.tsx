// const Mnemonic = require('hsd/lib/hd/mnemonic');
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, Text, View } from 'dripsy';
import React, { useCallback, useEffect, useState } from 'react';

import type { RootStackParamList } from '@/navigation/types';
import { Button } from '@/ui';

import { OnboardingFooter, OnboardingHeader, OnboardingLayout } from './layout';

const seeds =
  'strong quaint judge oak sticky end fair cruel hole snarl impact linger bar fool tube symbol velvet food lily bother coerce ditch canvas agree';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SeedWarning'>;

export function RevealSeed({ navigation, route }: ScreenProps) {
  const { termsAccepted, walletName, password } = route.params;
  const seedArray = seeds.split(' ');
  const [seedphrase, setSeedphrase] = useState('');

  useEffect(() => {
    setSeedphrase(seeds);
  }, []);

  // useEffect(() => {
  //   (async function onRevealSeedphraseMount() {
  //     try {
  //       const mnemonic = await new Mnemonic({ bits: 256 }).getPhrase().trim();
  //       setSeedphrase(mnemonic);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   })();
  // }, []);

  const onContinue = useCallback(() => {
    navigation.navigate('ConfirmSeed', {
      termsAccepted,
      walletName,
      password,
      seedphrase,
    });
  }, [navigation, termsAccepted, walletName, password, seedphrase]);

  return (
    <OnboardingLayout>
      <OnboardingHeader
        title="Your Recovery Seed Phrase"
        message="Write down these 24 words on paper and keep it safe and secure. Do not email or screenshot your seed."
      />

      <View
        sx={{
          flexDirection: 'column',
          flexWrap: 'wrap',
          height: 444,
        }}
      >
        {seedArray.map((seed, i) => (
          <View
            sx={{
              flexDirection: 'row',
              py: 'xs',
              width: '50%',
              borderBottomWidth: 1,
              borderColor: 'border.light',
            }}
            key={i}
          >
            <Text
              sx={{
                mr: 'gutter',
                width: 30,
              }}
            >{`${i + 1}:`}</Text>
            <Text>{seed}</Text>
          </View>
        ))}
      </View>

      <SafeAreaView sx={{ flex: 1 }}>
        <OnboardingFooter>
          <Button variant="primary" onPress={onContinue}>
            Continue
          </Button>
        </OnboardingFooter>
      </SafeAreaView>
    </OnboardingLayout>
  );
}
