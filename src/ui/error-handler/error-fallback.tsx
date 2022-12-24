import { Text, View } from 'dripsy';
import * as React from 'react';

import { Button } from '../components';
import { Screen } from '../screen';

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
