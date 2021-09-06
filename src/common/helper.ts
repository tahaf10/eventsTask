import {
  Dimensions,
  Platform
} from 'react-native';
import moment from 'moment';
import Colors from './colors';

export const { width: fullWidth, height: fullHeight } = Dimensions.get(
  'window'
);

export const getWidthPercentage = percentage => (fullWidth * percentage) / 100;

export const getHeightPercentage = percentage =>
  (fullHeight * percentage) / 100;

export const getResponsiveFont = fontSize => {
  const scale = fullWidth / 414;
  if (fullHeight > 900) {
    return fontSize * 1.5;
  }
  return fontSize * scale;
};

export const getColor = index => {
  const value = index % 6;
  switch (value) {
    case 0:
      return Colors.coolBlue;
    case 1:
      return Colors.shamrockGreen;
    case 2:
      return Colors.orangeRed;
    case 3:
      return Colors.brownishGray;
    case 4:
      return Colors.duskyPurple;
    case 5:
      return Colors.purpleyPink;
    default:
      return Colors.coolBlue;
  }
};

export function compareDates(dateTimeA, dateTimeB) {
  var momentA = moment(dateTimeA).format('YYYY-MM-DD');;
  console.log(momentA);
  var temp = new Date(dateTimeB);
  var momentB = moment(temp).format('YYYY-MM-DD');;
  console.log(momentB)
  if (momentA > momentB) return 1;
  else if (momentA < momentB) return -1;
  else return 0;
}

export function getMonth(month) {
  switch (month) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
    default:
      return '';
  }
}
export function getDayName(date) {
  const temp = moment(date, 'YYYY-MM-DD HH:mm:ss');
  const weekday = temp.format('dddd');
  return weekday;
}