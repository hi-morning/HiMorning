import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View, ListView, Image} from 'react-native';
import config from "../config/app.js";
import styles from "../../style/scene/alarmScene.js";
import AlarmItem from '../components/AlarmItem.js';
import {Actions} from 'react-native-router-flux';
import EditAlarm from '../components/EditAlarm.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import commonActions from '../../redux/action/common.js';

const addAlarmImage = require('../../image/add.png');

class AlarmScene extends Component {

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows(props.common.alarms),
      showEditAlarm: false,
      listViewKey: newListViewKey(),
      editAlarm: {}
    }
  }

  componentWillMount() {
    if(this.props.common.firebase.status == 'ready') {
      this.props.loadAlarms()
    } else {
      this.props.initializeFirebase();
    }
  }

  componentDidMount() {
    let actionParams = {
      rightButtonImage: addAlarmImage,
      onRight: this.handleAddAlarm.bind(this),
      rightButtonStyle: styles.rightButtonStyle
    }
    Actions.refresh(actionParams);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.common.firebase.status == 'ready'
      && nextProps.common.firebase.status != this.props.common.firebase.status) {
      this.props.loadAlarms()        
    }

    if(nextProps.common.alarms != this.props.common.alarms) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.common.alarms),
        listViewKey: newListViewKey()
      });
    }
  }

  render() {
    let editTime = this.state.editAlarm.time;
    let editHour = editTime == null ? 1 : parseInt(editTime.split(':')[0])
    let editMinute = editTime == null ? 0 : parseInt(editTime.split(':')[1])
    return <View>
      <ListView key={this.state.listViewKey}
        style={styles.listView}
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)} />
      <EditAlarm visible={this.state.showEditAlarm}
        mode={this.state.editAlarm.mode}
        hour={editHour}
        minute={editMinute}
        close={this.closeEditAlarm.bind(this)}
        save={this.saveEditAlarm.bind(this)}
        delete={this.deleteEditAlarm.bind(this)}/>
    </View>
  }

  renderRow(rowData, sectionId, rowId) {
    if(rowData == null) {
      return null;
    }
    let timeParts = rowData.time.split(':');
    let hour = parseInt(timeParts[0]);
    let minute = parseInt(timeParts[1])
    return <AlarmItem
      idx={parseInt(rowId)}
      status={rowData.status}
      hour={hour}
      minute={minute}
      ampm={hour < 12 ? 'am' : 'pm'}
      onPress={this.handleAlarmItemPress.bind(this)}
      onStatusChange={this.handleStatusChange.bind(this)}
    />
  }

  handleAddAlarm() {
    this.setState({
      showEditAlarm: true,
      editAlarm: {
        mode: 'add'
      }
    });
  }

  handleAlarmItemPress(idx) {
    this.setState({
      showEditAlarm: true,
      editAlarm: {
        ...this.props.common.alarms[idx],
        idx,
        mode: 'edit'
      }
    });
  }

  handleStatusChange(idx, status) {
    this.props.updateAlarm(idx, {status});
  }

  closeEditAlarm() {
    this.setState({
      showEditAlarm: false
    })
  }

  saveEditAlarm(time) {
    if(this.state.editAlarm.mode == 'add') {
      this.props.addAlarm(time, 'on');
    } else {
      this.props.updateAlarm(this.state.editAlarm.idx, {time});
    }
    this.setState({
      showEditAlarm: false
    });
  }

  deleteEditAlarm() {
    this.props.deleteAlarm(this.state.editAlarm.idx);
    this.setState({
      showEditAlarm: false
    });
  }
}

let newListViewKey = () => {
  return 'listView-' + Math.floor(Math.random() * 10000000);
}

let mapStateToProps = (state) => {
	return {
		common: state.common
	}
};

let mapDispatchToProps = (dispatch) => bindActionCreators({
  updateAlarm: commonActions.updateAlarm,
  addAlarm: commonActions.addAlarm,
  deleteAlarm: commonActions.deleteAlarm,
  loadAlarms: commonActions.loadAlarms,
  initializeFirebase: commonActions.initializeFirebase
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlarmScene);
