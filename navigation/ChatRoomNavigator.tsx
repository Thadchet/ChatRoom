import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import HomePage from "../screens/HomePage";
import {
    BottomTabParamList,
    TabOneParamList,
    TabTwoParamList,
    TabChatParamList,
    ChatRoomParamList,
} from "../types";

const ChatRoom = createStackNavigator<ChatRoomParamList>();

export default function ChatRoomNavigator({ route }) {
    const colorScheme = useColorScheme();
    const { name } = route.params;
    return (
        <ChatRoom.Navigator
            initialRouteName="ChatRoom2"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
        >
            <ChatRoom.Screen
                name="ChatRoom2"
                component={ChatRoomScreen}
                options={{ headerTitle: name }}
            />
        </ChatRoom.Navigator>
    );
}
