import { Text, View } from 'dripsy';
import * as React from 'react';

import { Screen } from '../../screen';
import { Button } from '..';

export function ErrorFallback({ resetErrorBoundary }: any) {
  return (
    <Screen>
      <View>
        <Text> Something went wrong: </Text>
        <Button label="try Again" onPress={resetErrorBoundary} />
      </View>
    </Screen>
  );
}
