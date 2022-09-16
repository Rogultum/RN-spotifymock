/* eslint-disable react/destructuring-assignment */
import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

import styles from './ShowAlbums.style'

function ShowAlbums(props) {

    const navigation = useNavigation();

    const handlePressAlbum = () => {
        const albumId = props.albums.idAlbum
        navigation.navigate('Playlist', { albumId })
    }

    return (
        <Pressable onPress={handlePressAlbum}>
            <View style={styles.container} >
                <Text style={styles.album_title} numberOfLines={7} ellipsizeMode='tail'>{props.albums.strAlbum}</Text>
                <Image style={styles.album_image}
                    source={{
                        uri: props.albums.strAlbumThumb,
                    }} />
            </View>
        </Pressable>
    )
}

export default ShowAlbums;
