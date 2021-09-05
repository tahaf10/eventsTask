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

  text:{
    ...font(15, 'Bold'),
  }

})

export default styles;