import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useSelector } from "react-redux";

import HomeScreen from "../../screen/HomeStack/HomeScreen/HomeScreen";
import PlaylistScreen from "../../screen/HomeStack/PlaylistScreen/PlaylistScreen";
import { DARK_THEME } from "../../colours/spotifycolours";

const Stack = createNativeStackNavigator();

function HomeStackNavigation() {

    const theme = useSelector((state) => state.theme.value)

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTintColor: theme ? 'black' : 'white', headerStyle: { backgroundColor: theme ? 'white' : DARK_THEME } }}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Playlist' component={PlaylistScreen} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigation;
