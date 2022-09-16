import { StyleSheet } from "react-native";

import { SPOTIFY_GREEN } from "../../colours/spotifycolours";

export default StyleSheet.create({
    container: {
        padding: 4,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderRadius: 18,
        borderColor: SPOTIFY_GREEN,
        width: 300,
        height: 50,
    },
    artist_text: {
        color: SPOTIFY_GREEN,
        fontSize: 15,
        fontWeight: '600'
    }
})
