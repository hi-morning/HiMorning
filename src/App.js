import React, { Component } from 'react';
import {StyleSheet, Text, TouchableHighlight, View, ListView, Image, TextInput} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import LoginScene from "./scene/LoginScene.js";
import AlarmScene from "./scene/AlarmScene.js";
import styles from "../style/app.js";

import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import store from '../redux/store.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return <Provider store={store}>
      <Router style={styles.container}>
        <Scene key='root'>
          <Scene key='login' component={LoginScene} hideNavBar={true}
             initial={false} />
          <Scene key='alarm' title='Hi Morning' component={AlarmScene}
            hideNavBar={false}
            initial={true}/>
        </Scene>
      </Router>
    </Provider>
  }

}
