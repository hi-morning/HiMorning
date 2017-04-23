import React, {Component} from 'react';
import styles from '../../style/components/alarmItem.js';
import {Switch, View, Text, TouchableOpacity} from 'react-native';

export default class AlarmItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let time = this.props.hour + ':'
      + (this.props.minute < 10 ? '0' : '')
      + this.props.minute;
    return <TouchableOpacity onPress={() => this.props.onPress(this.props.idx)}>
      <View style={styles.container}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.ampm}>{this.props.ampm == 'am' ? 'AM' : 'PM'}</Text>
        <View style={styles.switchButtonContainer}>
          <Switch style={styles.switchButton}
            onValueChange={(value) => this.props.onStatusChange(this.props.idx, value ? 'on' : 'off')}
            value={this.props.status == 'on'}/>
        </View>
      </View>
    </TouchableOpacity>
  }
}
