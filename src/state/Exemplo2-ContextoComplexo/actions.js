export function setNewUserName(newName) {
  return {
    type: 'CHANGE_NAME',
    payload: newName
  }
}