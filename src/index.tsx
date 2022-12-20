import '../shim.js';
import 'react-native-gesture-handler';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { DripsyProvider } from 'dripsy';
import * as SplashScreen from 'expo-splash-screen';
import React, { Suspense } from 'react';
import FlashMessage from 'react-native-flash-message';

import { APIProvider } from '@/api';
import { hydrateAuth } from '@/core';
import { RootNavigator } from '@/navigation';
import { theme } from '@/ui/theme';
import Fonts from '@/ui/theme/fonts';

hydrateAuth();
SplashScreen.preventAutoHideAsync();

const App = () => {
  return (
    <Fonts>
      <DripsyProvider theme={theme}>
        <BottomSheetModalProvider>
          <APIProvider>
            <Suspense>
              <RootNavigator />
              <FlashMessage position="top" />
            </Suspense>
          </APIProvider>
        </BottomSheetModalProvider>
      </DripsyProvider>
    </Fonts>
  );
};

export default App;
