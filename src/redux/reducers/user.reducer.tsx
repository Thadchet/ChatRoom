import {
    UserActionTypes,
    UPDATE_TOKEN,
    WATCH_USERNAME,
    WATCH_STATUS,
    UPDATE_IS_LOGIN,
    UPDATE_STATUS,
    UPDATE_USERNAME,
    WATCH_FIND_USER,
    WATCH_FIND_USER_PROFILE,
    UPDATE_FIND_USER,
    UPDATE_FIND_USER_PROFILE,
    UPDATE_IS_FOUND_USER,
    UPDATE_FRIEND_LIST,
    WATCH_FRIEND_LIST,
    UPDATE_USER_ID,
    WATCH_USER_ID,
} from "../types";

interface UserState {
    userID: string;
    username: string;
    status: string;
    token: string;
    isLogin: bool;
    isFoundUser: bool;
    findUsername: string;
    findUserProfile: string;
    friendList: any[];
}

const initialState: UserState = {
    userID: "",
    username: "",
    status: "",
    token: "token",
    isLogin: false,
    isFoundUser: false,
    findUsername: "",
    findUserProfile: "",
    friendList: [],
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
        case UPDATE_USERNAME: {
            return {
                ...state,
                username: action.payload,
            };
        }
        case WATCH_FIND_USER: {
            return {
                ...state,
                findUsername: action.payload,
            };
        }
        case WATCH_FIND_USER_PROFILE: {
            return {
                ...state,
                findUserProfile: action.payload,
            };
        }
        case UPDATE_FIND_USER: {
            return {
                ...state,
                findUsername: action.payload,
            };
        }
        case UPDATE_FIND_USER_PROFILE: {
            return {
                ...state,
                findUserProfile: action.payload,
            };
        }
        case UPDATE_IS_FOUND_USER: {
            return {
                ...state,
                isFoundUser: action.payload,
            };
        }
        case UPDATE_FRIEND_LIST: {
            return {
                ...state,
                friendList: action.payload,
            };
        }
        case WATCH_FRIEND_LIST: {
            return {
                ...state,
                friendList: action.payload,
            };
        }
        case UPDATE_USER_ID: {
            return {
                ...state,
                userID: action.payload,
            };
        }
        case WATCH_USER_ID: {
            return {
                ...state,
                userID: action.payload,
            };
        }
        default:
            return state;
    }
}
