import { StyleSheet } from 'react-native';
import colors from '../../../common/colors';
import { getWidthPercentage } from '../../../common/helper';
import { font } from '../../../common/styles';

const PageStyle = StyleSheet.create({
  cardView: {
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderLeftWidth: 3,
    borderColor: colors.borderWhite,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20
  },
  titleText: {
    ...font(20, 'Bold'),
    color: colors.windowsBlue,
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  infoText: {
    ...font(16),
    color: colors.titleTextColor,
    paddingLeft: 10,
  },
  moreOptions: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  settingIcon: {
    marginRight: getWidthPercentage(1)
  }
});

export default PageStyle;