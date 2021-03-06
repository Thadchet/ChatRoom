import {
    UserActionTypes,
    UPDATE_TOKEN,
    WATCH_USERNAME,
    WATCH_STATUS,
    UPDATE_IS_LOGIN,
    UPDATE_STATUS,
} from "../types";

interface UserState {
    username: string;
    status: string;
    token: string;
    isLogin: bool;
}

const initialState: UserState = {
    username: "Bosskungg",
    status: "Hi I am redux !!",
    token: "token",
    isLogin: false,
};

export function userReducer(
    state: UserState = initialState,
    action: UserActionTypes
): UserState {
    switch (action.type) {
        case WATCH_USERNAME: {
            return {
                ...state,
                username: action.payload,
            };
        }
        case WATCH_STATUS: {
            return {
                ...state,
                status: action.payload,
            };
        }
        case UPDATE_TOKEN: {
            return {
                ...state,
                token: action.payload,
            };
        }
        case UPDATE_IS_LOGIN: {
            return {
                ...state,
                isLogin: action.payload,
            };
        }
        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.payload,
            };
        }
        default:
            return state;
    }
}
