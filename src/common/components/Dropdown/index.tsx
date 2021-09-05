import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  GestureResponderEvent
} from 'react-native';
import styles from './styles';
import images from '../../images';

interface Props {
  label ?: string,
  value : string,
  onPress:  (event: GestureResponderEvent) => void
}

export default class Dropdown extends Component <Props> {

  render() {
    const { 
      label, 
      value, 
      onPress 
    } = this.props;
    return (
      <View style={styles.dropdownContainer}>
        <Text style={styles.labelText}>{label}</Text>
        <TouchableOpacity onPress={onPress} style={styles.selectedContainer}>
          <Text style={styles.valueText}>{value}</Text>
          <Image source={images.down} />
        </TouchableOpacity>
      </View>
    );
  }
}
