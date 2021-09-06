import { StyleSheet } from 'react-native';
import colors from '../../common/colors';
import { font } from '../../common/styles';
import {
  getHeightPercentage,
  getWidthPercentage,
} from '../../common/helper';

const CalendarInfoStyle = StyleSheet.create({
  background: {
    backgroundColor: colors.whiteThree,
  },
  container: {
    backgroundColor: colors.white,
    width: getWidthPercentage(94.5),
    //justifyContent:'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    margin: 20
  },
  innerContainer: {
    paddingTop: 10,
    paddingLeft: 15
  },
  headerText: {
    ...font(19, 'Bold'),
    color: colors.black,
    textAlign:'center',
    marginVertical:10,
    marginBottom:20
  },
  optionContainer: {
    width: '95%',
    paddingVertical: 20,
    paddingHorizontal:10,
    borderRadius:5,
    backgroundColor:'#f0f0f0',
    marginVertical:5
  
    

  },
  // optionContainerWithRightCmpnt: {
  //   flexDirection: 'row',
  //   width: '95%',
  //   paddingBottom: 20,
  //   alignItems: 'center'
  // },
  // optionContainerWithCheckbox: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   width: '95%',
  //   paddingBottom: 20,
  //   marginLeft: 5
  // },
  // containerCheckbox: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   width: '95%',
  //   marginLeft: 5
  // },
  optionTitle: {
    ...font(17, 'Semibold'),
    color: colors.black,
    marginBottom:5
  },
  // optionText: {
  //   ...font(16),
  //   color: colors.black
  // },
  // meetingType: {
  //   ...font(16, 'Semibold'),
  //   color: colors.black,
  //   paddingBottom: 15
  // },
  // urlText: {
  //   ...font(16),
  //   marginTop: 5,
  //   color: colors.black
  // },
  // textInputContainer: {
  //   /*  height: 40,
  //    margin: 12, */
  //   borderWidth: 1,
  //   borderRadius:3,
  //   borderColor: colors.veryLightPink,
  // },
  // urlContainer: {
  //   height: 40,
  //   width: '85%',
  //   borderWidth: 1,
  //   borderColor: colors.veryLightPink,
  // },
  // urlView: {
  //   borderColor: colors.veryLightPink,
  //   borderWidth: 1,
  //   height: 45,
  //   width: getWidthPercentage(75),
  //   borderRadius: 5,
  // },

  centerAlignMarginVert:{
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10
  },

  optionsRow: {
  
    flexDirection: 'row',
    justifyContent: 'center',

  },
  // textAreaContainer: {
  //   width: '95%',
  //   paddingBottom: 10,
  // },
  // switchImageStyles: {
  //   resizeMode: 'contain',
  //   alignSelf: 'center'
  // },
  // switchButton: {
  //  marginLeft: 10
  // },
  // private: {
  //   ...font(16),
  //   color: colors.tealBlue,
  //   paddingLeft:  getWidthPercentage(29)
  // },
  // publicFade: {
  //   ...font(16),
  //   color: colors.brownhGray,
  //   paddingLeft: 10
  // },
  // privateFade: {
  //   ...font(16),
  //   color: colors.brownhGray,
  //   paddingLeft: getWidthPercentage(29)
  // },
  // public: {
  //   ...font(16),
  //   color: colors.tealBlue,
  //   paddingLeft: 10
  // },
  // checkboxImage: {
  //   alignSelf: 'center',
  //   marginRight: 20,
  // },
  // inputFileContainer: {
  //   flexDirection: 'row',
  //   marginTop: 15,
  //   marginBottom: 15,
  // },
  // fileImage: {
  //   resizeMode: 'contain',
  //   alignSelf: 'center',
  //   marginLeft: 20,
  // },
  // input: {
  //   width: 220,
  //   height: '100%',
  //   backgroundColor: colors.white,
  // },
  // from: {
  //   ...font(16, 'Semibold'),
  //   color: colors.black,
  //   marginLeft: 10
  // },
  // radioDescription: {
  //   color: colors.brownhGray,
  //   ...font(16),
  //   marginLeft: 38,
  //   fontStyle: 'italic',
  // },
  // teamsContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // addTeamContainer: {
  //   alignContent: 'center',
  //   flexDirection: 'row',
  //   alignItems: 'center'
  // },
  // addTeamText: {
  //   color: colors.tealBlue,
  //   ...font(16),
  //   marginLeft: 10,
  //   marginRight: 10
  // },
  // itemsContainerCheckbox: {
  //   flexDirection: 'row',
  //   marginLeft: 38,
  // },
  // optionTitle2: {
  //   ...font(16, 'Semibold'),
  //   color: colors.tealBlue,
  // },
  // itemRadioDescription: {
  //   color: colors.brownhGray,
  //   ...font(16),
  //   marginLeft: 65,
  //   fontStyle: 'italic',
  //   marginTop: 0,
  // },
  // loginButtonContainer: {
  //   height: getHeightPercentage(10),
  //   width: getWidthPercentage(100),
  //   borderWidth: 1,
  //   borderColor: colors.veryLightPink,
  //   justifyContent: 'center',
  //   marginTop: 50,
  //   backgroundColor: colors.white,
  // },
  // NextButtonText: {
  //   color: colors.white,
  //   ...font(18),
  // }
});

export default CalendarInfoStyle;
