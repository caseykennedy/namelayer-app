import { Text, View } from 'dripsy';
import React from 'react';

import type { TxKeyPath } from '@/core';

type Props = {
  children: React.ReactNode;
  title?: TxKeyPath;
};

export const ItemsContainer = ({ children, title }: Props) => {
  return (
    <>
      {title && <Text variant="lg" />}
      <View>{children}</View>
    </>
  );
};
