import { Text, Pressable } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux';

import styles from './ProfileButton.style'

import { SPOTIFY_BLACK } from '../../../colours/spotifycolours'

function ProfileButton({ title, onPress }) {

    const theme = useSelector((state) => state.theme.value);

    return (
        <Pressable style={[styles.button_container,]} onPress={onPress}>
            <Text style={[styles.button_text, { color: theme ? SPOTIFY_BLACK : 'white' }]}>{title}</Text>
        </Pressable>
    )
}

export default ProfileButton;
