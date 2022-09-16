import { StyleSheet } from "react-native"

import { SPOTIFY_GREEN } from "../../../colours/spotifycolours"

export default StyleSheet.create({
    upper_container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    upper_text: {
        fontWeight: 'bold',
        color: SPOTIFY_GREEN,
    }
})