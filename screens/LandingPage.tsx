import * as React from "react";
import { StyleSheet, TextInput } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function LandingPage({ isLogin, setIsLogin }) {
    if (isLogin) {
        console.log("Logined");
    }
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onLoginPrees = () => {
        setIsLogin(true);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <View style={{ padding: 30, width: "100%" }}>
                <Input
                    label={"Username"}
                    // placeholder="Username"
                    // leftIcon={{ type: "font-awesome", name: "comment" }}
                    onChangeText={(value) => setUsername(value)}
                />
                {/* <Input
                    label={"Password"}
                    // placeholder="Password"
                    // leftIcon={{ type: "font-awesome", name: "comment" }}
                    onChangeText={(value) => this.setState({ comment: value })}
                /> */}
            </View>
            <Button
                style={{ width: 250 }}
                title="Login"
                type="solid"
                onPress={onLoginPrees}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        
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
