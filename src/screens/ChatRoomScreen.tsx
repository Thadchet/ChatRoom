import * as React from "react";
import { StyleSheet, FlatList, Image, TouchableHighlight } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Input, Button } from "react-native-elements";
import { GiftedChat } from "react-native-gifted-chat";
import { useSelector, useDispatch } from "react-redux";

export default function ChatRoomScreen({ route, navigation }) {
    const { roomID } = route.params;
    const dispatch = useDispatch();
    const { messageList } = useSelector((state: RootState) => state.chat);
    const { userID } = useSelector((state: RootState) => state.user);
    const [messages, setMessages] = React.useState([
        {
            _id: 0,
            text: "New room created.",
            createdAt: new Date().getTime(),
            system: true,
        },
        // example of chat message
        {
            _id: 1,
            text: "Henlo!",
            createdAt: new Date().getTime(),
            user: {
                _id: 1,
                name: "Test User",
            },
        },
        {
            _id: 2,
            text: "Henlo!",
            createdAt: new Date().getTime(),
            user: {
                _id: 2,
                name: "Test User",
            },
        },
        {
            _id: 3,
            text: "Henlo!",
            createdAt: new Date().getTime(),
            user: {
                _id: 1,
                name: "My",
            },
        },
    ]);

    const handleSend = (newMessage) => {
        setMessages(GiftedChat.append(messages, newMessage));
    };
    return (
        <GiftedChat
            messages={messageList}
            onSend={(newMessage) => handleSend(newMessage)}
            user={{ _id: parseInt(userID) }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
