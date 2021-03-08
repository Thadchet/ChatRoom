import * as React from "react";
import {
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    Keyboard,
} from "react-native";

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

export default function LandingPage({ navigation }) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    const onLoginPress = () => {
        dispatch(login({ username, password }));
    };

    const onRegisterPress = () => {
        navigation.navigate("Register");
    };
    const { isLogin } = useSelector((state: RootState) => state.user);

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <View>
                    <Text style={styles.title}>Login Page</Text>
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
                    <View style={{ alignItems: "center" }}>
                        <Button
                            style={styles.Button}
                            title="Login"
                            type="solid"
                            onPress={() => onLoginPress()}
                        />
                        <Button
                            style={styles.Button}
                            title="Register"
                            type="solid"
                            onPress={() => onRegisterPress()}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
        alignSelf: "center",
    },
    Button: {
        width: 250,
        marginTop: 10,
    },
});
