import * as React from "react";
import { StyleSheet, TextInput } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { login, register } from "../redux/actions/user.actions";
import {
    updateStories,
    updateMyStory,
    watchStory,
} from "../redux/actions/stories.actions";
import { useSelector, useDispatch } from "react-redux";

export default function RegisterPage({ navigation }) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    
    const onRegisterPress = () => {
        dispatch(register({ username, password }));
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register Page</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <View style={{ padding: 30, width: "100%" }}>
                <Input
                    label={"Username"}
                    onChangeText={(value) => setUsername(value)}
                />
                <Input
                    label={"Password"}
                    onChangeText={(value) => setPassword(value)}
                />
            </View>
            <Button
                style={{ width: 250, marginTop: 10 }}
                title="Register"
                type="solid"
                onPress={() => onRegisterPress()}
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
