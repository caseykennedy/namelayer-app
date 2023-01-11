import { Text, useDripsyTheme, useSx, View } from 'dripsy';
import * as React from 'react';
import type { TextInputProps } from 'react-native';
import { TextInput } from 'react-native';

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const { label, error, ...inputProps } = props;
  const { colors } = useDripsyTheme().theme;
  const sx = useSx();

  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  const borderColor = error
    ? colors.danger[500]
    : isFocussed
    ? colors.purple[400]
    : colors.border.light;

  // const bgColor = error ? 'bg-danger-50' : 'bg-neutral-200';
  return (
    <View>
      {label && (
        <Text
          variant="sm"
          sx={{
            mb: 'xs',
          }}
        >
          {label}
        </Text>
      )}
      <TextInput
        testID="STextInput"
        ref={ref}
        placeholderTextColor={colors.muted}
        style={sx({
          alignItems: 'center',
          px: 'sm',
          py: 'sm',
          mb: 'xs',
          bg: 'bg.900',
          borderRadius: 'md',
          borderStyle: 'solid',
          borderColor,
          borderWidth: 1,
          color: 'text',
          width: '100%',
        })}
        onBlur={onBlur}
        onFocus={onFocus}
        {...inputProps}
      />
      {error && <Text variant="error">{error}</Text>}
    </View>
  );
});
