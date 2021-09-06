/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';

 import { Calendar, LocaleConfig } from 'react-native-calendars';
 import colors from '../../../common/colors';

 interface Props {
   dateString: string,
   dayPressed: (Date) => void
 }
 
 export default class CalendarModule extends Component <Props>{
   constructor(props) {
     super(props);
     LocaleConfig.locales.en = {
       monthNames: [
         'January',
         'February',
         'March',
         'April',
         'May',
         'June',
         'July',
         'August',
         'September',
         'October',
         'November',
         'December'
       ],
       monthNamesShort: [
         'Jan',
         'Feb',
         'Mar',
         'Apr',
         'May',
         'Jun',
         'Jul',
         'Aug',
         'Sep',
         'Oct',
         'Nov',
         'Dec'
       ],
       dayNames: [
         'Sunday',
         'Monday',
         'Tuesday',
         'Wednesday',
         'Thursday',
         'Friday',
         'Saturday'
       ],
       dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
       today: 'Today'
     };
     LocaleConfig.defaultLocale = 'en';
   }
 
   render() {
     //const { markedDate, dayPressed, onMonthChange, theme } = this.props;
     const { 
       dateString,
       dayPressed
      } = this.props; 
      console.log('Inside Render');
      console.log(dateString);
     return (
       <Calendar
         // Collection of dates that have to be marked. Default = {}
         theme={{
           'stylesheet.calendar.header': {
             week: {
               marginTop: 5,
               flexDirection: 'row',
               justifyContent: 'space-around',
               paddingTop: 5,
               backgroundColor: colors.greyishBrown
             },
             dayHeader: {
               color: colors.white,
               alignSelf: 'center',
             }
           },
           backgroundColor: colors.greyishBrown,
           calendarBackground: colors.greyishBrown,
           textSectionTitleColor: colors.white,
           selectedDayBackgroundColor: colors.white,
           selectedDayTextColor: colors.white,
           todayTextColor: colors.white,
           dayTextColor: colors.white,
           textDisabledColor: 'rgba(255, 255, 255, 0.3)',
           dotColor: colors.white,
           selectedDotColor: colors.white,
           arrowColor: colors.white,
           monthTextColor: colors.white,
           textDayFontSize: 18,
           textMonthFontSize: 28,
           textDayHeaderFontSize: 14,
         }}
         markedDates={{
          [dateString]: { selected: true, selectedColor: colors.tealBlue }
         }}
         onDayPress={day => {
           dayPressed(day);
         }}
         // onMonthChange={month => {
         //   onMonthChange(month);
         // }}
       />
     );
   }
 }
 