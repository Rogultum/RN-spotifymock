import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useSelector } from 'react-redux';

import ThemeScreen from '../../screen/ProfileStack/ThemeScreen/ThemeScreen';
import ProfileScreen from '../../screen/ProfileStack/ProfileScreen/ProfileScreen';
import EditProfileScreen from '../../screen/ProfileStack/EditProfileScreen/EditProfileScreen';
import { DARK_THEME } from '../../colours/spotifycolours';

const Stack = createNativeStackNavigator();

function ProfileStackNavigation() {

    const theme = useSelector((state) => state.theme.value)

    return (
        <Stack.Navigator screenOptions={{ headerTintColor: theme ? 'black' : 'white', headerStyle: { backgroundColor: theme ? 'white' : DARK_THEME } }} >
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name='EditProfile' component={EditProfileScreen} />
            <Stack.Screen name='Theme' component={ThemeScreen} />
        </Stack.Navigator>
    )
}

export default ProfileStackNavigation;
