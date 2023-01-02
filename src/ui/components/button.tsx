import { ActivityIndicator, Pressable } from 'dripsy';
import React from 'react';
import type { PressableProps } from 'react-native';

// type Variant = {
//   container: string;
//   label: string;
//   indicator: string;
// };
// type VariantName = 'defaults' | 'primary' | 'outline' | 'secondary';
// type BVariant = {
//   [key in VariantName]: Variant;
// };

// export const buttonVariants: BVariant = {
//   defaults: {
//     container:
//       'flex-row items-center justify-center rounded-full px-12 py-3 my-2',
//     label: 'text-[16px] font-medium text-white',
//     indicator: 'text-white h-[30px]',
//   },
//   primary: {
//     container: 'bg-black',
//     label: '',
//     indicator: 'text-white',
//   },
//   secondary: {
//     container: 'bg-primary-600',
//     label: 'text-secondary-600',
//     indicator: 'text-white',
//   },
//   outline: {
//     container: 'border border-neutral-400',
//     label: 'text-black',
//     indicator: 'text-black',
//   },
// };

interface Props extends PressableProps {
  children: React.ReactNode;
  loading?: boolean;
  sx?: any;
}

export const Button = ({
  children,
  loading = false,
  disabled = false,
  ...props
}: Props) => {
  return (
    <Pressable disabled={disabled || loading} {...props}>
      {loading ? <ActivityIndicator size="small" /> : children}
    </Pressable>
  );
};
