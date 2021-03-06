import { testData } from "../extra/testData.extra";
import { StoryInterface } from "../redux/types";

import { apiEndpoint } from "./../constants/config";
import { getFromServer, postToServer } from "./helper.services";

export const userService = {
    login,
};

// async function updateStories(): Promise<StoryInterface[]> {
//     // return await getFromServer('/api/');
//     return testData.stories;
// }

// async function updateMyStory(): Promise<StoryInterface[]> {
//     // return await getFromServer('/api/');
//     return testData.myStory;
// }

async function login({
    username,
    password,
}: {
    username: String;
    password: String;
}): Promise<StoryInterface[]> {
    console.log("login service");
    console.log(`Username : ${username}`);
    console.log(`Password : ${password}`);
    return await postToServer(apiEndpoint + "user/login", {
        username,
        password,
    });
}
