import {Dimensions} from 'react-native';

const window = Dimensions.get('window');

export default {
  screenWidth: window.width,
  screenHeight: window.height,
  headerHeight: window.height * 0.1,
  thumbnailHeight: 100,
  useRCTView: true, //debug or not?
  video: {
    minWidth: 500,
    minHeight: 300,
    minFrameRate: 30
  }
}
