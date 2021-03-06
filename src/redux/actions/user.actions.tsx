import { request, failure } from "./common.actions";
import { UPDATE_TOKEN, UPDATE_IS_LOGIN } from "../types";
import { userService } from "../../services";
import { StoryInterface, UserActionTypes } from "../types";
import { ActionCreator } from "redux";

// Set Token
const loginSuccess: ActionCreator<UserActionTypes> = (token: String) => {
    return { type: UPDATE_TOKEN, payload: token };
};

const updateIsLogin: ActionCreator<UserActionTypes> = (isLogin: Boolean) => {
    return { type: UPDATE_IS_LOGIN, payload: isLogin };
};

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
                console.log(response.token);
                dispatch(loginSuccess(response.token));
                dispatch(updateIsLogin(true));
            },
            (error) => {
                console.log("POST RESPONSE: " + JSON.stringify(error));
                dispatch(failure("Server error."));
            }
        );
    };
}
