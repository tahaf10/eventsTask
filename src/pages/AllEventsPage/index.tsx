import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';
import {
  SmallButton
} from '../../common/components/Widgets/ButtonWidgets'
import colors from '../../common/colors';
import styles from './styles';
import Calendar from '../../common/components/Calendar';
import EventCard from '../../common/components/EventCard';
import { getColor } from '../../common/helper';

import type { AppNavigatorParamsList } from '../../routes';

type Event = {
  id: number,
  name: string,
  description: string,
  date: Date,
  fromTime: Date,
  toTime: Date,
  document?: string
}

export type AllEventsScreenParams = {
  event: Event
};


interface AllEventsProps {
  navigation: NativeStackScreenProps<AppNavigatorParamsList, "AllEventsPage">
};

interface AllEventsState {
  selectedTab: number,
  events: Event[]
};
class AllEvents extends Component<AllEventsProps, AllEventsState> {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      events: [{
        id: 1,
        name: "string",
        description: "string",
        date: new Date(),
        fromTime: new Date(),
        toTime: new Date(),
        document: "string"
      },
      {
        id: 2,
        name: "string",
        description: "string",
        date: new Date(),
        fromTime: new Date(),
        toTime: new Date(),
        document: "string"
      }
      ]
    }
  }

  async componentDidMount() {

  }

  onAddClick = () => {
    const { navigation } = this.props;
    // navigation.navigate('EventPage');
    console.log(navigation);
    navigation.navigate('EventPage');
  }

  toggleTab = (toggleValue) => {
    const { selectedTab } = this.state;
    if (toggleValue !== selectedTab) {
      this.setState({
        selectedTab: toggleValue
      });
    }
  };

  renderCalendarEvents = () => {

    return (
      <View style={styles.container}>
        <Calendar
          dateString={moment().format('YYYY-MM-DD')}
        />
      </View>
    )
  }

  renderEvent = event => {
    const { item, index } = event;
    return (
      <EventCard
        item={item}
        toggleMore={() => {}}
        //toggleCalendarStatus={this.toggleSelectedCalendarStatus}
        color={getColor(index)}
      />
    );
  };
  keyExtractor = (item, index) => index.toString();

  renderEvents = () => {
    const { events } = this.state;
    return (
    <FlatList
      data={events}
      //extraData={this.state}
      //refreshing={refreshing}
      //ListEmptyComponent={this.renderEmptyCalendars}
      //onRefresh={this.getAllCalendars}
      keyExtractor={this.keyExtractor}
      renderItem={this.renderEvent}
    />
    )
  }

  renderAllEvents = () => {

    return (
      <View>
        {/* {this.renderEvents()} */}
      </View>
    )
  }

  renderTabs = () => {
    const { selectedTab } = this.state;
    return (
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          onPress={() => this.toggleTab(0)}
          style={[styles.tabContainer, !selectedTab ? styles.selectedTabContainer : null]}
        >
          <Text style={!selectedTab ? styles.selectedTabTitle : styles.tabTitle}>
            List View
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.toggleTab(1)}
          style={[styles.tabContainer, selectedTab ? styles.selectedTabContainer : null]}
        >
          <Text style={selectedTab ? styles.selectedTabTitle : styles.tabTitle}>
            Calendar View
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { selectedTab } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

        <SmallButton
          //icon={images.addCalendar}
          color={colors.tealBlue}
          onPress={this.onAddClick}
        >
          <Text style={styles.buttonText}>Add</Text>
        </SmallButton>

        {this.renderEvents()}


        {selectedTab === 0 ? this.renderAllEvents() : this.renderCalendarEvents()}

        {this.renderTabs()}



      </View>
    )
  }
}
export default AllEvents;
