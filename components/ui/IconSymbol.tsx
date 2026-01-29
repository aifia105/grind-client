// Fallback for using MaterialIcons on Android and web.

import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconConfig = {
  library:
    | 'MaterialIcons'
    | 'FontAwesome5'
    | 'FontAwesome'
    | 'FontAwesome6'
    | 'Entypo';
  name:
    | ComponentProps<typeof MaterialIcons>['name']
    | ComponentProps<typeof FontAwesome5>['name']
    | ComponentProps<typeof FontAwesome>['name']
    | ComponentProps<typeof FontAwesome6>['name']
    | ComponentProps<typeof Entypo>['name'];
};

type IconMapping = {
  'house.fill': IconConfig;
  'paperplane.fill': IconConfig;
  'chevron.left.forwardslash.chevron.right': IconConfig;
  'chevron.right': IconConfig;
  'dumbbell.fill': IconConfig;
  calendar: IconConfig;
  meals: IconConfig;
  sleep: IconConfig;
  gear: IconConfig;
  menu: IconConfig;
  plus: IconConfig;
  'book.fill': IconConfig;
  sparkles: IconConfig;
  magnifyingglass: IconConfig;
  'line.3.horizontal.decrease': IconConfig;
  xmark: IconConfig;
};

type IconSymbolName = keyof IconMapping;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING: IconMapping = {
  'house.fill': { library: 'Entypo', name: 'home' },
  'paperplane.fill': { library: 'MaterialIcons', name: 'send' },
  'chevron.left.forwardslash.chevron.right': {
    library: 'MaterialIcons',
    name: 'code',
  },
  'chevron.right': { library: 'MaterialIcons', name: 'chevron-right' },
  'dumbbell.fill': { library: 'FontAwesome5', name: 'dumbbell' },
  calendar: { library: 'FontAwesome', name: 'calendar' },
  meals: { library: 'FontAwesome6', name: 'bowl-food' },
  sleep: { library: 'MaterialIcons', name: 'nightlight' },
  gear: { library: 'MaterialIcons', name: 'settings' },
  menu: { library: 'Entypo', name: 'menu' },
  plus: { library: 'Entypo', name: 'plus' },
  'book.fill': { library: 'FontAwesome', name: 'book' },
  sparkles: { library: 'FontAwesome5', name: 'magic' },
  magnifyingglass: { library: 'FontAwesome', name: 'search' },
  'line.3.horizontal.decrease': { library: 'MaterialIcons', name: 'tune' },
  xmark: { library: 'MaterialIcons', name: 'close' },
};

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  const iconConfig = MAPPING[name];

  if (!iconConfig) {
    console.warn(`Icon "${name}" not found in MAPPING. Using fallback icon.`);
    return (
      <MaterialIcons color={color} size={size} name="home" style={style} />
    );
  }

  if (iconConfig.library === 'Entypo') {
    return (
      <Entypo
        color={color}
        size={size}
        name={iconConfig.name as ComponentProps<typeof Entypo>['name']}
        style={style}
      />
    );
  }

  if (iconConfig.library === 'FontAwesome5') {
    return (
      <FontAwesome5
        color={color}
        size={size}
        name={iconConfig.name as ComponentProps<typeof FontAwesome5>['name']}
        style={style}
      />
    );
  }

  if (iconConfig.library === 'FontAwesome6') {
    return (
      <FontAwesome6
        color={color}
        size={size}
        name={iconConfig.name as ComponentProps<typeof FontAwesome5>['name']}
        style={style}
      />
    );
  }

  if (iconConfig.library === 'FontAwesome') {
    return (
      <FontAwesome
        color={color}
        size={size}
        name={iconConfig.name as ComponentProps<typeof FontAwesome>['name']}
        style={style}
      />
    );
  }

  return (
    <MaterialIcons
      color={color}
      size={size}
      name={iconConfig.name as ComponentProps<typeof MaterialIcons>['name']}
      style={style}
    />
  );
}
