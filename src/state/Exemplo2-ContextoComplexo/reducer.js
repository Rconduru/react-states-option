const initialState = {
  user: {
    name: 'Bicho Papão',
    email: 'bicho.papao@xpto',
  },
  profile: '',
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };
    case 'CHANGE_PROFILE':
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return initialState;
  }
};

export { stateReducer, initialState };
