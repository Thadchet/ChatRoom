import { ImageSourcePropType } from "react-native";

export const WATCH_CHAT_ROOM_LIST = "WATCH_CHAT_ROOM_LIST";

export const UPDATE_CHAT_ROOM_LIST = "UPDATE_CHAT_ROOM_LIST";

interface WatchChatRoomListAction {
    type: typeof WATCH_CHAT_ROOM_LIST;
    payload: String;
}

interface UpdateChatRoomListAction {
    type: typeof UPDATE_CHAT_ROOM_LIST;
    payload: String;
}

export type ChatActionTypes =
    | WatchChatRoomListAction
    | UpdateChatRoomListAction;
