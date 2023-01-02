import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, Text, View } from 'dripsy';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import type { RootStackParamList } from '@/navigation/types';
import { useStore } from '@/store';
import { theme } from '@/ui';
import { Button, Wallet } from '@/ui/components';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ConfirmTx'>;

export const Dashboard = ({}: ScreenProps) => {
  const nav = useNavigation();

  const blockHeight = useStore.use.height();
  // const wallet = useWallet((state) => state);
  // const apiHost = useStore.use.apiHost();
  // const apiKey = useStore.use.apiKey();
  // const setIsSyncing = useStore.use.setIsSyncing();

  const putTest = useStore.use.testPut();

  useEffect(() => {
    putTest();
  }, [putTest]);

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
            onPress={() => nav.navigate('ConfirmTx')}
            sx={{ px: 'gutter', py: 'gutter', alignItems: 'center' }}
          >
            <Text>open confirm tx modal</Text>
          </Button>
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
