/* eslint-disable react/destructuring-assignment */
import { View, Text } from 'react-native'
import React from 'react'


function SearchResults(props) {


    return (
        <View>
            <Text>{props.text.strArtist}</Text>
        </View>
    )
}

export default SearchResults