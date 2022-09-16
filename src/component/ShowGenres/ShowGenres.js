/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
import { Pressable, Text } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'
import styles from './ShowGenres.style'

function ShowGenres(props) {

    const navigation = useNavigation();

    const handlePressGenre = () => {
        const genreId = props.genres.id
        const { name } = props.genres
        navigation.navigate('GenreLists', { genreId, name })
    }

    return (
        <Pressable onPress={handlePressGenre} style={styles.container} >
            <Text style={styles.genre_text} >{props.genres.name}</Text>
        </Pressable>
    )
}

export default ShowGenres
