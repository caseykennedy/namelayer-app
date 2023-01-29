import { useNavigation } from '@react-navigation/native';
import { Text, useDripsyTheme, View } from 'dripsy';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import { useStore } from '@/store';
import { Button, Wallet } from '@/ui';
import { apiMap } from '@/utils/client-api';
import MessageTypes from '@/utils/message-types';

export function Dashboard() {
  const { colors } = useDripsyTheme().theme;
  const nav = useNavigation();

  const blockHeight = useStore.use.height();
  // const testFn = useStore.use.testFn();

  // async function getWalletClient() {
  //   const testWalletReg = testFn();
  //   try {
  //     console.log('testWalletReg', testWalletReg);
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // }

  // useEffect(() => {
  //   async function sendMessage(message = '') {
  //     try {
  //       const response = await fetch('http://localhost:3000/test', {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         // body: JSON.stringify({ message }),
  //       });
  //       return response;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   console.log(sendMessage());
  // }, []);

  // const [customers, setCustomers] = React.useState<string>('');

  useEffect(() => {
    console.log('customers:');
  }, []);

  const pushMessage = async () => {
    try {
      const res = await apiMap.message.POST({
        type: MessageTypes.GET_LATEST_BLOCK,
        payload: {},
      });
      console.log('res', res);
    } catch (error) {
      console.error('error', error);
    }
  };

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

        <Button variant="primary" onPress={pushMessage}>
          <Text>add customer</Text>
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

      {/* <View
        sx={{
          flex: 1,
          py: 'md',
        }}
      >
        <Text variants={['md', 'centered']} sx={{ color: 'muted' }}>
          {customers}
        </Text>
      </View> */}
    </ScrollView>
  );
}
