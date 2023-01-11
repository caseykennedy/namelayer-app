import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, SafeAreaView, Text, View } from 'dripsy';
import React, { useCallback, useEffect, useState } from 'react';

import type { RootStackParamList } from '@/navigation/types';
import { Button } from '@/ui';
import { shuffleArray } from '@/utils/helpers';

import { OnboardingFooter, OnboardingHeader, OnboardingLayout } from './layout';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ConfirmSeed'>;

export function ConfirmSeed({ navigation, route }: ScreenProps) {
  const { termsAccepted, walletName, password, seedphrase } = route.params;
  // TODO: import wallet
  const isImporting = false;
  const seedArray = seedphrase.split(' ');
  const [shuffledSeeds, setShuffledSeeds] = useState(shuffleArray(seedArray));
  const [sortedSeeds, setSortedSeeds] = useState<string[]>([]);

  const onSortSeed = useCallback(
    (seed: string) => {
      setSortedSeeds([...sortedSeeds, seed]);
      setShuffledSeeds(
        shuffledSeeds.filter((filteredSeed) => filteredSeed !== seed)
      );
    },
    [sortedSeeds, shuffledSeeds]
  );

  const onResetSeed = useCallback(
    (seed: string) => {
      setSortedSeeds(
        sortedSeeds.filter((filteredSeed) => filteredSeed !== seed)
      );
      setShuffledSeeds([...shuffledSeeds, seed]);
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

  const onContinue = useCallback(() => {
    navigation.navigate('OptInAnalytics', {
      termsAccepted,
      walletName,
      password,
      seedphrase: sortedSeeds.join(' '),
    });
  }, [navigation, termsAccepted, walletName, password, sortedSeeds]);

  useEffect(() => {
    console.log('seedphrase:', seedphrase);
    console.log('sortedSeeds:', sortedSeeds.join(' '));
    console.log('seeds are not sorted?:', seedphrase !== sortedSeeds.join(' '));
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
          p: 'xs',
          mb: 'gutter',
          bg: 'bg.800',
          borderRadius: 'sm',
          borderStyle: 'solid',
          borderColor: 'border.light',
          borderWidth: 1,
        }}
      >
        {sortedSeeds.map((seed, i) => (
          <Seed key={i}>
            <Text variants={['sm', 'muted']} sx={{ pr: 'xs' }}>
              {seed}
            </Text>
            <Pressable onPress={() => onResetSeed(seed)}>
              <Text variants={['xs', 'muted']} sx={{ p: 'xxs' }}>
                x
              </Text>
            </Pressable>
          </Seed>
        ))}
      </View>

      <View
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {shuffledSeeds.map((seed, i) => (
          <Pressable onPress={() => onSortSeed(seed)} key={i}>
            <Seed>
              <Text>{seed}</Text>
            </Seed>
          </Pressable>
        ))}
      </View>

      <SafeAreaView sx={{ flex: 1 }}>
        <OnboardingFooter>
          <Button
            disabled={disabled}
            variant={disabled ? 'default' : 'primary'}
            onPress={onContinue}
          >
            Continue
          </Button>
        </OnboardingFooter>
      </SafeAreaView>
    </OnboardingLayout>
  );
}

type SeedProps = {
  children: React.ReactNode;
};

const Seed = ({ children }: SeedProps) => {
  return (
    <View
      sx={{
        alignItems: 'center',
        flexDirection: 'row',
        px: 'xs',
        py: 'xxs',
        mb: 'xxs',
        mr: 'xxs',
        bg: 'bg.900',
        borderRadius: 'sm',
        borderStyle: 'solid',
        borderColor: 'border.light',
        borderWidth: 1,
      }}
    >
      {children}
    </View>
  );
};
