import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, Text, View } from 'dripsy';
import React from 'react';

import type { RootStackParamList } from '@/navigation/types';
import { setIsSyncing, useWallet } from '@/store';
import { Button, Wallet } from '@/ui/components';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ConfirmTx'>;

export const Dashboard = ({ route, navigation }: ScreenProps) => {
  const nav = useNavigation();
  console.log('ConfirmTxProps:', route, navigation);

  const wallet = useWallet((state) => state);
  console.log('wallet:', wallet);

  return (
    <ScrollView sx={{ flex: 1, backgroundColor: 'bg.800' }}>
      <Wallet />
      <View
        sx={{
          flex: 1,
          backgroundColor: 'bg.600',
        }}
      >
        <Pressable
        // style={({ pressed }) => ({
        //   backgroundColor: pressed ? '#008080' : '#a4c936',
        //   opacity: pressed ? 0.5 : 1,
        // })}
        >
          <Button
            label="open confirm tx modal"
            onPress={() => nav.navigate('ConfirmTx')}
            sx={{ px: 'gutter', py: 'gutter', alignItems: 'center' }}
          />
        </Pressable>
        <Pressable onPress={() => setIsSyncing(true)}>
          <Text variants={['md', 'centered']} sx={{ color: 'muted' }}>
            set sync on
          </Text>
        </Pressable>
        <Pressable onPress={() => setIsSyncing(false)}>
          <Text variants={['md', 'centered']} sx={{ color: 'muted' }}>
            set sync off
          </Text>
        </Pressable>
        <Pressable onPress={() => wallet.setCurrentAccount('current account')}>
          <Text variants={['md', 'centered']} sx={{ color: 'muted' }}>
            current wallet account
          </Text>
        </Pressable>
        <Pressable onPress={() => wallet.setCurrentAccount('default')}>
          <Text variants={['md', 'centered']} sx={{ color: 'muted' }}>
            default wallet account
          </Text>
        </Pressable>
      </View>
      <View
        sx={{
          flex: 1,
          py: 'xl',
        }}
      >
        <Text variants={['md', 'centered']} sx={{ color: 'muted' }}>
          {wallet.currentAccount}
        </Text>
      </View>
      <View
        sx={{
          flex: 1,
          py: 'xl',
        }}
      >
        <Text variants={['md', 'centered']} sx={{ color: 'muted' }}>
          transaction history
        </Text>
      </View>
    </ScrollView>
  );
};
