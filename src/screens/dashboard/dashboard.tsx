import { useNavigation } from '@react-navigation/native';
import { Text, useDripsyTheme, View } from 'dripsy';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import { useStore } from '@/store';
import { Button, Wallet } from '@/ui';

export function Dashboard() {
  const { colors } = useDripsyTheme().theme;
  const nav = useNavigation();

  const blockHeight = useStore.use.height();
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
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg[600] }}>
      <Wallet />
      <View
        sx={{
          flex: 1,
          p: 'gutter',
        }}
      >
        <Button variant="primary" onPress={() => nav.navigate('ConfirmTx')}>
          <Text>open confirm tx modal</Text>
        </Button>
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
}
