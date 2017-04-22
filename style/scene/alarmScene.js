import {StyleSheet} from 'react-native';
import config from "../../src/config/app.js";

export default StyleSheet.create({
  container: {
    borderColor: 'red', borderWidth: 1,
    width: config.screenWidth,
    height: config.screenHeight - config.headerHeight
  },
  listView: {
    width: config.screenWidth,
    height: config.screenHeight - config.headerHeight,
    marginTop: config.headerHeight
  }
});
