import { StyleSheet } from "react-native"

import { SPOTIFY_GREEN } from "../../../colours/spotifycolours"

export default StyleSheet.create({
    inner_container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    artist_text: {
        color: SPOTIFY_GREEN,
        fontWeight: 'bold',
        fontSize: 18,
    }
})