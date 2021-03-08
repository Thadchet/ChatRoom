import { ImageSourcePropType } from "react-native";

export const WATCH_CHAT_ROOM_LIST = "WATCH_CHAT_ROOM_LIST";
export const WATCH_MESSAGE_LIST = "WATCH_MESSAGE_LIST";

export const UPDATE_CHAT_ROOM_LIST = "UPDATE_CHAT_ROOM_LIST";
export const UPDATE_MESSAGE_LIST = "UPDATE_MESSAGE_LIST";

interface WatchChatRoomListAction {
    type: typeof WATCH_CHAT_ROOM_LIST;
    payload: String;
}

interface UpdateChatRoomListAction {
    type: typeof UPDATE_CHAT_ROOM_LIST;
    payload: String;
}

interface WatchMessageListAction {
    type: typeof WATCH_MESSAGE_LIST;
    payload: String;
}

interface UpdateMessageListAction {
    type: typeof UPDATE_MESSAGE_LIST;
    payload: String;
}

export type ChatActionTypes =
    | WatchChatRoomListAction
    | UpdateChatRoomListAction
    | WatchMessageListAction
    | UpdateMessageListAction;
