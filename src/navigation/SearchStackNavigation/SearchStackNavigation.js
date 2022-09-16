import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react'

import { useSelector } from 'react-redux';

import { DARK_THEME } from '../../colours/spotifycolours';

import GenreListsScreen from '../../screen/SearchStack/GenreListsScreen/GenreListsScreen'
import SearchScreen from '../../screen/SearchStack/SearchScreen/SearchScreen'

const Stack = createNativeStackNavigator();

function SearchStackNavigation() {

    const theme = useSelector((state) => state.theme.value)

    return (
        <Stack.Navigator screenOptions={{ headerTintColor: theme ? 'black' : 'white', headerStyle: { backgroundColor: theme ? 'white' : DARK_THEME } }}>
            <Stack.Screen name='Search' component={SearchScreen} />
            <Stack.Screen name='GenreLists' component={GenreListsScreen} options={({ route }) => ({ title: route.params.name })} />
        </Stack.Navigator>
    )
}

export default SearchStackNavigation;
