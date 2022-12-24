import { Text, View } from 'dripsy';
import * as React from 'react';
import type { TextInputProps } from 'react-native';
import { TextInput } from 'react-native';

import { colors } from '../../theme';

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const { label, error, ...inputProps } = props;

  // eslint-disable-next-line unused-imports/no-unused-vars
  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  // const borderColor = error
  //   ? 'border-danger-600'
  //   : isFocussed
  //   ? 'border-neutral-600'
  //   : 'border-neutral-400';

  // const bgColor = error ? 'bg-danger-50' : 'bg-neutral-200';
  // const textDirection = isRTL ? 'text-right' : 'text-left';
  return (
    <View>
      {label && (
        <Text
          variant="md"
          // className={error ? 'text-danger-600' : 'text-black'}
        >
          {label}
        </Text>
      )}
      <TextInput
        testID="STextInput"
        ref={ref}
        placeholderTextColor={colors.muted}
        // className={`mt-0 border-[1px] py-4 px-2  ${borderColor} rounded-md ${bgColor} text-[16px] ${textDirection}`}
        onBlur={onBlur}
        onFocus={onFocus}
        {...inputProps}
        // style={StyleSheet.flatten([
        //   { writingDirection: isRTL ? 'rtl' : 'ltr' },
        // ])}
      />
      {error && <Text variant="error">{error}</Text>}
    </View>
  );
});
