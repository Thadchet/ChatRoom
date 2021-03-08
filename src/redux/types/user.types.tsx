import { ImageSourcePropType } from "react-native";

export const WATCH_USERNAME = "WATCH_USERNAME";
export const WATCH_STATUS = "WATCH_STATUS";
export const WATCH_TOKEN = "WATCH_TOKEN";
export const WATCH_IS_LOGIN = "WATCH_IS_LOGIN";
export const WATCH_FIND_USER = "WATCH_FIND_USER";
export const WATCH_FIND_USER_PROFILE = "WATCH_FIND_USER_PROFILE";
export const WATCH_IS_FOUND_USER = "WATCH_IS_FOUND_USER";
export const WATCH_FRIEND_LIST = "WATCH_FRIEND_LIST";
export const WATCH_USER_ID = "WATCH_USER_ID";

export const UPDATE_TOKEN = "UPDATE_TOKEN";
export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const UPDATE_IS_LOGIN = "UPDATE_IS_LOGIN";
export const UPDATE_FIND_USER = "UPDATE_FIND_USER";
export const UPDATE_FIND_USER_PROFILE = "UPDATE_FIND_USER_PROFILE";
export const UPDATE_IS_FOUND_USER = "UPDATE_IS_FOUND_USER";
export const UPDATE_FRIEND_LIST = "UPDATE_FRIEND_LIST";
export const UPDATE_USER_ID = "UPDATE_USER_ID";

interface WatchUsernameAction {
    type: typeof WATCH_USERNAME;
    payload: String;
}

interface WatchStatusAction {
    type: typeof WATCH_NAME;
    payload: String;
}

interface WatchTokenAction {
    type: typeof WATCH_TOKEN;
    payload: String;
}

interface UpdateTokenAction {
    type: typeof UPDATE_TOKEN;
    payload: String;
}

interface UpdateUsernameAction {
    type: typeof UPDATE_USERNAME;
    payload: String;
}

interface UpdateStatusAction {
    type: typeof UPDATE_STATUS;
    payload: String;
}

interface WatchIsLoginAction {
    type: typeof WATCH_IS_LOGIN;
    payload: Boolean;
}

interface UpdateIsLoginAction {
    type: typeof UPDATE_IS_LOGIN;
    payload: Boolean;
}

interface UpdateFindUserAction {
    type: typeof UPDATE_FIND_USER;
    payload: String;
}

interface UpdateFindUserProfileAction {
    type: typeof UPDATE_FIND_USER_PROFILE;
    payload: String;
}

interface WatchFindUserAction {
    type: typeof WATCH_FIND_USER;
    payload: String;
}

interface WatchFindUserProfileAction {
    type: typeof WATCH_FIND_USER_PROFILE;
    payload: String;
}

interface WatchIsFoundUserAction {
    type: typeof WATCH_IS_FOUND_USER;
    payload: String;
}

interface UpdateIsFoundUserAction {
    type: typeof UPDATE_IS_FOUND_USER;
    payload: String;
}

interface WatchFriendListAction {
    type: typeof WATCH_FRIEND_LIST;
    payload: String;
}

interface UpdateFriendListAction {
    type: typeof UPDATE_FRIEND_LIST;
    payload: String;
}

interface WatchUserIDAction {
    type: typeof WATCH_USER_ID;
    payload: String;
}

interface UpdateUserIDAction {
    type: typeof UPDATE_USER_ID;
    payload: String;
}

export type UserActionTypes =
    | WatchUsernameAction
    | WatchStatusAction
    | WatchTokenAction
    | UpdateTokenAction
    | UpdateStatusAction
    | UpdateUsernameAction
    | WatchIsLoginAction
    | UpdateIsLoginAction
    | WatchFindUserProfileAction
    | WatchFindUserAction
    | UpdateFindUserProfileAction
    | UpdateFindUserAction
    | UpdateIsFoundUserAction
    | WatchIsFoundUserAction
    | UpdateFriendListAction
    | WatchFriendListAction
    | WatchUserIDAction
    | UpdateUserIDAction;
