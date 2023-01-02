import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, Text, View } from 'dripsy';
import React, { useEffect } from 'react';

import { useIsFirstTime } from '@/core/hooks';
import type { RootStackParamList } from '@/navigation/types';
import { Button } from '@/ui/components/button';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Terms'>;

export const Start = ({ navigation }: ScreenProps) => {
  // const nav = useNavigation();
  // TODO: disable this rule for vars with underscore
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [_, setIsFirstTime] = useIsFirstTime();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View
      sx={{
        flex: 1,
        backgroundColor: 'bg.700',
      }}
    >
      <SafeAreaView sx={{ flex: 1 }}>
        <View
          sx={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text variants={['xxl', 'medium', 'centered']}>Namelayer</Text>
        </View>

        <View
          sx={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: 'lg',
          }}
        >
          <Button
            sx={{
              alignItems: 'center',
              px: 'md',
              py: 'sm',
              mb: 'xs',

              bg: 'bg.900',
              borderRadius: 'xs',
              borderStyle: 'solid',
              borderColor: 'border.light',
              borderWidth: 1,

              width: '100%',
            }}
            onPress={() => {
              setIsFirstTime(true);
            }}
          >
            <Text>import wallet</Text>
          </Button>
          <Button
            sx={{
              alignItems: 'center',
              px: 'md',
              py: 'sm',

              bg: 'purple.700',
              borderRadius: 'xs',
              borderStyle: 'solid',
              borderColor: 'border.dark',
              borderWidth: 1,

              width: '100%',
            }}
            onPress={() => navigation.navigate('Terms')}
          >
            <Text>create new wallet</Text>
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};
