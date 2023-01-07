import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, SafeAreaView, Text, View } from 'dripsy';
import React, { useCallback, useEffect, useState } from 'react';

import type { RootStackParamList } from '@/navigation/types';
import { Button, Input } from '@/ui';

import { OnboardingFooter, OnboardingHeader, OnboardingLayout } from './layout';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'CreatePassword'>;

export const CreatePassword = ({ navigation, route }: ScreenProps) => {
  const { termsAccepted, walletName } = route.params;
  const [errorMessage, setErrorMessage] = useState('');
  const [visible, setVisibility] = useState(false);
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setPassword('');
  }, []);

  useEffect(() => {
    console.log(password);
  }, [password]);

  const onChange = useCallback((newPassword: string) => {
    const value = newPassword;
    setErrorMessage('');
    setIsValid(false);
    if (value.length < 8) {
      setErrorMessage('Password must be at least 8 characters.');
      return;
    } else {
      setPassword(value);
      setIsValid(true);
    }
  }, []);

  return (
    <OnboardingLayout>
      <OnboardingHeader
        title="Create your password"
        message="Passwords must be at least 8 characters long."
      />

      <SafeAreaView sx={{ flex: 1 }}>
        <View>
          <Input
            autoCapitalize="none"
            onChangeText={(newPassword) => onChange(newPassword)}
            error={errorMessage}
            label="Password"
            placeholder="********"
            secureTextEntry={visible ? false : true}
          />
          <Pressable onPress={() => setVisibility(!visible)}>
            <Text>{visible ? 'hide' : 'show'} password</Text>
          </Pressable>
        </View>

        <OnboardingFooter>
          <Button
            variant={isValid ? 'primary' : 'default'}
            disabled={!isValid}
            onPress={() =>
              navigation.navigate('SeedWarning', {
                termsAccepted,
                walletName,
                password,
              })
            }
          >
            <Text>seed warning</Text>
          </Button>
        </OnboardingFooter>
      </SafeAreaView>
    </OnboardingLayout>
  );
};
