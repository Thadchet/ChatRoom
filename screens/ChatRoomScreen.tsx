import * as React from "react";
import { StyleSheet, FlatList, Image, TouchableHighlight } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Input, Button } from "react-native-elements";

export default function ChatRoomScreen({ route, navigation }) {
    // const { name } = route.params;

    return (
        <View style={styles.container}>
            <View style={{ padding: 30, width: "100%" }}>
                <Input
                    label={"Username"}
                    // placeholder="Username"
                    // leftIcon={{ type: "font-awesome", name: "comment" }}
                />
            </View>
            <Button style={{ width: 250 }} title="Login" type="solid" />
        </View>
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
