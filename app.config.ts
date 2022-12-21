import type { ConfigContext, ExpoConfig } from '@expo/config';

import { Config } from './config/config.js';

// const IS_DEV = process.env.APP_ENV === 'development';
// const IS_BETA = process.env.APP_ENV === 'beta';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Config.name,
  description: `${Config.name} Mobile App`,
  slug: 'obytesapp',
  version: Config.version.toString(),
  orientation: 'portrait',
  icon: Config.icon,
  userInterfaceStyle: 'dark',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#000000',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Config.scheme,
    // jsEngine: 'hermes',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: Config.foregroundImage,
      backgroundColor: '#000000',
    },
    package: Config.scheme,
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    [
      '@bacons/link-assets',
      [
        './assets/fonts/NBInternationalPro-Mono.ttf',
        // './assets/fonts/NBInternationalPro-Regular.ttf',
        // './assets/fonts/NBInternationalPro-Medium.ttf',
        // './assets/fonts/NBInternationalPro-Bold.ttf',
      ],
    ],
  ],
});
