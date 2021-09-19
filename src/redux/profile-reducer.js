import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 11 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = { id: 8, message: action.newPostText, likesCount: 0 };
      return { ...state, posts: [...state.posts, newPost] };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText };
};

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const setUserStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getUserStatus(userId).then((response) => {
    dispatch(setUserStatus(response.data));
  });
};

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateUserStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};

export default profileReducer;
