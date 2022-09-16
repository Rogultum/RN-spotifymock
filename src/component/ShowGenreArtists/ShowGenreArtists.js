/* eslint-disable react/destructuring-assignment */
import { View, Text } from 'react-native'
import React from 'react'

import styles from './ShowGenreArtists.style'

function ShowGenreArtists(props) {



    return (
        <View style={styles.container} >
            <Text style={styles.artist_text} >{props.artist.name}</Text>
        </View>
    )
}

export default ShowGenreArtists;
