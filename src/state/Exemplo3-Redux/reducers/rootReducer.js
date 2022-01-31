import { combineReducers } from 'redux'

import jobReducer from './job'
import userReducer from './user'

export default combineReducers({
  joberson: jobReducer,
  user: userReducer
})

// import job from './job'
// import user from './user'

// export default combineReducers({
//   job,
//   user
// })

