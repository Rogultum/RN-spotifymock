import { StyleSheet } from "react-native";

import { SPOTIFY_GREEN } from '../../colours/spotifycolours'

export default StyleSheet.create({
    container: {
        padding: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    album_image: {
        height: 145,
        width: 145,
    },
    album_title: {
        fontWeight: 'bold',
        color: SPOTIFY_GREEN,
    }
})
