import * as React from "react";
import { StyleSheet, FlatList, Image, TouchableHighlight } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

const ListData = () => {
    return [
        { key: "Devin" },
        { key: "Dan" },
        { key: "Dominic" },
        { key: "Jackson" },
        { key: "James" },
        { key: "Joel" },
        { key: "John" },
        { key: "Jillian" },
        { key: "Jimmy" },
        { key: "Julie" },
    ];
};

export default function ChatScreen({ navigation }) {
    const [list, setList] = React.useState([]);

    React.useEffect(() => {
        setList(ListData);
    }, []);

    const onChatPress = (item) => {
        console.log(item);
        navigation.navigate("ChatRoom", { name: item });
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerChat}>
                <FlatList
                    data={list}
                    renderItem={({ item, separators }) => (
                        <TouchableHighlight
                            key={item.key}
                            onPress={() => onChatPress(item.key)}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}
                        >
                            <View style={styles.item}>
                                <Image
                                    source={{
                                        uri:
                                            "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
                                    }}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        margin: 10,
                                        borderRadius: 200 / 2,
                                    }}
                                />
                                <View style={styles.subItem}>
                                    <Text style={styles.title}>{item.key}</Text>
                                    <Text
                                        style={styles.subtitle}
                                    >{`Hello worldddffdfdfdfdfdfd`}</Text>
                                </View>
                                <Text style={styles.time}>{`16:28`}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 14,
        color: "#727070",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    containerChat: {
        fontSize: 18,
        fontWeight: "bold",
    },
    item: {
        flex: 1,
        padding: 10,
        flexDirection: "row",
        width: "100%",
    },
    subItem: {
        flex: 1,
        margin: 10,
        flexDirection: "column",
        
    },
    time: {
        padding: 10,
        fontSize: 12,
        color: "#727070",
    },
});
