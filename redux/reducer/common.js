const initialState = {
  loading: false,
  alarms: [],
  error: {
    code: '',
    message: ''
  },
  firebase: {
    status: 'na' // 'ready', 'fail' or 'initializing'
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'common.updateAlarm': {
      let alarm = state.alarms[action.payload.idx];
      let newAlarm = {
        ...alarm,
        ...action.payload
      }
      delete newAlarm.idx;
      let newState = {
        ...state,
        alarms: [...state.alarms]
      }
      newState.alarms[action.payload.idx] = newAlarm;

      return newState;
    }
    case 'common.addAlarm': {
      return {
        ...state,
        alarms: [...state.alarms, {
          time: action.payload.time,
          status: action.payload.status
        }]
      }
    }
    case 'common.deleteAlarm': {
      let newAlarms = [...state.alarms];
      delete newAlarms[action.payload.idx];
      return {
        ...state,
        alarms: newAlarms
      }
    }
    case 'common.loadAlarms': {
      return loadAlarms(state, action);
    }
    case 'common.initializeFirebase': {
      return initializeFirebase(state, action);
    }
    default: {
      return state
    }
  }
}

let loadAlarms = (state, action) => {
  switch(action.status) {
    case 'init':
      return {
        ...state,
        loading: true
      }
    case 'successful':
      return {
        ...state,
        alarms: action.payload,
        loading: false
      }
    case 'fail':
      return {
        ...state,
        error: {
          message: action.payload
        }
      }
    default: {
      return state
    }
  }
}

let initializeFirebase = (state, action) => {
  switch(action.status) {
    case 'init': {
      return {
        ...state,
        firebase: {
          status: 'initializing'
        }
      }
    }
    case 'successful': {
      return {
        ...state,
        firebase: {
          status: 'ready'
        }
      }
    }
    case 'fail': {
      return {
        ...state,
        firebase: {
          status: 'fail'          
        }
      }
    }
  }
}
