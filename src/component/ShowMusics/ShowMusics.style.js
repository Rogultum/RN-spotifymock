import { StyleSheet } from "react-native"

import { SPOTIFY_GREEN } from "../../colours/spotifycolours"

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 12,
        alignItems: 'center'
    },
    track_text: {
        fontWeight: '400',
        color: SPOTIFY_GREEN,
        fontSize: 18,

    },
    track_length: {
        fontSize: 24,
        fontWeight: '300',
        color: SPOTIFY_GREEN,

    }
})
