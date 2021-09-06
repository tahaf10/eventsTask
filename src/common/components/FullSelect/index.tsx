import React from 'react';
import { 
  View,
  Image,
  TouchableOpacity,
  GestureResponderEvent
 } from 'react-native';
import { TextField } from 'rn-material-ui-textfield';
import colors from '../../colors';
import images from '../../images';
import styles from './styles';


type Props = {
  onPress: (event: GestureResponderEvent) => void,
  value: string,
  label: string,

}

const FullSelect = (props : Props) => {
  const {
    value,
    onPress,
    label
  } = props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.mainContainer}
      >
        <View
          pointerEvents="none"
          style={styles.flexOneContainer}
        >
          <TextField
            value={value}
            autoCapitalize="none"
            autoCorrect={false}
            // enablesReturnKeyAutomatically={returnKey}
            // clearTextOnFocus={clearTextOnFocus}
            // secureTextEntry={secureTextEntry}
            // onFocus={onFocus}
            editable={false}
            // onChangeText={onChange}
            // onSubmitEditing={onSubmit}
            // returnKeyType={returnKeyType}
            label={label}
            textColor={'rgba(46, 46, 46, 0.6)'}
            tintColor={colors.tealBlue}
            labelTextStyle={styles.labelStyle}
            titleTextStyle={styles.labelStyle}
            containerStyle={styles.containerHeight}
            //error={error}
          />
          <View style={styles.iconContainer}>
            <Image source={images.group} style={styles.badgeIcon} />
          </View>
        </View>
      </TouchableOpacity>
  )

}

export default FullSelect;