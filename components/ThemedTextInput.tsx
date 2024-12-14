import React from 'react';
import { TextInput, StyleSheet, type TextInputProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextInputProps = TextInputProps & {
  lightBackgroundColor?: string;
  darkBackgroundColor?: string;
  lightTextColor?: string;
  darkTextColor?: string;
};

export function ThemedTextInput({
  style,
  lightBackgroundColor,
  darkBackgroundColor,
  lightTextColor,
  darkTextColor,
  ...rest
}: ThemedTextInputProps) {
  const backgroundColor = useThemeColor(
    { light: lightBackgroundColor, dark: darkBackgroundColor },
    'background'
  );
  const textColor = useThemeColor(
    { light: lightTextColor, dark: darkTextColor },
    'text'
  );

  return (
    <TextInput
    className={`${backgroundColor} color:${textColor}`}
      placeholderTextColor={textColor} // Use the same text color for placeholder
      {...rest}
    />
  );
}
