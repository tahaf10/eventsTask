// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import {
//   View,
//   Text,
//   Image,
//   Platform,
//   StatusBar,
//   SafeAreaView,
//   TouchableOpacity,
//   ActivityIndicator
// } from 'react-native';
// //import Toast from 'react-native-easy-toast';
// //import Modal from 'react-native-modal';
// import colors from '../../Colors';
// //import images from '../../Images';
// //import styles from './styles';

// export default class MainFrame extends Component {
//   // static propTypes = {
//   //   backgroundColor: PropTypes.string,
//   //   isLoading: PropTypes.bool,
//   //   currentScreenProps: PropTypes.any
//   // };

//   // static defaultProps = {
//   //   backgroundColor: colors.white,
//   //   isLoading: false
//   // };

//   // ShowToast = text => {
//   //   this.toast.show(text, 5000, () => {
//   //     // something you want to do at close
//   //   });
//   // };

//   // CloseToast = text => {
//   //   this.toast.close(5000);
//   // }

//   buttonPressed = button => {
//     const { navigation } = this.props;
//     navigation.navigate(button);
//     /* const { firstTime } = this.state;
//     if (button.toString() === 'ServicesPage') {
//       if (firstTime) {
//         this.setState({ firstTime: false }, () => navigation.navigate(button));
//       } else {
//         navigation.push(button);
//       }
//     } else if (button.toString() === 'TaskListPage') {
//       navigation.navigate(button, { redirectToDashboard: true });
//     } else {
//       navigation.navigate(button);
//     } */
//   };


//   // renderMenuItem = (icon, title, onPress, textStyle) => {
//   //   return (
//   //     <TouchableOpacity
//   //      style={styles.menuItem}
//   //      onPress={onPress}
//   //     >
//   //       <Image source={icon} />
//   //       <Text style={textStyle}>{title}</Text>
//   //     </TouchableOpacity>
//   //   );
//   // };

//   // getColor = (icon) => {
//   //   const { currentScreenProps } = this.props;
//   //   let propsAvailable = false;
//   //   let routeName = '';
//   //   if (currentScreenProps && currentScreenProps.navigation && currentScreenProps.navigation.state && currentScreenProps.navigation.state.routeName) {
//   //     propsAvailable = true;
//   //     routeName = currentScreenProps.navigation.state.routeName;
//   //   }
//   //   switch (icon) {
//   //     case 'home':
//   //       return propsAvailable && routeName && routeName === 'HomePage' ? styles.menuTextSelected : styles.menuText;
//   //     case 'browse':
//   //       return propsAvailable && routeName && (routeName === 'SearchResultsPage' || routeName === 'ServiceDetailPage' || routeName === 'ServicesLandingPage') ? styles.menuTextSelected : styles.menuText;
//   //     case 'calendar':
//   //       return propsAvailable && routeName && routeName === 'CalendarsPage' ? styles.menuTextSelected : styles.menuText;
//   //     case 'email':
//   //       return propsAvailable && routeName && routeName === 'EmailsPage' ? styles.menuTextSelected : styles.menuText;
//   //     case 'files':
//   //       return propsAvailable && routeName && routeName === 'FilesPage' ? styles.menuTextSelected : styles.menuText;
//   //     case 'collaborate':
//   //       return propsAvailable && routeName && (routeName === 'CollaboratePage' || routeName === 'TaskListPage' || routeName === 'MeetingRoomsPage' || routeName === 'MyCollaborationsPage' || routeName === 'StreamPage') ? styles.menuTextSelected : styles.menuText;
//   //     default:
//   //       return styles.menuText;
//   //   }
//   // }

//   // getImage = (icon) => {
//   //   const { currentScreenProps } = this.props;
//   //   let propsAvailable = false;
//   //   let routeName = '';
//   //   if (currentScreenProps && currentScreenProps.navigation && currentScreenProps.navigation.state && currentScreenProps.navigation.state.routeName) {
//   //     propsAvailable = true;
//   //     routeName = currentScreenProps.navigation.state.routeName;
//   //   }
//   //   switch (icon) {
//   //     case 'home':
//   //       return propsAvailable && routeName && routeName === 'HomePage' ? images.homeSelected : images.homeUnselected;
//   //     case 'browse':
//   //       return propsAvailable && routeName && (routeName === 'SearchResultsPage' || routeName === 'ServiceDetailPage' || routeName === 'ServicesLandingPage') ? images.browseSelected : images.browseUnselected;
//   //     case 'calendar':
//   //       return propsAvailable && routeName && routeName === 'CalendarsPage' ? images.calendarSelected : images.calendarUnselected;
//   //     case 'email':
//   //       return propsAvailable && routeName && routeName === 'EmailsPage' ? images.emailSelected : images.emailUnselected;
//   //     case 'files':
//   //       return propsAvailable && routeName && routeName === 'FilesPage' ? images.filesSelected : images.filesUnselected;
//   //     case 'collaborate':
//   //       return propsAvailable && routeName && (routeName === 'CollaboratePage' || routeName === 'TaskListPage' || routeName === 'MeetingRoomsPage' || routeName === 'MyCollaborationsPage' || routeName === 'StreamPage') ? images.collaborateSelected : images.collaborateUnselected;
//   //     default:
//   //       return images.homeUnselected;
//   //   }
//   // }

//   render() {
//     const SafeContainer = Platform.OS === 'android' ? View : SafeAreaView;
//     const {
//       children,
//       isLoading,
//       showBottomTab,
//       backgroundColor
//     } = this.props;
//     return (
//       <SafeContainer
//         style={{
//           flex: 1,
//           backgroundColor
//         }}
//       >
//         <StatusBar backgroundColor={colors.tealBlue} />
//         {children}
//         <Toast
//           ref={toast => {
//             this.toast = toast;
//           }}
//         />
//         {!showBottomTab ? null : (
//           <View style={styles.bottomMenu}>
//             {this.renderMenuItem(this.getImage('home'), i18strings('home.home'), () => this.onHomePressed(), this.getColor('home'))}
//             {this.renderMenuItem(this.getImage('collaborate'), i18strings('home.collaborate'), () => this.buttonPressed('CollaboratePage'), this.getColor('collaborate'))}
//           </View>
//         )}
//         <Modal style={styles.container} isVisible={isLoading}>
//           <ActivityIndicator size="large" color={colors.tealBlue} />
//         </Modal>
//       </SafeContainer>
//     );
//   }
// }
