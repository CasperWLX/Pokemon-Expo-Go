import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING: Record<string, React.ComponentProps<typeof FontAwesome>['name']> = {
  'house.fill': 'home',
  'user.fill': 'user',
  'arrow.fill': 'arrow-left',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
};

export type IconSymbolName = keyof typeof MAPPING;

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web.
 * This ensures a consistent look across platforms and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color = '#000', // Default color to black
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color?: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  const mappedIcon = MAPPING[name];

  if (!mappedIcon) {
    console.warn(`Icon "${name}" is not mapped to a Material Icon.`);
    return null; // Render nothing if icon mapping is missing
  }

  return <FontAwesome color={color} size={size} name={mappedIcon} style={{padding: 2}} />;
}
