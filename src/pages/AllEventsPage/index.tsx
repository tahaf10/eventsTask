import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageSourcePropType,
  Image
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import moment from 'moment';
import {
  SmallButton
} from '../../common/components/Widgets/ButtonWidgets'
import {
  MoreOptionsModal
} from '../../common/components/Widgets/ModalWidgets';
import colors from '../../common/colors';
import styles from './styles';
import Calendar from '../../common/components/Calendar';
import EventCard from '../../common/components/EventCard';
import { Header } from '../../common/components/Widgets/HeaderWidgets'
import {
  getColor,
  //compareDates,
  getDayName,
  getMonth
} from '../../common/helper';
import images from '../../common/images';

import type { AppNavigatorParamsList } from '../../routes';

type Event = {
  id: number,
  name: string,
  description: string,
  date: Date,
  fromTime: Date,
  toTime: Date,
  document?: string,
  type: string
}

type Options = {
  id: number,
  key: string,
  icon?: ImageSourcePropType
}

export type AllEventsScreenParams = {
  event: Event
};


interface AllEventsProps {
  navigation: NativeStackScreenProps<AppNavigatorParamsList, "AllEventsPage">,
  route: NativeStackScreenProps<AppNavigatorParamsList, "AllEventsPage">
};

interface AllEventsState {
  selectedTab: number,
  events: Event[],
  showFilter: boolean,
  filterOptions: Options[],
  selectedFilter: string,
  markedDate: string,
  selectedDate: {
    year: number,
    month: number,
    day: number,
    timestamp: number,
    dateString: string
  }
};
class AllEvents extends Component<AllEventsProps, AllEventsState> {

  constructor(props) {
    super(props);
    const todaysDate = moment().format('YYYY-MM-DD');
    const year = parseInt(todaysDate.slice(0, 4));
    const month = parseInt(todaysDate.slice(5, 7));
    const day = parseInt(todaysDate.slice(8, 10));
   
    this.state = {
      selectedTab: 0,
      events: [
        //   {
        //   id: 1,
        //   name: "string",
        //   description: "string",
        //   date: new Date(),
        //   fromTime: new Date(),
        //   toTime: new Date(),
        //   document: "string"
        // },
        // {
        //   id: 2,
        //   name: "string",
        //   description: "string",
        //   date: new Date(),
        //   fromTime: new Date(),
        //   toTime: new Date(),
        //   document: "string"
        // }
      ],
      filterOptions: [
        { id: 0, key: 'All', icon: null },
        { id: 1, key: 'Event', icon: null },
        { id: 2, key: 'Out of Office', icon: null },
        { id: 3, key: 'Task', icon: null },

      ],
      showFilter: false,
      selectedFilter: 'All',
      markedDate: moment().format('YYYY-MM-DD'),
      selectedDate: {
        day: day,
        year: year,
        month: month,
        timestamp: 165432,
        dateString: todaysDate
      }
    }
  }

  componentDidMount() {
  }
  componentDidUpdate(previousProps, previousState) {
    if (previousProps.route !== this.props.route) {
      const { params } = this.props.route;
      const { events } = this.state;
      if (params) {
        this.setState({
          events: events.concat(params.event)
        })
      }
    }
  }
  toggleShowFilter = () => {
    const { showFilter } = this.state;
    this.setState({ showFilter: !showFilter });
  }

  onSelectFilter = (value) => {
    this.setState({ selectedFilter: value });
    this.toggleShowFilter();
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

  dayPressed = (day) => {
    console.log(day);
    this.setState({ 
      markedDate: day.dateString,
      selectedDate: day
     });
    // const compareWithFrom = compareDates(day.dateString, fromDate);
    // const compareWithTo = compareDates(day.dateString, toDate);
  };

  renderCalendarEvents = () => {
    const { markedDate, selectedDate } = this.state;

    const { dateString } = selectedDate;
    return (
      <View style={styles.container}>
        <Calendar
          dateString={markedDate}
          dayPressed={day => this.dayPressed(day)}
        />
        <Text style={styles.dataText}>{getDayName(dateString)}, {selectedDate.day} {getMonth(selectedDate.month)} {selectedDate.year}</Text>
      </View>
    )
  }

  renderEmptyEvents = () => {
    return (
      <View style={styles.emptyCalendarContainer}>
        <Image source={images.noCalendar} />
        <Text style={styles.noCalendarText}>There are currently no events. <Text style={styles.noCalendarAlt} onPress={this.onAddClick}>Would you like to add a new event?</Text></Text>
      </View>
    );
  };

  renderEvent = event => {
    const { item, index } = event;
    return (
      <EventCard
        item={item}
        toggleMore={() => { }}
        //toggleCalendarStatus={this.toggleSelectedCalendarStatus}
        color={getColor(index)}
      />
    );
  };
  keyExtractor = (item, index) => index.toString();

  renderEvents = () => {
    const { events, selectedTab, selectedFilter, markedDate } = this.state;
    return (
      <FlatList
        data={selectedTab === 0 ? (selectedFilter !== 'All' ? events.filter(event => event.type === selectedFilter) : events) : events.filter(event => moment(event.date).format('YYYY-MM-DD') === markedDate )}
        extraData={this.state}
        //refreshing={refreshing}
        ListEmptyComponent={this.renderEmptyEvents}
        //onRefresh={this.getAllCalendars}
        ListHeaderComponent={selectedTab === 1 ? this.renderCalendarEvents : null}
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

  renderFiltersModal = () => {
    const { filterOptions, showFilter } = this.state;
    return (
      <MoreOptionsModal
        select={this.onSelectFilter}
        moreOptions={filterOptions}
        modalVisible={showFilter}
        close={this.toggleShowFilter}
        title='Filter'
      />
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

      <View style={styles.mainContainer}>
        <Header title='All Events' leftIcon={false} />

        <View style={styles.topRowView}>

          <View style={styles.topRowLeftHalf}>
            <Text style={{ textAlign: 'left' }}>Hello There!</Text>
          </View>

          <View style={styles.topRowEventButtons}>
           {selectedTab === 0 && <SmallButton
              icon={images.filter}
              color={colors.white}
              onPress={this.toggleShowFilter}
              showBorder={true}
            >
              <Text style={styles.whiteButtonText}>Filter</Text>
            </SmallButton>}

            <SmallButton
              icon={images.add}
              color={colors.tealBlue}
              onPress={this.onAddClick}
            >

              <Text style={styles.buttonText}>Add</Text>
            </SmallButton>

          </View>

        </View>

        <View style={styles.flexOne}>
          {this.renderEvents()}
        </View>
        {/* {selectedTab === 0 ? this.renderAllEvents() : this.renderCalendarEvents()} */}

        {this.renderTabs()}
        {this.renderFiltersModal()}




      </View>
    )
  }
}
export default AllEvents;
