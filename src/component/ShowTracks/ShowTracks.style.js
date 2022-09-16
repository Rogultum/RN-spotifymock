import { StyleSheet } from "react-native"
import { SPOTIFY_GREEN } from "../../colours/spotifycolours"

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    track_text: {
        fontWeight: '500'
    },
    link_text: {
        fontStyle: 'italic',
        padding: 7,
        color: SPOTIFY_GREEN,
    }
})
