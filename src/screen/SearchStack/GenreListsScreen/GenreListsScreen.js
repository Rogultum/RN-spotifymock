/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import axios from 'axios';

import { useSelector } from 'react-redux';
import styles from './GenreLists.style'
import ShowGenreArtists from '../../../component/ShowGenreArtists/ShowGenreArtists';
import { DARK_THEME } from '../../../colours/spotifycolours';

function GenreListsScreen({ route }) {

    const theme = useSelector((state) => state.theme.value);

    const { genreId } = route.params;

    const [genreList, setGenreList] = useState();

    const options = {
        method: 'GET',
        url: `http://api.napster.com/v2.2/genres/${genreId}/artists/top?apikey=ZjlkMzZmYTYtNTMwMi00ZDgzLWI5MWEtZjU4ODdlOTIzODdl&range=life `,
    }

    const getGenreList = () => {
        axios.request(options).then(response => {
            setGenreList(response.data.artists)
        })
    }

    useEffect(() => {
        getGenreList()
    }, [])

    const renderGenreArtists = ({ item }) => <ShowGenreArtists artist={item} />

    return (
        <View style={[styles.container, { backgroundColor: theme ? 'white' : DARK_THEME }]} >
            <FlatList data={genreList} keyExtractor={(item) => (item.id)} renderItem={renderGenreArtists} showsVerticalScrollIndicator={false} />
        </View>
    )
}

export default GenreListsScreen;
