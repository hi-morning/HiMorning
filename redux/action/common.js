import firebase from 'firebase';
import config from '../../config/app.js';
/**
 * Params: {time: 'HH:MM', status: 'on' or 'off' }
 */
let updateAlarm = (idx, params) => {
  getRef('alarms/' + idx).update(params);
  return {
    type: 'common.updateAlarm',
    payload: {
      idx,
      ...params
    }
  };
}

let addAlarm = (time, status) => {
  getRef('alarms')
    .once('value')
    .then(result => {
      let alarms = result.val();
      if(alarms == null || alarms.length == 0) {
        return 0;
      }
      return alarms.length;
    })
    .then(alarmIdx => {
      return getRef('alarms/' + alarmIdx).set({
        time,
        status
      });
    });
  return {
    type: 'common.addAlarm',
    payload: {
      time, status
    }
  }
}

let deleteAlarm = (idx) => {
  getRef('alarms/' + idx).remove();
  return {
    type: 'common.deleteAlarm',
    payload: {
      idx
    }
  }
}

let loadAlarms = () => {
  let type = 'common.loadAlarms';
  return dispatch => {
    dispatch({
      type,
      status: 'init'
    });
    getRef('alarms')
      .once('value')
      .then((result) => {
        let alarms = result.val()
        dispatch({
          type,
          status: 'successful',
          payload: alarms
        });
        console.log('Received alarms from Firebase: ', alarms);
      })
      .catch((error) => {
        dispatch({
          type,
          status: 'fail',
          payload: error
        });
        console.log('Load alarms from Firebase fail. Error: ', error);
      })
  }
}

export default {
  updateAlarm,
  addAlarm,
  deleteAlarm,
  loadAlarms
}

// Utils -----------------------------------------------------------------------
let getRef = (path) => {
  return firebase
    .database()
    .ref('users/' + config.authentication.username + '/' + path);
}
