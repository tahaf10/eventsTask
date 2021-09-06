import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType
} from 'react-native';
import moment from 'moment';
import styles from './styles';
import images from '../../../common/images';
import colors from '../../../common/colors';
import { MoreOptionsModal } from '../Widgets/ModalWidgets';


type Options = {
  id: number,
  key: string,
  icon?: ImageSourcePropType
}
type Event = {
  id: number,
  name: string,
  description: string,
  date: Date,
  fromTime: Date,
  toTime: Date,
  document?: string
}

type CalendarCardProps = {
  item: Event,
  color: string,
  toggleMore: () => void
}

type CalendarCardState = {
  options: Options[],
  showModalVisible: boolean
}

export default class CalendarCard extends Component<CalendarCardProps, CalendarCardState> {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { id: 0, key: 'Edit', icon: images.edit },
        { id: 1, key: 'Delete', icon: images.delete },
      ],
      showModalVisible: false,
    };
  }


  toggleModal = () => {
    this.setState({ showModalVisible: false });
  }

  renderModal = () => {
    const { options, showModalVisible } = this.state;
    return (
      <MoreOptionsModal
        //select={this.goToOption}
        moreOptions={options}
        modalVisible={showModalVisible}
        close={this.toggleModal}
        title='Options'
      />
    );
  };

  render() {
    const { item, toggleMore, color } = this.props;
    const {
      name,
      description,
      date,
      fromTime,
      toTime
    } = item;
    return (
      <View style={[styles.cardView, { borderLeftColor: color }]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleText, { color: color }]}>{name}</Text>
          <TouchableOpacity style={styles.moreOptions} onPress={toggleMore}>
            <Image source={images.settingsGear} style={styles.settingIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{description}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{date.toDateString()}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{fromTime.toLocaleTimeString()}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{toTime.toLocaleTimeString()}</Text>
        </View>
        {this.renderModal()}
      </View>
    );
  }
}
