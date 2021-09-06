import { StyleSheet } from 'react-native';
import colors from '../../colors';
import { font } from '../../styles';

const dropdownStyles = StyleSheet.create({
  dropdownContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: 5
  },
  selectedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 7.5,
    padding: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.veryLightPink
  },
  labelText: {
    ...font(17, 'Semibold'),
    color: colors.black
  },
  valueText: {
    ...font(16),
    color: colors.black
  }
});

export default dropdownStyles;
