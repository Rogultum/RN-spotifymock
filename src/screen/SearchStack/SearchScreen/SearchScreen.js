/* eslint-disable react-hooks/exhaustive-deps */
import { View, FlatList, Text } from 'react-native'
import React, { useEffect, useState } from 'react'


import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios';
import ShowGenres from '../../../component/ShowGenres/ShowGenres';
import { fetchGenres } from '../../../redux/slice/genresSlice';
import Input from '../../../component/Input'
import styles from './SearchScreen.style'
import { DARK_THEME } from '../../../colours/spotifycolours'
import SignButton from '../../../component/Button/SignButton'
import ShowSearched from '../../../component/ShowSearched/ShowSearched';


let renderListValue = true;
function SearchScreen() {

    const theme = useSelector((state) => state.theme.value)

    const [searchedText, setSearchedText] = useState();
    const [searchList, setSearchList] = useState();

    const getSearchedText = async () => {
        axios.get(`https://www.theaudiodb.com/api/v1/json/2/search.php?s={searchedText}`).then((result) => {
            setSearchList(result.data.artists);
            console.log(searchList);
        })
    }

    const renderSearch = ({ item }) => <ShowSearched text={item} />

    const genresList = useSelector((state) => state.genres.items);

    const renderGenres = ({ item }) => <ShowGenres genres={item} />

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch])



    const changeValue = () => {
        renderListValue = !renderListValue
    }

    useEffect(() => {
        dispatch(fetchGenres());
    }, [changeValue])

    return (

        <View style={[styles.container, { flex: 1, backgroundColor: theme ? 'white' : DARK_THEME }]} >
            <Input placeholder='Search...' onFocus={changeValue} onBlur={changeValue} onChangeText={setSearchedText} />
            <View>
                {renderListValue ? (<FlatList style={styles.flatlist} data={genresList} numColumns={2} keyExtractor={(item) => item.id} renderItem={renderGenres} showsVerticalScrollIndicator={false} />) : (
                    <View>
                        <SignButton title="Search" onPress={getSearchedText} />
                        <FlatList data={searchList} keyExtractor={(item) => item.id} renderItem={renderSearch} />
                    </View>

                )

                }
            </View>
        </View >

    )
}

export default SearchScreen
