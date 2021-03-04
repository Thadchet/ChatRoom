import * as Linking from "expo-linking";

export default {
    prefixes: [Linking.makeUrl("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    Main: {
                        screens: {
                            HomePage: "123",
                        },
                    },
                    Chat: {
                        screens: {
                            ChatScreen: "one",
                        },
                    },
                    TabTwo: {
                        screens: {
                            TabTwoScreen: "two",
                        },
                    },
                },
            },
            NotFound: "*",
        },
    },
};
