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
      <View
        sx={{
          flex: 3,
          backgroundColor: 'bg.900',
          borderRadius: 'xxl',
          overflow: 'hidden',
        }}
      >
        <SafeAreaView sx={{ flex: 1 }}>
          <View
            sx={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              p: 'gutter',
            }}
          >
            <Text variants={['xxl', 'medium', 'centered']}>Namelayer</Text>
          </View>
        </SafeAreaView>
      </View>

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
              justifyContent: 'flex-end',
              bg: 'bg.700',
              p: 'gutter',
            }}
          >
            <Button
              onPress={() => {
                setIsFirstTime(true);
              }}
            >
              import wallet
            </Button>
            <Button
              variant="primary"
              onPress={() => navigation.navigate('Terms')}
            >
              create new wallet
            </Button>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};
