import {StyleSheet} from 'react-native';
import config from "../../src/config/app.js";

const HEIGHT = config.screenHeight * 0.1;

export default StyleSheet.create({
  container: {
    width: config.screenWidth,
    height: HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  time: {
    color: 'black',
    fontSize: HEIGHT * 0.6,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  ampm: {
    color: 'black',
    fontSize: HEIGHT * 0.3,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    right: 0
  },
  switchButtonContainer: {
    position: 'absolute',
    right: 0,
    height: HEIGHT,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
