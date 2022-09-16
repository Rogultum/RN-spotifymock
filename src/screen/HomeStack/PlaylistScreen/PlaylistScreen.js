/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { useSelector } from 'react-redux'

import ShowMusics from '../../../component/ShowMusics/ShowMusics'
import styles from './Playlist.style'

import { DARK_THEME, SPOTIFY_BLACK } from '../../../colours/spotifycolours'

function PlaylistScreen({ route }) {

    useEffect(() => {
        getAlbumData()
    }, [])

    const theme = useSelector(state => state.theme.value)

    const [musicsList, setMusicsList] = useState()

    const { albumId } = route.params

    const options = {
        method: 'GET',
        url: 'https://theaudiodb.com/api/v1/json/2/track.php?',
        params: { m: albumId },
        headers: {}
    };

    const getAlbumData = () => {
        axios.request(options).then(response => {
            setMusicsList(response.data.track)
        })
    }

    const renderMusics = ({ item, index }) => <ShowMusics track={item} index={index} />

    return (
        <View style={{ flex: 1, backgroundColor: theme ? 'white' : DARK_THEME }} >
            <Text style={{ padding: 4, color: theme ? SPOTIFY_BLACK : 'white' }} >{'Album Id:'}{albumId}</Text>
            <View style={styles.upper_container}>
                <Text style={styles.upper_text}>Tracks</Text>
                <Text style={styles.upper_text}>Length</Text>
            </View>
            <FlatList data={musicsList} keyExtractor={(item) => (item.idTrack)} renderItem={renderMusics} />
        </View>
    )
}

export default PlaylistScreen
