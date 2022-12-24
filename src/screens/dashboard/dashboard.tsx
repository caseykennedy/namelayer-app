import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, Text, View } from 'dripsy';
import React from 'react';

import type { RootStackParamList } from '@/navigation/types';
import { Wallet } from '@/ui/components';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ConfirmTx'>;

export const Dashboard = ({ route, navigation }: ScreenProps) => {
  const nav = useNavigation();

  console.log('ConfirmTxProps:', route, navigation);

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
          onPress={() => nav.navigate('ConfirmTx')}
          sx={{ px: 'gutter', py: 'lg' }}
        >
          <Text
            variants={['md', 'medium', 'centered']}
            sx={{
              color: 'aqua.400',
            }}
          >
            open confirm tx modal
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
          transaction history
        </Text>
      </View>
    </ScrollView>
  );
};
