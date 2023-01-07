// const Mnemonic = require('hsd/lib/hd/mnemonic');
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'dripsy';
import React, { useEffect, useState } from 'react';

import type { RootStackParamList } from '@/navigation/types';
import { Button } from '@/ui/components/button';

import { OnboardingFooter, OnboardingHeader, OnboardingLayout } from './layout';

const seeds =
  'strong quaint judge oak sticky end fair cruel hole snarl impact linger bar fool tube symbol velvet food lily bother coerce ditch canvas agree';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SeedWarning'>;

export const RevealSeed = ({ navigation, route }: ScreenProps) => {
  const { termsAccepted, walletName, password } = route.params;
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

  return (
    <OnboardingLayout>
      <OnboardingHeader
        title="Your Recovery Seed Phrase"
        message="Write down these 24 words on paper and keep it safe and secure. Do not email or screenshot your seed."
      />
      <SafeAreaView sx={{ flex: 1 }}>
        <OnboardingFooter>
          <Button
            variant="primary"
            onPress={() =>
              navigation.navigate('ConfirmSeed', {
                termsAccepted,
                walletName,
                password,
                seedphrase,
              })
            }
          >
            Continue
          </Button>
        </OnboardingFooter>
      </SafeAreaView>
    </OnboardingLayout>
  );
};
