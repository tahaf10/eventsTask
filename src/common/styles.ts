import {
  StyleSheet,
  Dimensions
} from 'react-native';

import {
  //alpha,
  // getWidthPercentage,
  // getHeightPercentage,
  getResponsiveFont
} from './helper';


export const { width: fullWidth, height: fullHeight } = Dimensions.get(
  'window'
);

export const font = (fontSize, fontWeight = '', fontFamily = 'OpenSans') => ({
  fontSize: getResponsiveFont(fontSize),
  fontFamily: fontWeight ? `${fontFamily}-${fontWeight}` : `${fontFamily}`,
});
