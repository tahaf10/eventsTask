import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageSourcePropType
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
import { getColor } from '../../common/helper';
import images from '../../common/images';

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

type Options = {
  id: number,
  key: string,
  icon?: ImageSourcePropType
}

export type AllEventsScreenParams = {
  event: Event
};


interface AllEventsProps {
  navigation: NativeStackScreenProps<AppNavigatorParamsList, "AllEventsPage">
};

interface AllEventsState {
  selectedTab: number,
  events: Event[],
  showFilter: boolean,
  filterOptions: Options[],
  selectedFilter: string
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
      ],
      filterOptions: [
        { id: 0, key: 'All', icon: null },
        { id: 1, key: 'Event', icon: null },
        { id: 2, key: 'Out of Office', icon: null },
        { id: 3, key: 'Task', icon: null },

      ],
    showFilter: false,
    selectedFilter: 'All'
    }
  }

  componentDidMount() {
  }

  toggleShowFilter = () => {
    const { showFilter } = this.state;
    this.setState({ showFilter: !showFilter });
  }

  onSelectFilter = (value) => {
    this.setState({ selectedFilter: value});
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
        toggleMore={() => { }}
        //toggleCalendarStatus={this.toggleSelectedCalendarStatus}
        color={getColor(index)}
      />
    );
  };
  keyExtractor = (item, index) => index.toString();

  renderEvents = () => {
    const { events, selectedTab } = this.state;
    return (
      <FlatList
        data={events}
        //extraData={this.state}
        //refreshing={refreshing}
        //ListEmptyComponent={this.renderEmptyCalendars}
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
        <Header title='Dynamic Text' leftIcon={true} />

        <View style={styles.topRowView}>

          <View style={styles.topRowLeftHalf}>
            <Text style={{ textAlign: 'left' }}>New Event :</Text>
          </View>

          <View style={styles.topRowEventButtons}>
            <SmallButton
              icon={images.filter}
              color={colors.white}
              onPress={this.toggleShowFilter}
              showBorder={true}
            >
              <Text style={styles.whiteButtonText}>Filter</Text>
            </SmallButton>

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
