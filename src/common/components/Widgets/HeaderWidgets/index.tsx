import React from 'react';
import {
  TouchableOpacity,
  Image,
  GestureResponderEvent,
  SafeAreaView, 
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
import styles from './styles';
import images from '../../../images';

export const Header = (props) => {

  const { leftIcon } = props;

  return (

    <View style={styles.header}>
      <SafeAreaView style={styles.safeArea}>
      {leftIcon ? (<View style={styles.leftIcon}>
        <Image source={images.whiteCross}/>
      </View>) : 
      
      (<View style={styles.withoutLeftIcon}>
      </View>)
      }

      <View style={styles.titleContainer}>
      <Text style={styles.text}>{props.title}</Text>
      </View>

      <View style={styles.fix}>
      
      </View>
      </SafeAreaView>
    </View>
    
  );
};

