import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { CreateTx } from '@/screens';
import { theme } from '@/ui';

export type TxParamList = {
  ConfirmTx: undefined;
  CreateTx: { type: 'send' | 'receive' | 'reveal' | 'redeem' };
  Tx: {
    screen: string;
    params: { type: string };
  };
};

const Stack = createNativeStackNavigator<TxParamList>();

// const GoToAddPost = () => {
//   const { navigate } = useNavigation();
//   return (
//     <Pressable onPress={() => navigate('ConfirmTx')}>
//       <Text>Create</Text>
//     </Pressable>
//   );
// };

export const TxNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true, gestureEnabled: true }}
    >
      <Stack.Group>
        <Stack.Screen
          name="CreateTx"
          component={CreateTx}
          initialParams={{ type: 'send' }}
          options={() => ({
            headerStyle: {
              backgroundColor: theme.colors.bg[800],
              // borderBottomWidth: 2,
              // borderColor: theme.colors.border.light,
            },
            headerShadowVisible: true, // applied here
            // headerBackTitleVisible: true,
            headerTintColor: theme.colors.text,
            headerTitleStyle: {
              fontSize: theme.fontSizes.sm,
              fontWeight: '600',
            },
          })}
        />
      </Stack.Group>

      {/* <Stack.Screen name="ConfirmSendTx" component={Onboarding} /> */}
    </Stack.Navigator>
  );
};
