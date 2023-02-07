import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, Text, View } from 'dripsy';
import React, { useCallback, useEffect, useState } from 'react';

import { txTypes } from '@/constants/tx-types';
import type { RootStackParamList } from '@/navigation/types';
import { Button, Chevron, Input } from '@/ui';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateTx'>;

export const CreateTx = ({ route, navigation }: ScreenProps) => {
  const txType = route.params.type;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${txType} HNS`,
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      gestureEnabled: true,
    });
  });

  switch (txType) {
    case txTypes.SEND:
      return (
        <TxPanel>
          <Send />
        </TxPanel>
      );
    case txTypes.RECEIVE:
      return (
        <TxPanel>
          <Send />
        </TxPanel>
      );
    case txTypes.REVEAL:
      return (
        <TxPanel>
          <Send />
        </TxPanel>
      );
    case txTypes.REDEEM:
      return (
        <TxPanel>
          <Send />
        </TxPanel>
      );
    default:
      return null;
  }
};

type TxPanelProps = {
  children: React.ReactNode;
};

const TxPanel = ({ children }: TxPanelProps) => {
  return (
    <View sx={{ backgroundColor: 'bg.600', flex: 1, p: 'gutter' }}>
      {children}
    </View>
  );
};

const Send = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [recipient, setRecipient] = useState('');
  const [isValid, setIsValid] = useState(false);

  const onChange = useCallback((newText: string) => {
    const value = newText;
    setErrorMessage('');

    if (value && !/^[A-Za-z0-9]+$/i.test(value)) {
      setErrorMessage('Can only contain letters and numbers');
      setIsValid(false);
    } else if (value === 'primary') {
      setErrorMessage('Cannot set wallet id to "primary"');
      setIsValid(false);
    } else if (value.length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setRecipient(value);
    }
  }, []);

  React.useEffect(() => {
    console.log(recipient);
  }, [recipient]);

  return (
    <View sx={{ width: '100%' }}>
      <View sx={{ mb: 'gutter', width: '100%' }}>
        <Input
          autoCapitalize="none"
          onChangeText={(newText) => onChange(newText)}
          defaultValue={recipient}
          error={errorMessage}
          label="Recipient"
          placeholder="Recipient"
        />
      </View>
      <View sx={{ mb: 'gutter', width: '100%' }}>
        <Input
          autoCapitalize="none"
          onChangeText={(newText) => onChange(newText)}
          defaultValue={recipient}
          error={errorMessage}
          label="Amount"
          placeholder="Amount"
        />
      </View>

      <Button
        variant={isValid ? 'primary' : 'default'}
        disabled={!isValid}
        onPress={() => {}}
      >
        continue
      </Button>
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
