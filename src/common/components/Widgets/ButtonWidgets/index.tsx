import React from 'react';
import {
  TouchableOpacity,
  Image,
  GestureResponderEvent
} from 'react-native';
import {
  smallButtonStyle as sbs
} from './styles';

type smallButtonProps = {
  icon?: any,
  color: string,
  onPress: (event: GestureResponderEvent) => void,
  children: any,
  showBorder?: boolean

}

export const SmallButton = (props : smallButtonProps) => {
  const {
    icon = null,
    color,
    onPress,
    children,
    showBorder = false
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        sbs.buttonContainer,
        { backgroundColor: color },
        showBorder ? sbs.borderBlack : null
      ]}
    >
      {!icon ? null : <Image style={sbs.iconStyle} source={icon} />}
      {children}
    </TouchableOpacity>
  );
};


export const LargeButton = (props : smallButtonProps) => {
  const {
    icon = null,
    color,
    onPress,
    children,
    showBorder = false
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        sbs.largeButtonContainer,
        { backgroundColor: color },
        showBorder ? sbs.borderBlack : null
      ]}
    >
      
      {children}
    </TouchableOpacity>
  );
};