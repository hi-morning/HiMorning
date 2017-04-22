import {StyleSheet} from 'react-native';
import config from "../../src/config/app.js";

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: config.screenWidth,
    height: config.headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingTop: config.headerHeight / 2 - 15
  },
  buttonContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftButton: {
    padding: 0,
    margin: 0
  },
  rightButton: {
    padding: 0,
    margin: 0,
    left: 20
  },
  titleContainer: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20
  }
});
