/* eslint-disable react-hooks/exhaustive-deps */

import { View, FlatList, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux';

import ShowTracks from '../../../component/ShowTracks';
import ShowAlbums from '../../../component/ShowAlbums/ShowAlbums';
import { DARK_THEME, SPOTIFY_BLACK } from '../../../colours/spotifycolours';
import { fetchTracks } from '../../../redux/slice/tracksSlice';

import styles from './HomeScreen.style'


function HomeScreen() {

    useEffect(() => {
        getAlbums()
    }, [])

    const theme = useSelector((state) => state.theme.value)

    const tracksList = useSelector((state) => state.tracks.items);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTracks());
    }, [dispatch]);

    const [albumsList, setAlbumList] = useState();

    const options = {
        method: 'GET',
        url: 'https://theaudiodb.com/api/v1/json/2/album.php?',
        params: { i: '112024' },
        headers: {}
    };

    const getAlbums = () => {
        axios.request(options).then((response) => {
            // needs only 6 items thus the slice method.
            setAlbumList(response.data.album.slice(0, 6))
        })
    }

    const renderTracks = ({ item }) => <ShowTracks tracks={item} />
    const renderAlbums = ({ item }) => <ShowAlbums albums={item} />

    return (
        <View style={{ flex: 1, backgroundColor: theme ? 'white' : DARK_THEME }}>
            {/* could also be done with map method, left here for future reference */}
            {/* {albumsList ? albumsList.map((item) => <ShowAlbums albums={item} />) : <Text>Loading</Text>} */}
            <View>
                <FlatList horizontal data={albumsList} keyExtractor={(item) => (item.idAlbum)} renderItem={renderAlbums} />
            </View>

            <View style={styles.inner_container}>
                <Text style={styles.artist_text}>TheW</Text>
                <Text style={[styles.artist_text, { color: theme ? SPOTIFY_BLACK : 'white' }]}>eeknd</Text>
            </View>

            <View>
                <FlatList data={tracksList} keyExtractor={(item) => (item.idTrack)} renderItem={renderTracks} />
            </View>
        </View>
    )
}

export default HomeScreen
