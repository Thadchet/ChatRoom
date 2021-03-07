import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";
import { Input, Button } from "react-native-elements";

export default function FoundUser({ username, Profile }) {
    return (
        <View>
            <View style={styles.container}>
                <Image
                    source={{
                        uri:
                            "https://chatroom-bosskung.s3-ap-southeast-1.amazonaws.com/user-profile/0fb.jpg",
                    }}
                    style={{
                        width: 150,
                        height: 150,
                        margin: 10,
                        borderRadius: 200 / 2,
                    }}
                />
                <Text
                    style={styles.usernameTitle}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"
                >
                    {username}
                </Text>
                <Button
                    buttonStyle={{
                        backgroundColor: "green",
                    }}
                    style={{ width: 250, margin: 5 , marginBottom : 50 }}
                    title="Add"
                    type="solid"
                    onPress={() => {
                        // dispatch(getUser());
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    usernameTitle: {
        fontSize: 25,
        margin: 5,
        textAlign: "center",
        fontWeight: "bold",
    },
});
