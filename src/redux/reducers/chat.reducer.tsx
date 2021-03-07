import {
    ChatActionTypes,
    WATCH_CHAT_ROOM_LIST,
    UPDATE_CHAT_ROOM_LIST,
} from "../types";

interface ChatState {
    chatRoomList: any[];
}

const initialState: ChatState = {
    chatRoomList: [],
};

export function chatReducer(
    state: ChatState = initialState,
    action: ChatActionTypes
): ChatState {
    switch (action.type) {
        case WATCH_CHAT_ROOM_LIST: {
            return {
                ...state,
                chatRoomList: action.payload,
            };
        }
        case UPDATE_CHAT_ROOM_LIST: {
            return {
                ...state,
                chatRoomList: action.payload,
            };
        }

        default:
            return state;
    }
}
