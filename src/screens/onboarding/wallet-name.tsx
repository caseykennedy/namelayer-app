import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, View } from 'dripsy';
import React, { useCallback, useState } from 'react';

import type { RootStackParamList } from '@/navigation/types';
import { Button, Input } from '@/ui';

import { OnboardingFooter, OnboardingHeader, OnboardingLayout } from './layout';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'WalletName'>;

export function WalletName({ navigation, route }: ScreenProps) {
  const { termsAccepted } = route.params;
  // const walletIDs = useStore.use.walletIDs();
  const walletIDs = React.useMemo(() => ['secondary', 'tertiary', 'c'], []);
  const [errorMessage, setErrorMessage] = useState('');
  const [walletName, setWalletName] = useState('');
  const [isValid, setIsValid] = useState(false);

  const onChange = useCallback(
    (newText: string) => {
      const value = newText;
      setErrorMessage('');

      if (value && !/^[A-Za-z0-9]+$/i.test(value)) {
        setErrorMessage('Can only contain letters and numbers');
        setIsValid(false);
      } else if (walletIDs.includes(value)) {
        setErrorMessage(`"${value}" already exists`);
        setIsValid(false);
      } else if (value === 'primary') {
        setErrorMessage('Cannot set wallet id to "primary"');
        setIsValid(false);
      } else if (value.length === 0) {
        setIsValid(false);
      } else {
        setIsValid(true);
        setWalletName(value);
      }
    },
    [walletIDs]
  );

  React.useEffect(() => {
    console.log(walletName);
  }, [walletName]);
  return (
    <OnboardingLayout>
      <OnboardingHeader
        title="Name your wallet"
        message="Wallet names may contain only alphanumeric lowercase characters."
      />

      <SafeAreaView sx={{ flex: 1 }}>
        <OnboardingFooter>
          <View sx={{ width: '100%' }}>
            <Input
              autoCapitalize="none"
              onChangeText={(newText) => onChange(newText)}
              defaultValue={walletName}
              error={errorMessage}
              label="Wallet name"
              placeholder="MyWallet"
            />
          </View>

          <Button
            variant={isValid ? 'primary' : 'default'}
            disabled={!isValid}
            onPress={() =>
              navigation.navigate('CreatePassword', {
                termsAccepted: termsAccepted,
                walletName: walletName,
              })
            }
          >
            continue
          </Button>
        </OnboardingFooter>
      </SafeAreaView>
    </OnboardingLayout>
  );
}
