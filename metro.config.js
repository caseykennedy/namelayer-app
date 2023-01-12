// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const pak = require('./package.json');

const defaultConfig = getDefaultConfig(__dirname);

const modules = Object.keys({
  ...pak.peerDependencies,
});

module.exports = {
  ...defaultConfig,
  resolver: {
    extraNodeModules: modules.reduce(
      (acc, name) => {
        acc[name] = path.join(__dirname, 'node_modules', name);
        return acc;
      },
      {
        ...require('node-libs-react-native'),
        crypto: require.resolve('expo-standard-web-crypto'),
        stream: require.resolve('stream-browserify'),
        dns: require.resolve('native-dns'),
        dgram: require.resolve('react-native-udp'),
        net: require.resolve('react-native-tcp'),
        fs: require.resolve('react-native-fs'),
      }
    ),
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
