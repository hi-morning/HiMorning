import React, {Component} from 'react';
import styles from '../../style/components/header.js';
import {Switch, View, Text} from 'react-native';
import {Button} from 'react-native-elements'

export default class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.container}>
      <View style={styles.buttonContainer}>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button icon={{name: 'add', color: 'black'}}
          buttonStyle={styles.rightButton}
          large={true}
          backgroundColor='rgba(0, 0, 0, 0)' />
      </View>
    </View>
  }
}
