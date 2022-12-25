import React from 'react';
import type { SvgProps } from 'react-native-svg';

import {
  Arrow,
  Chevron,
  Copy,
  Domains,
  Feed,
  Github,
  Handshake,
  Home,
  Language,
  Lock,
  Menu,
  NoData,
  Plus,
  Rate,
  Settings,
  Share,
  Style,
  Support,
  Tube,
  WalletIcon,
  Website,
} from '../icons';
import { theme } from '../theme';

type Props = SvgProps & {
  name:
    | 'arrow'
    | 'chevron'
    | 'copy'
    | 'domains'
    | 'feed'
    | 'github'
    | 'handshake'
    | 'home'
    | 'language'
    | 'lock'
    | 'menu'
    | 'no-data'
    | 'plus'
    | 'rate'
    | 'settings'
    | 'share'
    | 'style'
    | 'support'
    | 'tube'
    | 'wallet'
    | 'website';
  color?: string;
  size?: number;
};

export const Icon = ({
  name,
  color = theme.colors.text,
  size = 18,
  style,
  ...props
}: Props) => {
  switch (name) {
    case 'arrow':
      return <Arrow color={color} style={style} {...props} />;
    case 'chevron':
      return <Chevron color={color} style={style} {...props} />;
    case 'copy':
      return <Copy color={color} style={style} {...props} />;
    case 'domains':
      return <Domains color={color} style={style} {...props} />;
    case 'feed':
      return <Feed color={color} style={style} {...props} />;
    case 'github':
      return <Github color={color} style={style} {...props} />;
    case 'handshake':
      return <Handshake color={color} style={style} {...props} />;
    case 'home':
      return <Home color={color} style={style} {...props} />;
    case 'language':
      return <Language color={color} style={style} {...props} />;
    case 'lock':
      return <Lock color={color} size={size} style={style} {...props} />;
    case 'menu':
      return <Menu color={color} style={style} {...props} />;
    case 'no-data':
      return <NoData />;
    case 'plus':
      return <Plus color={color} style={style} {...props} />;
    case 'rate':
      return <Rate color={color} style={style} {...props} />;
    case 'settings':
      return <Settings color={color} size={size} style={style} {...props} />;
    case 'share':
      return <Share color={color} style={style} {...props} />;
    case 'style':
      return <Style color={color} style={style} {...props} />;
    case 'support':
      return <Support color={color} style={style} {...props} />;
    case 'tube':
      return <Tube color={color} style={style} {...props} />;
    case 'wallet':
      return <WalletIcon color={color} style={style} {...props} />;
    case 'website':
      return <Website color={color} style={style} {...props} />;
  }
};
