import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Platform
} from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import HalfSelect from '../../common/components/HalfSelect';
import Dropdown from '../../common/components/Dropdown';
import styles from './styles';
import {
  DateModal,
  TimePickerModal,
  MoreOptionsModal
} from '../../common/components/Widgets/ModalWidgets'




export type EventScreenParams = undefined;

function Event(props) {

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

  const setEventType = (key) => {
    setSelectedEventType(key);
    toggleTypesModal();
  }

  // const renderDatePicker = () => {
  //   return (
  //     <DateModal
  //       date={date}
  //       close={toggleDatePickerModal}


  //     //onChange={(event, date) => { console.log(event, date) }}
  //     />
  //   )
  // }

  const onTimeChange = (event, value) => {
    console.log(value);
    if (timePickerFlag === 'FROM') {
      setFromTime(value)
    }
    else {
      setToTime(value)
    }
  }

  const renderTimePicker = () => {
    return (
      <TimePickerModal
        modalVisible={showTimeModal}
        close={toggle2}
        onClose={date => {
          if (date && Platform.OS !== 'iOS') {
            setShowTimeModal(false);
            onTimeChange('random', date)
          } else {
            setShowTimeModal(false);
          }
        }}
        date={timePickerFlag === 'FROM' ? fromTime : toTime }
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
        //close={toggleTypesModal}
        title='Event Type'
      />
    )
  }

  return (
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
              value={eventName}
              placeholder={'Event Name'}
              onChangeText={setEventName}
              //style={styles.textArea}
              multiline={false}
            />
          </View>

          <View style={styles.optionContainer}>
            <Text style={styles.optionTitle}>Event Description</Text>
            <TextInput
              value={eventDescription}
              placeholder={'Event Description'}
              onChangeText={setEventDescription}
              //style={styles.textArea}
              multiline={true}
            />
          </View>

          <View style={styles.optionContainer}>
            {/* <Text style={styles.optionTitle}>Event Type</Text> */}
            <Dropdown
              label='Event Type'
              value={selectedEventType}
              onPress={toggleTypesModal}
            />
          </View>

          <View style={styles.optionContainer}>
            <Text style={styles.optionTitle}>Date Picker</Text>
            <TextInput
              value={eventDescription}
              placeholder={'Event Description'}
              onChangeText={setEventDescription}
              //style={styles.textArea}
              multiline={true}
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

          <View style={styles.optionContainer}>
            <Text style={styles.optionTitle}>Doc Picker</Text>
            <TextInput
              value={eventDescription}
              placeholder={'Event Description'}
              onChangeText={setEventDescription}
              //style={styles.textArea}
              multiline={true}
            />
          </View>

        </View>
      </View>
      {renderTimePicker()}
      {renderEventTypeModal()}
    </ScrollView>

  )

  {/* {renderNextButton()}
      {renderTeamsModal()}
      {renderWorkspacesModal()}
      {renderAvailableForModal()}
      {renderTimeBtwAppointmentsModal()}
      {renderDatePickerModal()} */}



}

export default Event;
