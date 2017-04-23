import {StyleSheet} from 'react-native';
import config from "../../src/config/app.js";

const bodyHeight = config.screenHeight * 0.5;
const bodyWidth = config.screenWidth * 0.8
const padding = 10

export default StyleSheet.create({
  container: {
    width: config.screenWidth,
    height: config.screenHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  body: {
    width: bodyWidth,
    height: bodyHeight,
    borderColor: 'red',
    backgroundColor: 'white'
  },
  linksContainer: {
    width: bodyWidth,
    flexDirection: 'row'
  },
  cancelLink: {
    flex: 1
  },
  linkText: {
    padding: padding,
    color: 'rgb(27, 96, 186)'
  },
  cancelLinkText: {
  },
  saveLink: {
    flex: 1
  },
  saveLinkText: {
    textAlign: 'right'
  },

  pickersContainer: {
    width: bodyWidth,
    flexDirection: 'row'
  },
  picker: {
    flex: 1
  },

  deleteButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: bodyWidth
  },

  deleteButton: {
    width: bodyWidth * 0.8,
    backgroundColor: 'rgb(223, 0, 81)'
  }
});
