import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, View } from 'dripsy';
import React from 'react';
import { Button } from 'react-native';

import { useIsFirstTime } from '@/core/hooks';
export const Onboarding = () => {
  const nav = useNavigation();
  // TODO: disable this rule for vars with underscore
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [_, setIsFirstTime] = useIsFirstTime();
  return (
    <View
      sx={{
        flex: 1,
        backgroundColor: 'bg.900',
      }}
    >
      <SafeAreaView>
        {/* <Button
          label="Let's Get Started "
          onPress={() => {
            setIsFirstTime(false);
          }}
        /> */}
        <Button onPress={() => nav.goBack()} title="Dismiss" />
        <Button onPress={() => nav.navigate('ConfirmTx')} title="Confirm TX" />
      </SafeAreaView>
    </View>
  );
};
