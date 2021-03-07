import { testData } from "../extra/testData.extra";
import { apiEndpoint } from "./../constants/config";
import { getFromServer, postToServer } from "./helper.services";

export const chatService = {
    createChat,
    getAllChat,
};

async function createChat({
    memberID,
    memberName,
}: {
    memberID: String;
    memberName: String;
}): Promise<any> {
    console.log("createChat service")
    return await postToServer(apiEndpoint + "chat/create-chat", {
        memberID,
        memberName,
    });
}

async function getAllChat(): Promise<any> {
    console.log("getAllChat service");
    return await getFromServer(apiEndpoint + "chat/chat-room");
}
