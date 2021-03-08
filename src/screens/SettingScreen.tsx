import * as React from "react";
import {
    StyleSheet,
    Image,
    FlatList,
    TouchableHighlight,
    Modal,
    Pressable,
    RefreshControl,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { Icon } from "react-native-elements";
import { Text, View } from "../components/Themed";
import { FoundUser } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/user.actions";
import { RootState } from "../redux/reducers";
import { getSession, isSessionExpire } from "../lib/session";
import _ from "lodash";

export default function SettingScreen({ navigation }) {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Button
                style={{ width: 250, alignSelf: "center" }}
                title="Logout"
                type="solid"
                onPress={() => {
                    dispatch(logout());
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 20,
        height: 1,
        width: "100%",
    },
    Profile: {
        flex: 1,
        flexDirection: "row",
        padding: 5,
    },
});
