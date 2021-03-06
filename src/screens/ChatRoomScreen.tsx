import * as React from "react";
import { StyleSheet, FlatList, Image, TouchableHighlight } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Input, Button } from "react-native-elements";
import { GiftedChat } from "react-native-gifted-chat";

export default function ChatRoomScreen({ route, navigation }) {
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
                _id: 2,
                name: "Test User",
            },
        },
    ]);

    const handleSend = (newMessage) => {
        setMessages(GiftedChat.append(messages, newMessage));
    };
    return (
        <GiftedChat
            messages={messages}
            onSend={(newMessage) => handleSend(newMessage)}
            user={{ _id: 1 }}
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
