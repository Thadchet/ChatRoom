import { ImageSourcePropType } from "react-native";

export const WATCH_USERNAME = "WATCH_USERNAME";
export const WATCH_STATUS = "WATCH_STATUS";
export const WATCH_TOKEN = "WATCH_TOKEN";
export const WATCH_IS_LOGIN = "WATCH_IS_LOGIN";

export const UPDATE_TOKEN = "UPDATE_TOKEN";
export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const UPDATE_IS_LOGIN = "UPDATE_IS_LOGIN";

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

export type UserActionTypes =
    | WatchUsernameAction
    | WatchStatusAction
    | WatchTokenAction
    | UpdateTokenAction
    | UpdateStatusAction
    | UpdateUsernameAction
    | WatchIsLoginAction
    | UpdateIsLoginAction;
