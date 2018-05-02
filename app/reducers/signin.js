// @flow
import { USERDATA_CHANGE, LOGIN, LOGOUT, EDITOR_MODE } from '../actions/singin';

export type signinStateType = {
  +signin: object
};

type actionType = {
  +type: string
};

export default function authReducer(state: object = {}, action: actionType) {
  switch (action.type) {
    case USERDATA_CHANGE:
      return {
        ...state,
        ...action.userData
      };
    case LOGIN:
      return {
        ...state,
        ...action.userData
      };
    case LOGOUT:
      return {};
    case EDITOR_MODE:
      return {
        ...state,
        editorMode: !state.editorMode
      };
    default:
      return state;
  }
}
