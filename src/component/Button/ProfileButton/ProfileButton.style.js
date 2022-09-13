import { StyleSheet } from "react-native"

import { SPOTIFY_GREEN } from "../../../colours/spotifycolours"

export default StyleSheet.create({
    button_container: {
        padding: 10,
        margin: 30,
        borderWidth: 1.5,
        borderRadius: 5,
        backgroundColor: SPOTIFY_GREEN,
        borderColor: SPOTIFY_GREEN,
    },
    button_text: {
        fontWeight: 'bold',
    },
})
