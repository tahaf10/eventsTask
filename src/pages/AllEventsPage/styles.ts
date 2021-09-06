import { StyleSheet } from 'react-native';
import colors from '../../common/colors';
import { font } from '../../common/styles';
import { getHeightPercentage } from '../../common/helper';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '95%',
    //justifyContent:'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    //marginBottom: getHeightPercentage(10)
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'

  },

  topRowView: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10
  },

  topRowLeftHalf: {
    flex: 1,
    justifyContent: 'center'
  },

  topRowEventButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: colors.lightBlueGrey,
    backgroundColor: colors.white
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginBottom: 2.5
  },
  tabTitle: {
    ...font(16),
    color: colors.black
  },
  selectedTabTitle: {
    ...font(16, 'Semibold'),
    color: colors.tealBlue
  },
  selectedTabContainer: {
    borderBottomWidth: 2,
    borderBottomColor: colors.tealBlue
  },
  paddingHorizontal: {
    paddingHorizontal: 7.5
  },
  buttonText: {
    ...font(16, 'Semibold'),
    color: colors.white
  },
  whiteButtonText: {
    ...font(16, 'Semibold'),
    color: colors.brownGray
  },
  flexOne: {
    flex: 1
  }
})

export default styles;