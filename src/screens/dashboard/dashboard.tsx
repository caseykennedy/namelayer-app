import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, Text, View } from 'dripsy';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import { put } from '@/utils/db';

const bdb = require('bdb');
const DB = require('bdb/lib/db');

import type { RootStackParamList } from '@/navigation/types';
import { useStore, useWallet } from '@/store';
import { theme } from '@/ui';
import { Button, Wallet } from '@/ui/components';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ConfirmTx'>;

export const Dashboard = ({ route, navigation }: ScreenProps) => {
  const nav = useNavigation();
  console.log('ConfirmTxProps:', route, navigation);

  const blockHeight = useStore.use.height();
  const wallet = useWallet((state) => state);
  const apiHost = useStore.use.apiHost();
  const apiKey = useStore.use.apiKey();
  const setIsSyncing = useStore.use.setIsSyncing();

  useEffect(() => {
    const putTest = async () => {
      const db = bdb.create('/test-store');
      await db.open();
      try {
        const test = await put(db, 'test', '00');
        console.log('test:::', test);
      } catch (e) {
        console.error('test:::', e);
      }
    };
    console.log('putTest:', putTest());
  }, []);

  // React.useEffect(() => {
  //   const testFunc = async () => {
  //     try {
  //       const nodeClient = new NodeClient({ apiHost, apiKey });

  //       console.log('nodeClient:::', nodeClient.store);
  //     } catch (error) {
  //       console.log('fetchLatestBlock', error);
  //     }

  //     // return {
  //     //   hash,
  //     //   height,
  //     //   time,
  //     // };
  //   };

  //   console.log('testFunc', testFunc());
  // }, [apiHost, apiKey]);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.bg[800] }}>
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
      </View>

      <View
        sx={{
          flex: 1,
          py: 'md',
        }}
      >
        <Text variants={['md', 'centered']} sx={{ color: 'muted' }}>
          {blockHeight}
        </Text>
      </View>
    </ScrollView>
  );
};
