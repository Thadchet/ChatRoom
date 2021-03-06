import { StatusBar } from "expo-status-bar";
import React, { useState, useMemo } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import LandingPage from "./src/screens/LandingPage";

import { Provider } from "react-redux";
import { store } from "./src/redux";
export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <SafeAreaProvider>
                    <Navigation colorScheme={colorScheme} />

                    <StatusBar />
                </SafeAreaProvider>
            </Provider>
        );
    }
}
