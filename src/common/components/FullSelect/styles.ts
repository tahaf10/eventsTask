import { StyleSheet } from 'react-native';
import colors from '../../colors';
import { font } from '../../styles';
import { getHeightPercentage, getWidthPercentage } from '../../helper';

const halfSelectStyles = StyleSheet.create({
  flexOneContainer: {
    flex: 1,
    marginHorizontal:10
  },
  mainContainer: {
    width: getWidthPercentage(90),
    height: getHeightPercentage(9),
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  labelStyle: {
    ...font(12),
    color: colors.black,
  },
  containerHeight: {
    height: getHeightPercentage(5.7),
  },
  iconContainer: {
    position: 'absolute',
    right: 5,
    justifyContent: 'flex-end',
    paddingTop: 30,
    alignItems: 'flex-end',
  },
  badgeIcon: {
    width: 18,
    height: 20,
  }
});

export default halfSelectStyles;
