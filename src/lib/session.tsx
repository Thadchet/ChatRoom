import AsyncStorage from "@react-native-community/async-storage";
// import geolocation from '@react-native-community/geolocation';
import { SESSION_LIFETIME } from "../constants/config";
// import NavigationService from './NavigationService';

export const AUTHEN_SESSION = "AuthenSession";
var _session = {};
let _timestamp = new Date().getTime();

export const clearSession = () => {
    setSession({});
};

export const authorized = () => {
    return _session && _session.userID && _session.userID != "";
};

export const setSession = (data) => {
    _session = data;
    _timestamp = new Date().getTime();
    // AsyncStorage.setItem(AUTHEN_SESSION, JSON.stringify(data));
};

export const getSession = () => {
    // return AsyncStorage.getItem(AUTHEN_SESSION);

    return _session;
};

export const initSession = async () => {
    try {
        _timestamp = new Date();
    } catch (error) {
        console.log("!!!!! workInitSession Error !!!!!! \n", error);
    }
};

export const isSessionExpire = () => {
    if (SESSION_LIFETIME == 0) {
        return false;
    }
    const now = new Date().getTime();
    return now > _timestamp + SESSION_LIFETIME * 1000;
};

export const checkSessionLife = () => {
    if (SESSION_LIFETIME == 0) {
        return;
    }
    const now = new Date().getTime();
    // console.log('sleep:', _timestamp, '\nawake:', now)
    if (now > _timestamp + SESSION_LIFETIME * 1000) {
        NavigationService.resetTo(HOMEPAGE);
    }
    _timestamp = now;
};
