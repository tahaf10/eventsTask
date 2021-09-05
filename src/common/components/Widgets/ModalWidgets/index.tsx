import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  Image,
  ImageSourcePropType
} from 'react-native';
import Modal from 'react-native-modal';

import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  dateModalStyles as dms,
  moreOptionsModalStyle as moms
} from './styles';
import images from '../../../images';

type Props = {
  modalVisible: boolean,
  close?: (event: GestureResponderEvent) => void,
  date: Date,
  title?: string,
  select?: () => void,
  onChange: (event:any, date:any) => void
}

export const DateModal = (props: Props) => {
  const {
    modalVisible,
    close,
    date,
    title = 'Select Time',
    onChange
  } = props;
  return (
    <Modal style={dms.container} isVisible={modalVisible}>
      <View style={dms.innerContainer}>
        <View style={dms.doneContainer}>
          <Text style={dms.dobText}>{title}</Text>
          <TouchableOpacity onPress={close}>
            <Text style={dms.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
        <DateTimePicker
          mode="date"
          value={date}
          onChange={onChange}
          //onDateChange={dateValue => props.select(dateValue)}
          style={dms.pickerStyle}
        />

      </View>
    </Modal>
  );
};

export const TimePickerModal = (props: Props) => {
  const {
    modalVisible,
    close,
    date,
    title = 'Select Time',
    onChange
  } = props;  return (
    <Modal style={dms.container} isVisible={modalVisible}>
      <View style={dms.innerContainer}>
        <View style={dms.doneContainer}>
          <Text style={dms.dobText}>{title}</Text>
          <TouchableOpacity onPress={close}>
            <Text style={dms.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
        <DateTimePicker
          mode="time"
          value={date}
          is24Hour={false}
          onChange={onChange}
          style={dms.pickerStyle}
        />
      </View>
    </Modal>
  );
};

type Options = {
  id: number,
  key: string,
  icon?: ImageSourcePropType
}

type MoreOptionsProps = {
  title: string,
  close?: (event: GestureResponderEvent) => void,
  select?: (key: string) => void,
  moreOptions: Options[],
  modalVisible: boolean
}

export const MoreOptionsModal = (props : MoreOptionsProps) => {
  const {
    title,
    close,
    select,
    moreOptions,
    modalVisible
  } = props;
  return (
    <Modal style={moms.container} isVisible={modalVisible}>
      <View style={moms.innerContainer}>
        <View style={moms.closeContainer}>
          <Text style={moms.titleText}>
            {title}
          </Text>
          <TouchableOpacity onPress={close}>
            <Image
              source={images.closeIcon}
              style={moms.closeIcon}
            />
          </TouchableOpacity>
        </View>
        {moreOptions.map(option => (
          <TouchableOpacity
            key={option.key}
            onPress={() => select(option.key)}
            style={moms.optionContainer}
          >
            <Text style={moms.optionText}>
              {option.key}
            </Text>
            {!option.icon ? null : (
              <View style={moms.rightMarginTwenty}>
                <Image source={option.icon} />
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};