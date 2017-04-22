import React, {Component} from 'react';
import styles from '../../style/components/alarmItem.js';
import {Switch, View, Text} from 'react-native';

export default class AlarmItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.container}>
      <Text style={styles.time}>6:00</Text>
      <Text style={styles.ampm}>AM</Text>
      <View style={styles.switchButtonContainer}>
        <Switch style={styles.switchButton} />
      </View>
    </View>
  }
}
