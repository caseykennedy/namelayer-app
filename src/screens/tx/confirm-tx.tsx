import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'dripsy';
import React from 'react';
import { Button } from 'react-native';

import type { RootStackParamList } from '@/navigation/types';

type ScreenProps = NativeStackScreenProps<RootStackParamList>;

export const ConfirmTx = ({ route, navigation }: ScreenProps) => {
  const nav = useNavigation();

  console.log('ConfirmTxProps:', route, navigation);

  return (
    <View sx={{ flex: 1, backgroundColor: 'bg.800' }}>
      <Text
        variants={['md', 'centered', 'bold']}
        sx={{
          pt: 'lg',
          pb: 'sm',
        }}
      >
        Confirm TX modal
      </Text>
      <Button onPress={() => nav.goBack()} title="Dismiss" />
    </View>
  );
};
