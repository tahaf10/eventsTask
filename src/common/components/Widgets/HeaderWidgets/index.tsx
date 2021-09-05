import React from 'react';
import {
  TouchableOpacity,
  Image,
  GestureResponderEvent,
  SafeAreaView, 
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';
import styles from './styles';
import images from '../../../images';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Header = (props) => {

  const { leftIcon } = props;

  return (

    <View style={styles.header}>
      <SafeAreaView style={{flexDirection:'row'}}>
      {leftIcon ? (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image source={images.whiteCross}/>
      </View>) : 
      
      (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      </View>)
      }

      <View style={{flex:5,justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.text}>{props.title}</Text>
      </View>

      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      
      </View>
      </SafeAreaView>
    </View>
    
  );
};

