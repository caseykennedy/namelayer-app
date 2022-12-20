import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function Menu({ color = '#fff', ...props }: SvgProps) {
  return (
    <Svg width={32} height={10} viewBox="0 0 32 10" fill="none" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2L31 2C31.5523 2 32 1.55228 32 1C32 0.447715 31.5523 0 31 0L1 0ZM31 10C31.5523 10 32 9.55229 32 9C32 8.44772 31.5523 8 31 8L1 8C0.447715 8 0 8.44771 0 9C0 9.55228 0.447715 10 1 10L31 10Z"
        fill={color}
      />
    </Svg>
  );
}
