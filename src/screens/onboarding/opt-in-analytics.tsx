import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, Text, View } from 'dripsy';
import React, { useCallback, useState } from 'react';

import type { RootStackParamList } from '@/navigation/types';
import { Button, Switch } from '@/ui';

import { OnboardingFooter, OnboardingHeader, OnboardingLayout } from './layout';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'OptInAnalytics'>;

export function OptInAnalytics({ navigation, route }: ScreenProps) {
  const { termsAccepted, walletName, password, seedphrase } = route.params;
  const [optIn, setOptIn] = useState(false);

  const onFinish = useCallback(() => {
    console.log(
      'create wallet:',
      termsAccepted,
      walletName,
      password,
      seedphrase,
      optIn
    );
    navigation.navigate('Main');
  }, [navigation, termsAccepted, walletName, password, seedphrase, optIn]);

  return (
    <OnboardingLayout>
      <OnboardingHeader
        title="Opt-in to analytics"
        message="Do you want to send anonymous usage data to Kyokan?"
      />

      <SafeAreaView sx={{ flex: 1 }}>
        <View
          sx={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Switch
            isEnabled={optIn}
            onValueChange={() => setOptIn(!optIn)}
            value={optIn}
          />
          <Text
            sx={{
              ml: 'gutter',
            }}
          >
            Yes, opt me in.
          </Text>
        </View>

        <OnboardingFooter>
          <Button
            variant={optIn ? 'primary' : 'default'}
            disabled={!optIn}
            onPress={onFinish}
          >
            Finish
          </Button>
        </OnboardingFooter>
      </SafeAreaView>
    </OnboardingLayout>
  );
}
