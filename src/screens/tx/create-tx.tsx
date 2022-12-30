import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, Text, View } from 'dripsy';
import React, { useEffect } from 'react';

import { txTypes } from '@/constants/tx-types';
import type { RootStackParamList } from '@/navigation/types';
import { Chevron } from '@/ui';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateTx'>;

export const CreateTx = ({ route, navigation }: ScreenProps) => {
  const txType = route.params.type;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: txType,
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      gestureEnabled: true,
    });
  });

  switch (txType) {
    case txTypes.SEND:
      return <TxPanel type={txType} />;
    case txTypes.RECEIVE:
      return <TxPanel type={txType} />;
    case txTypes.REVEAL:
      return <TxPanel type={txType} />;
    case txTypes.REDEEM:
      return <TxPanel type={txType} />;
    default:
      return null;
  }
};

type TxPanelProps = {
  type: string;
};

const TxPanel = ({ type }: TxPanelProps) => {
  return (
    <View sx={{ flex: 1, backgroundColor: 'bg.800' }}>
      <Text
        variants={['md', 'centered', 'bold']}
        sx={{
          pt: 'lg',
          pb: 'sm',
        }}
      >
        {type}
      </Text>
    </View>
  );
};

type BackButtonProps = {
  onPress: () => void;
};

const BackButton = ({ onPress }: BackButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      sx={{
        p: 'xxs',
        pr: 'gutter',
      }}
    >
      <Chevron
        style={{
          transform: [{ rotate: '180deg' }],
        }}
      />
    </Pressable>
  );
};
