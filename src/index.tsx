// import 'react-native-get-random-values';
require('node-libs-react-native/globals.js');
import 'react-native-url-polyfill/auto';
// import 'crypto';
import 'react-native-gesture-handler';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { DripsyProvider } from 'dripsy';
import * as SplashScreen from 'expo-splash-screen';
import { polyfillWebCrypto } from 'expo-standard-web-crypto';
import React, { Suspense, useEffect } from 'react';
import FlashMessage from 'react-native-flash-message';
import Toast from 'react-native-toast-message';

import { APIProvider } from '@/api';
import { hydrateAuth } from '@/core';
import { RootNavigator } from '@/navigation';
import { useStore } from '@/store';
import { theme } from '@/ui/theme';
import Fonts from '@/ui/theme/fonts';

polyfillWebCrypto();

hydrateAuth();
SplashScreen.preventAutoHideAsync();

const App = () => {
  const fetchLatestBlock = useStore.use.fetchLatestBlock();

  useEffect(() => {
    fetchLatestBlock();
  }, [fetchLatestBlock]);

  return (
    <>
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
      <Toast />
    </>
  );
};

export default App;
