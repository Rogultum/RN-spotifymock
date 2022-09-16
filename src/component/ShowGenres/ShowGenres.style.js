import { StyleSheet } from "react-native";

import { SPOTIFY_GREEN } from "../../colours/spotifycolours";

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: '48%',
        padding: 7,
        margin: 4,
        borderWidth: 0.7,
        borderColor: SPOTIFY_GREEN,
        backgroundColor: SPOTIFY_GREEN,
    },
    genre_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    }
})
