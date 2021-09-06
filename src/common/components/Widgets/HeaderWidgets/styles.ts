import { StyleSheet, Platform } from 'react-native';
import colors from '../../../colors';
import { font, fullWidth } from '../../../styles';
import { getWidthPercentage, getHeightPercentage } from '../../../helper';

const styles = StyleSheet.create({
  header: {
    width:'100%',
    height:'10%',
    backgroundColor:colors.tealBlue,
    justifyContent:'center',
    alignItems:'center'
  },
  safeArea: {
    flexDirection:'row',
    paddingTop: Platform.OS === 'android' ? 30 : 0
  },
  leftIcon: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  withoutLeftIcon: {
    flex:1,
      justifyContent:'center',
      alignItems:'center'
  },
  titleContainer: {
    flex:5,
    justifyContent:'center',
    alignItems:'center'
  },
  fix: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    ...font(15, 'Bold'),
  }

})

export default styles;