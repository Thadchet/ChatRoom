import { testData } from "../extra/testData.extra";
import { StoryInterface } from "../redux/types";
import { apiEndpoint } from "./../constants/config";
import { getFromServer, postToServer } from "./helper.services";

export const userService = {
    login,
    register,
    getUser,
    findUser,
    getFriends,
};

async function login({
    username,
    password,
}: {
    username: String;
    password: String;
}): Promise<any> {
    console.log("login service");
    console.log(`Username : ${username}`);
    console.log(`Password : ${password}`);
    return await postToServer(apiEndpoint + "auth/login", {
        username,
        password,
    });
}

async function register({
    username,
    password,
}: {
    username: String;
    password: String;
}): Promise<any> {
    console.log("register service");
    console.log(`Username : ${username}`);
    console.log(`Password : ${password}`);
    return await postToServer(apiEndpoint + "auth/register", {
        username,
        password,
    });
}

async function getUser(): Promise<any> {
    console.log("getUser service");
    return await getFromServer(apiEndpoint + "user/get-user");
}

async function findUser({ username }: { username: String }): Promise<any> {
    console.log("findUser service");
    return await postToServer(apiEndpoint + "user/find-user", { username });
}

async function getFriends(): Promise<any> {
    console.log("getFriends service");
    return await getFromServer(apiEndpoint + "user/get-friend");
}
