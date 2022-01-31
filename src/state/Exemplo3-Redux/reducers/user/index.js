import { USER_CHANGE_NAME, USER_CHANGE_PROFILE } from '../../actions/user/types'

const initialState = {
  detail: {
    name: 'Bicho Papão',
    email: 'bicho.papao@xpto',
  },
  profile: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CHANGE_NAME:
      return {
        ...state,
        detail: {
          ...state.detail,
          name: action.payload,
        },
      };
    case USER_CHANGE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer