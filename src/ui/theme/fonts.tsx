// fonts.tsx
import { useFonts } from 'expo-font';
import React from 'react';

export const fontName = 'NBInternationalPro';
export const monoFontName = 'NBInternationalPro-Mono';

export default function Fonts({ children }: { children: React.ReactNode }) {
  const [loaded] = useFonts({
    [`${fontName}`]: require('../../../assets/fonts/NBInternationalPro-Regular.ttf'),
    [`${fontName}-Medium`]: require('../../../assets/fonts/NBInternationalPro-Medium.ttf'),
    [`${fontName}-Bold`]: require('../../../assets/fonts/NBInternationalPro-Bold.ttf'),
    [monoFontName]: require('../../../assets/fonts/NBInternationalPro-Mono.ttf'),
  });
  if (!loaded) return null;
  return <>{children}</>;
}
