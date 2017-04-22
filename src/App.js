import React, { Component } from 'react';
import {StyleSheet, Text, TouchableHighlight, View, ListView, Image, TextInput} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import LoginScene from "./scene/LoginScene.js";
import AlarmScene from "./scene/AlarmScene.js";
import Commons from "./lib/commons.js";
import styles from "../style/app.js";
import config from "./config/app.js";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return <Router style={styles.container} navigationBarStyle={styles.navigationBar}>
      <Scene key='root'>
        <Scene key='alarm' title='Hi Morning' component={LoginScene} />
        <Scene key='alarm' title='Hi Morning' component={AlarmScene} />
      </Scene>
    </Router>
  }

}
