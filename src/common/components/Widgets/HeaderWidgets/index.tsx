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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Header = (props) => {

  const { leftIcon } = props;

  return (

    <View style={styles.header}>
      <SafeAreaView style={{flexDirection:'row',  paddingTop:Platform.OS === 'android' ? 30 : 0}}>
      {leftIcon ? (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image source={images.whiteCross}/>
      </View>) : 
      
      (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      </View>)
      }

      <View style={{flex:5,justifyContent:'flex-end',alignItems:'center'}}>
      <Text style={styles.text}>{props.title}</Text>
      </View>

      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      
      </View>
      </SafeAreaView>
    </View>
    
  );
};

