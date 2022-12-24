import { ActivityIndicator, Text, View } from 'dripsy';
import React from 'react';

import { NoData } from '../../icons';

type Props = {
  isLoading: boolean;
};

export const EmptyList = React.memo(({ isLoading }: Props) => {
  return (
    <View>
      {!isLoading ? (
        <View>
          <NoData />
          <Text>Sorry! No data found</Text>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
});
