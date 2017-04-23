import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View, Picker} from 'react-native';
import styles from '../../style/components/editAlarm.js';
import {Button} from 'react-native-elements'

export default class EditAlarm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hour: props.hour,
      minute: props.minute
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.hour != this.props.hour || nextProps.minute != this.props.minute) {
      this.setState({
        hour: nextProps.hour,
        minute: nextProps.minute
      });
    }
  }

  render() {
    return <View>
      <Modal transparent={true} visible={this.props.visible}>
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.linksContainer}>
              <TouchableOpacity
                onPress={this.props.close.bind(this)}
                style={styles.cancelLink}>
                <Text style={[styles.linkText, styles.cancelLinkText]}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleSavePress.bind(this)}
                style={styles.saveLink}>
                <Text style={[styles.linkText, styles.saveLinkText]}>Save</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.pickersContainer}>
              {this.renderHourPicker()}
              {this.renderMinutePicker()}
              {this.renderAMPMPicker()}
            </View>
            {this.renderDeleteButton()}
          </View>
        </View>
      </Modal>
    </View>
  }

  renderHourPicker() {
    let items = [];
    for(let hour = 1; hour <= 23; hour++) {
      items.push(<Picker.Item key={'hour-' + hour}
        value={hour} label={'' + hour} />)
    }
    return <Picker
      onValueChange={(hour) => this.setState({hour})}
      selectedValue={this.state.hour}
      style={[styles.picker, styles.hourPicker]}>
      {items}
    </Picker>
  }

  renderMinutePicker() {
    let items = [];
    for(let hour = 0; hour < 60; hour++) {
      items.push(<Picker.Item key={'minute-' + hour}
        value={hour} label={(hour < 10 ? '0' : '') + hour}/>)
    }
    return <Picker
      onValueChange={(minute) => this.setState({minute})}
      selectedValue={this.state.minute}
      style={[styles.picker, styles.minutePicker]}>
      {items}
    </Picker>
  }

  renderAMPMPicker() {
    return <Picker
      selectedValue={this.state.hour >= 12 ? 'pm' : 'am'}
      style={[styles.picker, styles.ampmPicker]}>
      <Picker.Item key={'am'} value={'am'} label={'AM'}/>
      <Picker.Item key={'pm'} value={'pm'} label={'PM'}/>
    </Picker>
  }

  renderDeleteButton() {
    if(this.props.mode == 'edit') {
      return <View style={styles.deleteButtonContainer}>
        <Button title='Delete'
          onPress={this.props.delete.bind(this)}
          buttonStyle={styles.deleteButton}></Button>
      </View>
    } else {
      return null;
    }
  }

  handleSavePress() {
    this.props.save(this.state.hour + ':' + this.state.minute)
  }
}
