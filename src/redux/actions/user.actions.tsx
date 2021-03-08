import { request, failure } from "./common.actions";
import {
    UPDATE_TOKEN,
    UPDATE_IS_LOGIN,
    UPDATE_USERNAME,
    UPDATE_STATUS,
    UPDATE_FIND_USER_PROFILE,
    UPDATE_FIND_USER,
    UPDATE_IS_FOUND_USER,
    UPDATE_FRIEND_LIST,
} from "../types";
import { userService } from "../../services";
import { StoryInterface, UserActionTypes } from "../types";
import { ActionCreator } from "redux";
import { setSession, clearSession } from "../../lib/session";
import Navigation from "../../lib/Navigation";

// Set Token
const loginSuccess: ActionCreator<UserActionTypes> = (token: String) => {
    return { type: UPDATE_TOKEN, payload: token };
};

const updateIsLogin: ActionCreator<UserActionTypes> = (isLogin: Boolean) => {
    return { type: UPDATE_IS_LOGIN, payload: isLogin };
};

const updateUsername: ActionCreator<UserActionTypes> = (username: String) => {
    return { type: UPDATE_USERNAME, payload: username };
};

const updateStatus: ActionCreator<UserActionTypes> = (status: String) => {
    return { type: UPDATE_STATUS, payload: status };
};

const updateFindUser: ActionCreator<UserActionTypes> = (username: String) => {
    return { type: UPDATE_FIND_USER, payload: username };
};

const updateFriendList: ActionCreator<UserActionTypes> = (friends: any[]) => {
    return { type: UPDATE_FRIEND_LIST, payload: friends };
};

const updateFindUserProfile: ActionCreator<UserActionTypes> = (
    profile: String
) => {
    return { type: UPDATE_FIND_USER_PROFILE, payload: profile };
};

const updateIsFoundUser: ActionCreator<UserActionTypes> = (
    isFound: Boolean
) => {
    return { type: UPDATE_IS_FOUND_USER, payload: isFound };
};

export function logout() {
    return (dispatch) => {
        dispatch(request());
        return userService.logout().then(
            (response) => {
                clearSession({});
                dispatch(updateIsLogin(false));
            },
            (error) => {
                console.log("POST RESPONSE ERROR: " + JSON.stringify(error));
                dispatch(failure("Server error."));
            }
        );
    };
}

export function login({
    username,
    password,
}: {
    username: String;
    password: String;
}) {
    return (dispatch) => {
        dispatch(request());
        return userService.login({ username, password }).then(
            (response) => {
                setSession({ token: response.token });
                dispatch(loginSuccess(response.token));
                dispatch(updateIsLogin(true));
            },
            (error) => {
                console.log("POST RESPONSE ERROR: " + JSON.stringify(error));
                dispatch(failure("Server error."));
            }
        );
    };
}

export function register({
    username,
    password,
}: {
    username: String;
    password: String;
}) {
    return (dispatch) => {
        dispatch(request());
        return userService.register({ username, password }).then(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log("POST RESPONSE: " + JSON.stringify(error));
                dispatch(failure("Server error."));
            }
        );
    };
}

export function getUser() {
    return (dispatch) => {
        dispatch(request());
        return userService.getUser().then(
            (response) => {
                console.log(response);
                dispatch(updateUsername(response.Username));
                dispatch(updateStatus(response.Status));
            },
            (error) => {
                console.log(
                    "GET RESPONSE ERROR GET USER: " + JSON.stringify(error)
                );
                dispatch(failure("Server error."));
            }
        );
    };
}

export function findUser({ username }: { username: String }) {
    return (dispatch) => {
        dispatch(request());
        return userService.findUser({ username }).then(
            (response) => {
                console.log("GET RESPONSE: " + JSON.stringify(response));

                dispatch(updateFindUser(response.Username));
                dispatch(updateFindUserProfile(response.Profile));
                dispatch(updateIsFoundUser(true));
            },
            (error) => {
                console.log("GET RESPONSE: " + JSON.stringify(error));
                dispatch(failure("Server error."));
            }
        );
    };
}

export function getFriends() {
    return (dispatch) => {
        dispatch(request());
        return userService.getFriends().then(
            (response) => {
                console.log("GET RESPONSE: " + JSON.stringify(response));

                dispatch(updateFriendList(response));
            },
            (error) => {
                console.log("GET RESPONSE: " + JSON.stringify(error));
                dispatch(failure("Server error."));
            }
        );
    };
}
