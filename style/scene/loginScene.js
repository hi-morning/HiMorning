import {StyleSheet} from 'react-native';
import config from "../../src/config/app.js";

export default StyleSheet.create({
  container: {
    width: config.screenWidth,
    height: config.screenHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  video: {
    width: config.screenWidth,
    height: config.screenHeight
  },
  loginButton: {
    width: config.screenWidth * 0.8
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: config.screenWidth,
    height: config.screenHeight
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: config.screenWidth,
    height: config.screenHeight,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
});
