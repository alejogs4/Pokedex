import { SET_USER_DATA } from "../actions";

export const user = (state = null, action) => {
  switch(action.type) {
    case SET_USER_DATA:
      return action.user
    default:
      return state
  }
}