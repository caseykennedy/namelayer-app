import { ScrollView, View } from 'dripsy';
import React from 'react';

import { TopBar, WalletActions, WalletSupply } from '@/ui/components';

export const Dashboard = () => {
  return (
    <ScrollView sx={{ backgroundColor: 'bg.900' }}>
      <TopBar />
      <WalletSupply />
      <WalletActions />
      <View
        sx={{
          backgroundColor: 'bg.700',
          height: 150,
        }}
      />
      <View
        sx={{
          backgroundColor: 'bg.700',
          height: 150,
          mt: 'xxxs',
        }}
      />
    </ScrollView>
  );
};
