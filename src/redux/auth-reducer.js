import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA: {
      return { ...state, ...action.data };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const setAuthUsersData = (userId, email, login, isAuth) => ({
  type: SET_USERS_DATA,
  data: { userId, email, login, isAuth },
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUsersData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUsersData(null, null, null, false));
    }
  });
};

export default authReducer;
