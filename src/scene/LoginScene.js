import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View, ListView, Image} from 'react-native';
import config from "../config/app.js";
import styles from "../../style/scene/loginScene.js";
import {SocialIcon} from 'react-native-elements';
const FBSDK = require('react-native-fbsdk');
const {LoginManager, AccessToken} = FBSDK;

const backgroundImage = require('../../image/IMG_0613.jpg');

export default class LoginScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return <View style={styles.container}>
      <Image source={backgroundImage} blurRadius={3} style={styles.backgroundImage}/>
      <View style={styles.backgroundOverlay} />
      <SocialIcon title='Sign In With Facebook' button type='facebook'
        style={styles.loginButton}
        onPress={this.handleLoginPress.bind(this)}/>
    </View>
  }

  handleLoginPress() {
    LoginManager.logInWithReadPermissions(['public_profile'])
      .then((loginResult) => {
        console.log('Facebook login result: ', loginResult);
        AccessToken.getCurrentAccessToken()
          .then((accessTokenResult) => {
            console.log('AccessToken result: ', accessTokenResult)
            fetchFacebookUser(accessTokenResult.userID, accessTokenResult.accessToken)
          });
      })
      .catch((error) => {
        console.log('Error: ', error)
      });
  }
}

let fetchFacebookUser = (userId, accessToken) => {
  // Ref: https://developers.facebook.com/docs/graph-api/reference/v2.2/user/picture
  // Get image by: `http://graph.facebook.com/${userId}/picture?type=large`
  let url = `https://graph.facebook.com/v2.8/${userId}?fields=age_range,name,gender,friends&access_token=${accessToken}`
  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(userResult => {
      console.log('User Result: ', userResult);
    });
}
