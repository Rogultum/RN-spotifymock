/* eslint-disable react/destructuring-assignment */
import { View, Text } from 'react-native'
import React from 'react'

function ShowSearched(props) {
    return (
        <View>
            <Text>{props.text.name}</Text>
        </View>
    )
}

export default ShowSearched