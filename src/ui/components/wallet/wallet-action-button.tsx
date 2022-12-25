import type { ParamListBase } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, Text, View } from 'dripsy';
import * as React from 'react';

import { txTypes } from '@/utils/constants';

import { Icon } from '../icon';

const txNavigator = 'Tx';
const createTxScreen = 'CreateTx';

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

export const SendButton = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <WalletActionButton
      type={txTypes.SEND}
      icon={<Icon name="arrow" />}
      onPress={() =>
        nav.push(txNavigator, {
          screen: createTxScreen,
          params: {
            type: txTypes.SEND,
          },
        })
      }
    />
  );
};

export const ReceiveButton = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <WalletActionButton
      type={txTypes.RECEIVE}
      icon={
        <Icon
          name="arrow"
          style={{
            transform: [{ rotate: '180deg' }],
          }}
        />
      }
      onPress={() =>
        nav.push(txNavigator, {
          screen: createTxScreen,
          params: {
            type: txTypes.RECEIVE,
          },
        })
      }
    />
  );
};

export const RevealButton = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <WalletActionButton
      type={txTypes.REVEAL}
      icon={<Icon name="arrow" />}
      onPress={() =>
        nav.push(txNavigator, {
          screen: createTxScreen,
          params: {
            type: txTypes.REVEAL,
          },
        })
      }
    />
  );
};

export const RedeemButton = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <WalletActionButton
      type={txTypes.REDEEM}
      icon={<Icon name="arrow" />}
      onPress={() =>
        nav.push(txNavigator, {
          screen: createTxScreen,
          params: {
            type: txTypes.REDEEM,
          },
        })
      }
    />
  );
};
