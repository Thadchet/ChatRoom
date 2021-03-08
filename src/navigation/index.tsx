import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import LoginNavigator from "./LoginNavigator";
import ChatRoomNavigator from "./ChatRoomNavigator";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import LandingPage from "../screens/LandingPage";
import { getSession, isSessionExpire } from "../lib/session";
import { useSelector, useDispatch } from "react-redux";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    const { isLogin } = useSelector((state: RootState) => state.user);
    React.useEffect(() => {
        console.log("Check Login");
    }, [isLogin]);
    return (
        <NavigationContainer
            // linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            {isLogin ? <RootNavigator /> : <LoginNavigator />}
        </NavigationContainer>
    );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen
                name="ChatRoom"
                component={ChatRoomNavigator}
                options={{ headerTitle: "Chat Room" }}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
        </Stack.Navigator>
    );
}
