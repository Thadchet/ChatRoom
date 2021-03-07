import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    createStackNavigator,
    HeaderBackButton,
} from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import LandingPage from "../screens/LandingPage";
import RegisterScreen from "../screens/RegisterScreen";
import HomePage from "../screens/HomePage";
import {
    BottomTabParamList,
    TabOneParamList,
    TabTwoParamList,
    TabChatParamList,
} from "../../types";
import { Icon } from "react-native-elements";

const Login = createStackNavigator<ChatRoomParamList>();

export default function LoginNavigator() {
    const colorScheme = useColorScheme();

    return (
        <Login.Navigator
        // initialRouteName="TabOne"
        // tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
        >
            <Login.Screen
                name="Login"
                component={LandingPage}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-code" color={color} />
                    ),
                }}
            />
            <Login.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-code" color={color} />
                    ),
                }}
            />
        </Login.Navigator>
    );
}
