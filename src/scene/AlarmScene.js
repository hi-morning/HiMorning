import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View, ListView, Image} from 'react-native';
import config from "../config/app.js";
import styles from "../../style/scene/alarmScene.js";
import Header from '../components/Header.js';
import AlarmItem from '../components/AlarmItem.js';
import {Actions} from 'react-native-router-flux';

export default class AlarmScene extends Component {

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows(['row 1', 'row 2'])
    }
  }

  componentDidMount() {
    Actions.refresh({
      navBar: Header
    });
  }

  render() {
    return <View>
      <ListView style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)} />
    </View>
  }

  renderRow(rowData) {
    return <AlarmItem />
  }
}
