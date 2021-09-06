import { StyleSheet } from 'react-native';
import colors from '../../../colors';
import { getWidthPercentage } from '../../../helper';
import { font } from '../../../styles';

export const smallButtonStyle = StyleSheet.create({
  buttonContainer: {
    width: getWidthPercentage(24.1),
    height: getWidthPercentage(10.6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    flexDirection: 'row',
    marginHorizontal: 2.5
  },
  iconStyle: {
    marginRight: 7.5
  },
  borderBlack: {
    borderWidth: 1,
    borderColor: colors.borderVeryLightPink
  },
  largeButtonContainer: {
    width: getWidthPercentage(70.1),
    height: getWidthPercentage(10.6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    flexDirection: 'row',
    marginHorizontal: 2.5
  }
});