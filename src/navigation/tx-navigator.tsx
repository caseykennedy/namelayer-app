import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { Onboarding } from '@/screens';
import { Pressable, Text } from '@/ui';

export type FeedStackParamList = {
  Tx: undefined;
  ConfirmTx: undefined;
};

const Stack = createNativeStackNavigator<FeedStackParamList>();

const GoToAddPost = () => {
  const { navigate } = useNavigation();
  return (
    <Pressable onPress={() => navigate('ConfirmTx')} className="p-2">
      <Text className="text-primary-300">Create</Text>
    </Pressable>
  );
};

export const TxNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => <GoToAddPost />,
        }}
      >
        <Stack.Screen name="Tx" component={Onboarding} />
      </Stack.Group>

      <Stack.Screen name="ConfirmTx" component={Onboarding} />
    </Stack.Navigator>
  );
};
