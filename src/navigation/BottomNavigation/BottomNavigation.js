/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unstable-nested-components */
import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import HomeStackNavigation from "../HomeStackNavigation/HomeStackNavigation";
import ProfileStackNavigation from "../ProfileStackNavigation/ProfileStackNavigation";
import SearchStackNavigation from "../SearchStackNavigation/SearchStackNavigation";


const Tab = createMaterialBottomTabNavigator()

function BottomNavigation() {

    const theme = useSelector((state) => state.theme.value);

    return (
        <Tab.Navigator activeColor="#1DB954" barStyle={{ backgroundColor: theme ? 'white' : '#121212' }} >
            <Tab.Screen name="HomeStack" component={HomeStackNavigation} options={{
                tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} />
            <Tab.Screen name="SearchStack" component={SearchStackNavigation} options={{
                tabBarLabel: 'Search', tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="magnify" color={color} size={26} />
                )
            }} />
            <Tab.Screen name="ProfileStack" component={ProfileStackNavigation} options={{
                tabBarLabel: 'Profile', tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                )
            }} />
        </Tab.Navigator>
    )
}

export default BottomNavigation;
