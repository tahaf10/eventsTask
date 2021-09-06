import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,

} from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import HalfSelect from '../../common/components/HalfSelect';
import FullSelect from '../../common/components/FullSelect';
import Dropdown from '../../common/components/Dropdown';
import styles from './styles';
import {
  DateModal,
  TimePickerModal,
  MoreOptionsModal
} from '../../common/components/Widgets/ModalWidgets'
import {
  LargeButton
} from '../../common/components/Widgets/ButtonWidgets'
import {
  Header
} from '../../common/components/Widgets/HeaderWidgets'
import colors from '../../common/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { AppNavigatorParamsList } from '../../routes';
import { NavigationRouteContext } from '@react-navigation/core';


export type EventScreenParams = undefined;

interface AllEventsProps {
  navigation: NativeStackScreenProps<AppNavigatorParamsList, "AllEventsPage">
};

function Event(props: AllEventsProps) {

  const eventTypes = [
    { id: 0, key: 'Event', icon: null },
    { id: 1, key: 'Out of Office', icon: null },
    { id: 2, key: 'Task', icon: null }
  ]

  const [typesModal, setTypesModal] = useState(false);
  const toggleTypesModal = () => setTypesModal(!typesModal);
  const [selectedEventType, setSelectedEventType] = useState('Event');

  const [eventName, setEventName] = useState('My Event');
  const [eventDescription, setEventDescription] = useState('');

  const [date, setDate] = useState(new Date());
  const [fromTime, setFromTime] = useState(new Date());
  const [toTime, setToTime] = useState(new Date());

  const [showDateModal, setShowDateModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [timePickerFlag, setTimePickerFlag] = useState('TO');

  const toggleDatePickerModal = () => { setShowDateModal(!showDateModal); }

  const toggleTimePickerModal = (flag?: string) => {
    setShowTimeModal(!showTimeModal);
    if (flag) { setTimePickerFlag(flag); }
  };

  const toggle2 = () => {
    setShowTimeModal(!showTimeModal);
  }

  const onSave = () => {
    const { navigation } = props;
    const event = {
      id: 0,
      name: eventName,
      description: eventDescription,
      date: date,
      fromTime: date,
      toTime: date,
      type: selectedEventType
    }
    navigation.navigate('AllEventsPage', {
      event: event
    })
  }

  const onBack = () => {
    const { navigation } = props;
    navigation.goBack();
  }
  const setEventType = (key) => {
    setSelectedEventType(key);
    toggleTypesModal();
  }

  const renderDatePicker = () => {
    return (
      <DateModal
        modalVisible={showDateModal}
        date={date}
        close={toggleDatePickerModal}
        onChange={(event, date) => setDate(date)}
      />
    )
  }

  const onTimeChange = (event, date) => {
    console.log(date);
    if (timePickerFlag === 'FROM') {
      setFromTime(date)
    }
    else {
      setToTime(date)
    }
  }

  const renderTimePicker = () => {
    return (
      <TimePickerModal
        modalVisible={showTimeModal}
        close={toggle2}
        date={timePickerFlag === 'FROM' ? fromTime : toTime}
        onChange={onTimeChange}
      />
    )
  }

  const renderEventTypeModal = () => {
    return (
      <MoreOptionsModal
        select={setEventType}
        moreOptions={eventTypes}
        modalVisible={typesModal}
        close={toggleTypesModal}
        title='Event Type'
      />
    )
  }

  return (

    <View style={{ flex: 1 }}>

      <Header
        title='New Event'
        leftIcon={true}
        onCrossPress={onBack}
      />
      <ScrollView
        style={styles.background}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.headerText}>Event Information</Text>
            <View style={styles.optionContainer}>
              <Text style={styles.optionTitle}>Event Name</Text>
              <TextInput
                style={{ color: colors.black }}
                value={eventName}
                placeholder={'Event Name'}
                placeholderTextColor={colors.gray}
                onChangeText={setEventName}
                //style={styles.textArea}
                multiline={false}
              />
            </View>

            <View style={styles.optionContainer}>
              <Text style={styles.optionTitle}>Event Description</Text>
              <TextInput
                style={{ color: colors.black }}
                value={eventDescription}
                placeholder={'Event Description'}
                placeholderTextColor={colors.gray}
                onChangeText={setEventDescription}
                //style={styles.textArea}
                multiline={true}
              />
            </View>

            <View style={styles.optionContainer}>
              {/* <Text style={styles.optionTitle}>Event Type</Text> */}
              <Dropdown
                label='Type'
                value={selectedEventType}
                onPress={toggleTypesModal}
              />
            </View>

            <View style={styles.optionContainer}>
              <Text style={styles.optionTitle}>Date Picker</Text>
              <TextInput
                style={{ color: colors.black }}
                value={eventDescription}
                placeholder={'Event Description'}
                placeholderTextColor={colors.gray}
                onChangeText={setEventDescription}
                //style={styles.textArea}
                multiline={true}
              />
              <FullSelect
                value={moment(date).format('DD-MM-YYYY')}
                label='Date'
                onPress={toggleDatePickerModal}
              />
            </View>

            <View style={styles.optionContainer}>
              <Text style={styles.optionTitle}>Time Picker</Text>

              <View style={styles.optionsRow}>
                <HalfSelect
                  value={moment(fromTime).format('h mm a')}
                  label='From'
                  onPress={() => toggleTimePickerModal('FROM')}
                />

                <HalfSelect
                  value={moment(toTime).format('h mm a')}
                  label='To'
                  onPress={() => toggleTimePickerModal('TO')}
                />
              </View>
            </View>

            <View style={styles.centerAlignMarginVert}>
              <LargeButton
                //icon={images.addCalendar}
                color={colors.tealBlue}
                onPress={onSave}
              >
                <Text>Next</Text>
              </LargeButton>
            </View>
          </View>
        </View>
        {renderTimePicker()}
        {renderEventTypeModal()}
        {renderDatePicker()}
      </ScrollView>
    </View>

  )

  {/* {renderNextButton()}
      {renderTeamsModal()}
      {renderWorkspacesModal()}
      {renderAvailableForModal()}
      {renderTimeBtwAppointmentsModal()}
      {renderDatePickerModal()} */}



}

export default Event;
