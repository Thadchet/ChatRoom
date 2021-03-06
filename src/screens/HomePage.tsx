import * as React from "react";
import {
    StyleSheet,
    Image,
    FlatList,
    TouchableHighlight,
    Modal,
    Pressable,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { Icon } from "react-native-elements";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { PingApi } from "../api/userApi";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../redux/reducers";

export default function HomePage({ navigation }) {
    const [profile, setProfile] = React.useState([{ key: "bosskung" }]);
    // const [status, setStatus] = React.useState("Eiei");
    const [friends, setFriends] = React.useState(["A", "B", "C"]);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalAddVisible, setModalAddVisible] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState("");
    const [findUser, setFindUser] = React.useState("");

    const dispatch = useDispatch();
    const { username, status, token } = useSelector(
        (state: RootState) => state.user
    );

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Icon
                    style={{ paddindRight: 30, marginRight: 15 }}
                    brand={false}
                    name="add-circle-outline"
                    type="ionicons"
                    size="25"
                    onPress={() => setModalAddVisible(true)}
                />
            ),
        });
    }, [navigation]);

    const renderModalAdd = () => {
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalAddVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalAddVisible(!modalAddVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Input
                                label={"Username"}
                                // placeholder="Username"
                                // leftIcon={{ type: "font-awesome", name: "comment" }}
                                onChangeText={(value) => setFindUser(value)}
                            />

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() =>
                                    setModalAddVisible(!modalAddVisible)
                                }
                            >
                                <Text style={styles.textStyle}>Find</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() =>
                                    setModalAddVisible(!modalAddVisible)
                                }
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    };

    const renderModal = () => {
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View>
                            <Image
                                source={{
                                    uri:
                                        "https://chatroom-bosskung.s3-ap-southeast-1.amazonaws.com/user-profile/da9e29d3eca1d8df0a8e6ad402b875fb.jpg",
                                }}
                                style={{
                                    width: 100,
                                    height: 100,
                                    margin: 10,
                                    borderRadius: 200 / 2,
                                }}
                            />
                            <Text
                                style={styles.modalText}
                            >{`${selectedUser}`}</Text>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    PingApi();
                                    setModalVisible(!modalVisible);
                                    // navigation.navigate("ChatRoom", {
                                    //     name: selectedUser,
                                    // });
                                }}
                            >
                                <Icon name="chat" type="material" size="50" />
                                <Text style={styles.textStyle}>Chat</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    };
    const onFriendPress = (friend) => {
        setSelectedUser(friend);
        setModalVisible(true);
    };
    const renderFriend = (friend) => {
        return (
            <TouchableHighlight
                key={friends}
                onPress={() => onFriendPress(friend)}
            >
                <View style={styles.Profile}>
                    <Image
                        source={{
                            uri:
                                "https://chatroom-bosskung.s3-ap-southeast-1.amazonaws.com/user-profile/da9e29d3eca1d8df0a8e6ad402b875fb.jpg",
                        }}
                        style={{
                            width: 50,
                            height: 50,
                            margin: 10,
                            borderRadius: 200 / 2,
                        }}
                    />
                    <View style={styles.subProfile}>
                        <Text style={styles.title}>{friend}</Text>
                        <Text
                            style={styles.subtitle}
                        >{`Status : ${status}`}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={profile}
                    renderItem={({ item, separators }) => (
                        <View style={styles.Profile}>
                            <Image
                                source={{
                                    uri:
                                        "https://chatroom-bosskung.s3-ap-southeast-1.amazonaws.com/user-profile/0fb.jpg",
                                }}
                                style={{
                                    width: 50,
                                    height: 50,
                                    margin: 10,
                                    borderRadius: 200 / 2,
                                }}
                            />
                            <View style={styles.subProfile}>
                                <Text style={styles.title}>{username}</Text>
                                <Text
                                    style={styles.subtitle}
                                >{`Status : ${status}`}</Text>
                            </View>
                        </View>
                    )}
                />
                <View
                    style={styles.separator}
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 20,
                    }}
                >
                    <Text style={styles.title}>{`Friend`}</Text>
                    <Text style={styles.title}>{friends.length}</Text>
                </View>
                <FlatList
                    data={friends}
                    renderItem={({ item }) => renderFriend(item)}
                />
                {renderModal()}
                {renderModalAdd()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
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
    subProfile: {
        padding: 10,
        // justifyContent : "center",
        flex: 1,
        flexDirection: "column",
        // backgroundColor: "#E13FFF",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        // backgroundColor: "#E2884F",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        width: "60%",
        shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        fontSize: 30,
        textAlign: "center",
    },
});
