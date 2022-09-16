/* eslint-disable react/destructuring-assignment */
import { View, Text } from 'react-native'
import React from 'react'

import { useSelector } from 'react-redux';
import styles from './ShowMusics.style'
import { DARK_THEME, SPOTIFY_BLACK } from '../../colours/spotifycolours';

function ShowMusics(props) {

    const theme = useSelector((state) => state.theme.value)

    return (
        <View style={[styles.container, { backgroundColor: theme ? 'white' : DARK_THEME }]}>
            <Text style={{ color: theme ? SPOTIFY_BLACK : 'white' }}>{props.index + 1}{' )'}</Text>
            <Text style={styles.track_text}>{props.track.strTrack}</Text>
            {/* convert milisecs to minutes */}
            <Text style={[styles.track_length, { color: theme ? SPOTIFY_BLACK : 'white' }]}>{((props.track.intDuration) / (1000 * 60)).toFixed(2)}{"'"}</Text>
        </View>
    )
}

export default ShowMusics;
