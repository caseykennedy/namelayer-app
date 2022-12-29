import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, Text, View } from 'dripsy';
import { EventEmitter2 } from 'eventemitter2';
import React from 'react';

import type { RootStackParamList } from '@/navigation/types';
import { setIsSyncing, useWallet } from '@/store';
import { Button, Wallet } from '@/ui/components';
import NodeClient from '@/utils/nodeclient';

const apiKey = '45b260cb1edeabe7515cc3ac6913acd2';
const apiHost = 'https://api.handshakeapi.com/hsd';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ConfirmTx'>;

export const Dashboard = ({ route, navigation }: ScreenProps) => {
  const [test, setTest] = React.useState('');
  const nav = useNavigation();
  console.log('ConfirmTxProps:', route, navigation);

  const wallet = useWallet((state) => state);
  console.log('wallet:', wallet);

  console.log('EventEmitter2:', EventEmitter2);

  const testNode = async () => {
    const nodeClient = new NodeClient({ apiHost, apiKey });
    try {
      const blockchanInfo = await nodeClient.getBlockchainInfo();
      const block = await nodeClient.getBlock(
        blockchanInfo!.result!.bestblockhash
      );
      const { hash, height, time } = block.result || {};
      const json = await nodeClient.getNameInfo('c');
      const { result } = json;
      console.log('res:', result.info.name);
      setTest(JSON.stringify(result));
    } catch (err) {
      console.log('err:', err);
    }
  };

  React.useEffect(() => {
    testNode();
  }, []);

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
          {test}
        </Text>
      </View>
    </ScrollView>
  );
};
