import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import LandingPage from "./screens/LandingPage";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const [isLogin, setIsLogin] = useState(false);
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                {isLogin && <Navigation colorScheme={colorScheme} />}
                {!isLogin && (
                    <LandingPage isLogin={isLogin} setIsLogin={setIsLogin} />
                )}
                <StatusBar />
            </SafeAreaProvider>
        );
    }
}
