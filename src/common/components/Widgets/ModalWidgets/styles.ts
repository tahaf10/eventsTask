import { StyleSheet, Platform } from 'react-native';
import colors from '../../../colors';
import { font, fullWidth } from '../../../styles';
import { getWidthPercentage, getHeightPercentage } from '../../../helper';

export const dateModalStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 0
  },
  innerContainer: {
    width: fullWidth,
    backgroundColor: colors.white,
    height: getHeightPercentage(35),
    padding: 18
  },
  doneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dobText: {
    ...font(18),
    color: colors.titleTextColor
  },
  doneText: {
    ...font(14),
    color: colors.titleTextColor
  },
  pickerStyle: {
    marginTop: 30,
    width: '100%',
    backgroundColor: 'white'
  }
});

export const moreOptionsModalStyle = StyleSheet.create({
  innerContainer: {
    width: fullWidth,
    backgroundColor: colors.newModalBg,
    padding: 18,
    borderRadius: 20
  },
  innerScrollContainer: {
    width: fullWidth,
    height: getHeightPercentage(35),
    backgroundColor: colors.newModalBg,
    padding: 18,
    borderRadius: 20
  },
  optionText: {
    ...font(16),
    marginLeft: 10
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 0
  },
  closeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  titleText: {
    ...font(18, 'Semibold')
  },
  closeIcon: {
    width: 28,
    height: 28
  },
  optionContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 10
  },
  attachIcon: {
    width: 11,
    height: 20,
    marginRight: 10
  },
  hyperLinkIcon: {
    width: 19.6,
    height: 19.6,
    marginRight: 10
  },
  mapsIcon: {
    width: 18,
    height: 18,
    marginRight: 10
  },
  leftMarginTen: {
    marginLeft: 10,
    alignSelf: 'center'
  },
  scrollContainer: {
    paddingBottom: 25
  },
  scrollParentContainer: {
    maxHeight: getHeightPercentage(35),
    flexShrink: 1,
    flexGrow: 1,
    marginLeft: 10,
    alignSelf: 'center'
  },
  rightMarginTwenty: {
    position: 'absolute',
    right: 20,
    alignSelf: 'center'
  }
})