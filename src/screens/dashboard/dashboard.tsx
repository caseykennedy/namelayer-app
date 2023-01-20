import { useNavigation } from '@react-navigation/native';
import { Text, useDripsyTheme, View } from 'dripsy';
import React from 'react';
import { ScrollView } from 'react-native';

import { useStore } from '@/store';
import { Button, Wallet } from '@/ui';

export function Dashboard() {
  const { colors } = useDripsyTheme().theme;
  const nav = useNavigation();

  const blockHeight = useStore.use.height();
  const testFn = useStore.use.testFn();

  async function getWalletClient() {
    const testWalletReg = testFn();
    try {
      console.log('testWalletReg', testWalletReg);
    } catch (error) {
      console.log('error', error);
    }
  }

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

        <Button variant="primary" onPress={getWalletClient}>
          <Text>wallet client</Text>
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
