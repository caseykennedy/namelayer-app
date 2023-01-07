import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, Text, View } from 'dripsy';
import React, { useCallback, useEffect, useState } from 'react';
import { Pressable } from 'react-native';

import type { RootStackParamList } from '@/navigation/types';
import { Button } from '@/ui';
import { shuffleArray } from '@/utils/helpers';

import { OnboardingFooter, OnboardingHeader, OnboardingLayout } from './layout';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ConfirmSeed'>;

export const ConfirmSeed = ({ navigation, route }: ScreenProps) => {
  const { termsAccepted, walletName, password, seedphrase } = route.params;
  // TODO: import wallet
  const isImporting = false;
  const seedArray = seedphrase.split(' ');
  const [shuffledSeeds, setShuffledSeeds] = useState(shuffleArray(seedArray));
  const [sortedSeeds, setSortedSeeds] = useState<string[]>([]);

  const onSortSeed = useCallback(
    (word: string) => {
      setSortedSeeds([...sortedSeeds, word]);
      setShuffledSeeds(shuffledSeeds.filter((w) => w !== word));
    },
    [sortedSeeds, shuffledSeeds]
  );

  let disabled = false;
  const nonEmptySeeds = sortedSeeds.filter((s) => !!s);
  if (!isImporting && seedphrase !== sortedSeeds.join(' ')) {
    disabled = true;
  } else if (
    isImporting &&
    nonEmptySeeds.length !== 12 &&
    nonEmptySeeds.length !== 24
  ) {
    disabled = true;
  }

  useEffect(() => {
    console.log('seedphrase:', seedphrase);
    console.log('sortedSeeds:', sortedSeeds);
  }, [sortedSeeds, seedphrase]);

  useEffect(() => {
    console.log('sortedSeeds:', seedphrase !== sortedSeeds.join(' '));
  }, [sortedSeeds, seedphrase]);

  return (
    <OnboardingLayout>
      <OnboardingHeader
        title={
          isImporting
            ? 'Import your recovery phrase'
            : 'Confirm your recovery phrase'
        }
        message={
          isImporting
            ? 'Enter your 12- or 24-word seed phrase to restore your wallet.'
            : 'Enter your 24-word seed phrase from the previous screen.'
        }
      />

      <View
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {sortedSeeds.map((word, i) => (
          <Text variants={['sm', 'muted']} sx={{ mr: 'sm' }} key={i}>
            {word}
          </Text>
        ))}
      </View>

      <View
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {shuffledSeeds.map((word, i) => (
          <Pressable onPress={() => onSortSeed(word)} key={i}>
            <Text sx={{ mr: 'sm' }}>{word}</Text>
          </Pressable>
        ))}
      </View>

      <SafeAreaView sx={{ flex: 1 }}>
        <OnboardingFooter>
          <Button
            disabled={disabled}
            variant="primary"
            onPress={() =>
              navigation.navigate('OptInAnalytics', {
                termsAccepted,
                walletName,
                password,
                seedphrase: sortedSeeds.join(' '),
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
