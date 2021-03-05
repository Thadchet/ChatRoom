import { apiEndpoint } from "./../constants/config";
import axios from "axios";

// Ping
export const PingApi = () => {
    axios
        .get(apiEndpoint + "user/ping")
        .then((res) => console.log(res.data)) // redirect to login on successful register
        .catch((err) => {
            console.log(err);
        });
};

// Login
export const LoginApi = async (userBody) => {
    // console.log(userBody);
    const status = await axios
        .post(apiEndpoint + "user/login", userBody)
        .then((res) => {
            // console.log(res.data);
            return 200;
        })
        .catch((err) => {
            console.log(err);
            return 500;
        });
    return status;
};
