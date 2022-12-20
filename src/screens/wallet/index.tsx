import React from 'react';

import { ScrollView, Text, View } from '@/ui';

export const Wallet = () => {
  return (
    <ScrollView className="bg-base-800">
      <View className="flex-1 px-4 pt-16">
        <Text variant="lg" className="font-bold">
          Wallet
        </Text>
      </View>
    </ScrollView>
  );
};
