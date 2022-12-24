import type { ParamListBase } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, Text, View } from 'dripsy';
import * as React from 'react';

import { txTypes } from '@/utils/constants';

import { Arrow } from '../../icons';

type ActionProps = {
  type: typeof txTypes[keyof typeof txTypes];
  onPress: () => void;
  icon: React.ReactNode;
};

const WalletActionButton = ({ icon, onPress, type }: ActionProps) => {
  return (
    <Pressable
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        py: 'md',
      }}
      onPress={onPress}
    >
      <View
        sx={{
          mr: 'xxs',
        }}
      >
        {icon}
      </View>
      <Text sx={{ fontWeight: 'bold' }}>{type}</Text>
    </Pressable>
  );
};

export const WalletActionButtonSend = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <WalletActionButton
      type={txTypes.SEND}
      icon={<Arrow />}
      onPress={() =>
        nav.push('Tx', {
          screen: 'CreateTx',
          params: {
            type: txTypes.SEND,
          },
        })
      }
    />
  );
};

export const WalletActionButtonReceive = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <WalletActionButton
      type={txTypes.RECEIVE}
      icon={
        <Arrow
          style={{
            transform: [{ rotate: '180deg' }],
          }}
        />
      }
      onPress={() =>
        nav.push('Tx', {
          screen: 'CreateTx',
          params: {
            type: txTypes.RECEIVE,
          },
        })
      }
    />
  );
};

export const WalletActionButtonReveal = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <WalletActionButton
      type={txTypes.REVEAL}
      icon={<Arrow />}
      onPress={() =>
        nav.push('Tx', {
          screen: 'CreateTx',
          params: {
            type: txTypes.REVEAL,
          },
        })
      }
    />
  );
};

export const WalletActionButtonRedeem = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <WalletActionButton
      type={txTypes.REDEEM}
      icon={<Arrow />}
      onPress={() =>
        nav.push('Tx', {
          screen: 'CreateTx',
          params: {
            type: txTypes.REDEEM,
          },
        })
      }
    />
  );
};
