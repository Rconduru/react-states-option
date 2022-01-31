import { USER_CHANGE_NAME, USER_CHANGE_PROFILE } from './types'

export function setNewUserName(newName) {
  return {
    type: USER_CHANGE_NAME,
    payload: newName
  }
}

export function setNewProfile(newProfile) {
  return {
    type: USER_CHANGE_PROFILE,
    payload: newProfile
  }
}