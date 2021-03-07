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
import { Text, View } from "../components/Themed";
import { FoundUser } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
    getUser,
    login,
    findUser,
    getFriends,
} from "../redux/actions/user.actions";
import { createChat, getAllChat } from "../redux/actions/chat.actions";
import { RootState } from "../redux/reducers";
import { setSession, getSession, isSessionExpire } from "../lib/session";
import _ from "lodash";

export default function HomePage({ navigation }) {
    const [profile, setProfile] = React.useState([{ key: "bosskung" }]);
    const [friends, setFriends] = React.useState(["A", "B", "C"]);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalAddVisible, setModalAddVisible] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState("");
    const [selectedID, setSelectedID] = React.useState("");
    const [findUserInput, setFindUserInput] = React.useState("");

    const dispatch = useDispatch();
    const {
        username,
        status,
        token,
        findUsername,
        findUserProfile,
        isFoundUser,
        friendList,
    } = useSelector((state: RootState) => state.user);
    const { chatRoomList } = useSelector((state: RootState) => state.chat);

    React.useEffect(() => {
        dispatch(getUser());
        dispatch(getFriends());
        dispatch(getAllChat());
    }, []);

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

    const checkRoom = () => {
        return _.includes(_.map(chatRoomList, "RoomName"), selectedUser);
    };
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
                            {isFoundUser && (
                                <FoundUser
                                    username={findUsername}
                                    profile={findUserProfile}
                                />
                            )}
                            <Input
                                label={"Username"}
                                onChangeText={(value) =>
                                    setFindUserInput(value)
                                }
                            />

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    dispatch(
                                        findUser({ username: findUserInput })
                                    );
                                }}
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
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => console.log(isFoundUser)}
                            >
                                <Text style={styles.textStyle}>Check</Text>
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
                        <View
                            style={{
                                alignItems: "center",
                            }}
                        >
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
                                    setModalVisible(!modalVisible);
                                    if (!checkRoom()) {
                                        dispatch(
                                            createChat({
                                                memberID: selectedID,
                                                memberName: selectedUser,
                                            })
                                        );
                                        navigation.navigate("ChatRoom", {
                                            name: selectedUser,
                                        });
                                    } else {
                                        navigation.navigate("ChatRoom", {
                                            name: selectedUser,
                                        });
                                    }
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
    const onFriendPress = (name, ID) => {
        setSelectedUser(name);
        setSelectedID(ID);
        setModalVisible(true);
    };
    const renderFriend = (friend) => {
        return (
            <TouchableHighlight
                key={friend.ID}
                onPress={() => onFriendPress(friend.Username, friend.ID)}
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
                        <Text style={styles.title}>{friend.Username}</Text>
                        <Text
                            style={styles.subtitle}
                        >{`Status : ${friend.Status}`}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };
    return (
        <View style={styles.container}>
            <View>
                <Text>{getSession().token}</Text>
                <Button
                    style={{ width: 250 }}
                    title="Login"
                    type="solid"
                    onPress={() =>
                        dispatch(
                            login({ username: "User1", password: "12345" })
                        )
                    }
                />
                <Button
                    style={{ width: 250 }}
                    title="Get Friend"
                    type="solid"
                    onPress={() => {
                        console.log(friendList);
                        dispatch(getFriends());
                    }}
                />
                <Button
                    style={{ width: 250 }}
                    title="Get Chat"
                    type="solid"
                    onPress={() => {
                        dispatch(getAllChat());
                        console.log(chatRoomList);
                    }}
                />
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
                    data={friendList}
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
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        width: 200,
        margin: 10,
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
