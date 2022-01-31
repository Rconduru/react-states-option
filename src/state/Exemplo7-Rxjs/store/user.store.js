import { BehaviorSubject } from 'rxjs'

const initialState = {
  detail: {
    name: 'Bicho Papão',
    email: 'bicho.papao@xpto',
  },
  profile: '',
  iniatilized: false,
  isLoading: false
}

let state = initialState

// Subject, depois de inscrito(subscribe), só recebe o que vier de novo
// BehaviorSubject, depois de inscrito(subscribe), recebe o último e o novos

// Este é como se fosse o reducer do REDUX
const subject = new BehaviorSubject(initialState)

const userStore = {
  // O NEXT do subject é como se fosse o dispatch ou Initial State
  init: (newState) => {
    if(!initialState.iniatilized){

      state = {
        ...( newState || state ),
        iniatilized: true,
        isLoading: false
      }
      subject.next(initialState)
    }
  },
  // Inscrever Observador
  observe: (funcCallBack) => {
    subject.subscribe(funcCallBack, console.error);
  },
  userNameChange: (name) => {
    state = {
      ...state,
      detail: {
        ...state.detail,
        name,
      },
    }

    subject.next(state)
  },
  userChangeProfile: (profile) => {
    state = {
      ...state,
      profile
    }

    subject.next(state)
  },
  setLoading: (isLoading) => {
    state = {
      ...state,
      isLoading
    }

    subject.next(state)
  },
  initialState
}

export default userStore