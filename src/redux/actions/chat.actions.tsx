import { request, failure } from "./common.actions";
import { UPDATE_CHAT_ROOM_LIST } from "../types";
import { chatService } from "../../services";
import { ChatActionTypes } from "../types";
import { ActionCreator } from "redux";
import { setSession } from "../../lib/session";

const updateChatRoomList: ActionCreator<ChatActionTypes> = (
    chatRoomList: String
) => {
    return { type: UPDATE_CHAT_ROOM_LIST, payload: chatRoomList };
};

export function createChat({
    memberID,
    memberName,
}: {
    memberID: String;
    memberName: String;
}) {
    return (dispatch) => {
        dispatch(request());

        return chatService.createChat({ memberID, memberName }).then(
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

export function getAllChat() {
    return (dispatch) => {
        dispatch(request());
        return chatService.getAllChat().then(
            (response) => {
                console.log(response);
                dispatch(updateChatRoomList(response));
            },
            (error) => {
                console.log("POST RESPONSE: " + JSON.stringify(error));
                dispatch(failure("Server error."));
            }
        );
    };
}
