// import 'react-native-get-random-values';
require('node-libs-react-native/globals.js');
import 'react-native-url-polyfill/auto';
// import 'crypto';
import 'react-native-gesture-handler';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { DripsyProvider } from 'dripsy';
import * as SplashScreen from 'expo-splash-screen';
import { polyfillWebCrypto } from 'expo-standard-web-crypto';
import React, { Suspense } from 'react';
import FlashMessage from 'react-native-flash-message';
import Toast from 'react-native-toast-message';

import { hydrateAuth } from '@/core';
import { RootNavigator } from '@/navigation';
import { theme } from '@/ui/theme';
import Fonts from '@/ui/theme/fonts';

// crypto polyfill
polyfillWebCrypto();

hydrateAuth();
SplashScreen.preventAutoHideAsync();

const App = () => {
  return (
    <>
      <Fonts>
        <DripsyProvider theme={theme}>
          <BottomSheetModalProvider>
            <Suspense>
              <RootNavigator />
              <FlashMessage position="top" />
            </Suspense>
          </BottomSheetModalProvider>
        </DripsyProvider>
      </Fonts>
      <Toast />
    </>
  );
};

export default App;
