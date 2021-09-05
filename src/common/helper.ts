import {
  Dimensions,
  Platform
} from 'react-native';

import Colors from './colors';

export const { width: fullWidth, height: fullHeight } = Dimensions.get(
  'window'
);

export const getWidthPercentage = percentage => (fullWidth * percentage) / 100;

export const getHeightPercentage = percentage =>
  (fullHeight * percentage) / 100;

export const getResponsiveFont = fontSize => {
  const scale = fullWidth / 414;
  if (fullHeight > 900) {
    return fontSize * 1.5;
  }
  return fontSize * scale;
};

export const getColor = index => {
  const value = index % 6;
  switch (value) {
    case 0:
      return Colors.coolBlue;
    case 1:
      return Colors.shamrockGreen;
    case 2:
      return Colors.orangeRed;
    case 3:
      return Colors.brownishGray;
    case 4:
      return Colors.duskyPurple;
    case 5:
      return Colors.purpleyPink;
    default:
      return Colors.coolBlue;
  }
};