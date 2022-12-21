import { ScrollView, View } from 'dripsy';
import React from 'react';

import { TopBar, Wallet } from '@/ui/components';

export const Dashboard = () => {
  return (
    <ScrollView
      sx={{ backgroundColor: 'bg.900' }}
      className={undefined}
      tw={undefined}
      onPointerEnter={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeave={undefined}
      onPointerLeaveCapture={undefined}
      onPointerMove={undefined}
      onPointerMoveCapture={undefined}
      onPointerCancel={undefined}
      onPointerCancelCapture={undefined}
      onPointerDown={undefined}
      onPointerDownCapture={undefined}
      onPointerUp={undefined}
      onPointerUpCapture={undefined}
      accessibilityLabelledBy={undefined}
      accessibilityLanguage={undefined}
      stickyHeaderHiddenOnScroll={undefined}
      StickyHeaderComponent={undefined}
      automaticallyAdjustKeyboardInsets={undefined}
      automaticallyAdjustsScrollIndicatorInsets={undefined}
    >
      <TopBar />
      <Wallet />
      <View
        sx={{
          backgroundColor: 'bg.700',
          height: 150,
        }}
      />
    </ScrollView>
  );
};
