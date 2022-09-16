/* eslint-disable react/destructuring-assignment */
import { View, Text, Linking } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux'

import { SPOTIFY_BLACK } from '../../colours/spotifycolours';
import styles from './ShowTracks.style'

function ShowTracks(props) {

    const theme = useSelector((state) => state.theme.value);

    return (
        <View style={styles.container}>
            <Text style={[styles.track_text, { color: theme ? SPOTIFY_BLACK : 'white' }]} >{props.tracks.strTrack}</Text>
            <Text style={[styles.link_text,]} onPress={() => Linking.openURL(props.tracks.strMusicVid)} >listen on youtube.</Text>
        </View>
    )
}

export default ShowTracks;
