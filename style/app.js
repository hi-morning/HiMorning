import {StyleSheet} from 'react-native';
import config from "../src/config/app.js";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: config.screenWidth,
    height: config.screenHeight
  },
  logo: {
    position: "absolute",
    width: 100,
    height: 50,
    top: 0,
    left: 0,
    //borderWidth: 1, borderColor: "white"
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  },
  navigationBar: {
    height: config.navigationBarHeight,
    width: config.screenWidth,
    backgroundColor: 'rgb(204,204,204)',
    borderColor: 'red',
    borderWidth: 1
  }
});
