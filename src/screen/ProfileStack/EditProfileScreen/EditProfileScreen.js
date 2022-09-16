import { View } from 'react-native'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { setSignUpForm } from '../../../redux/slice/userSlice';
import SignButton from '../../../component/Button/SignButton'
import Input from '../../../component/Input'
import styles from './EditProfileScreen.style'

import { DARK_THEME } from '../../../colours/spotifycolours'


function EditProfileScreen() {

    const dispatch = useDispatch()

    const { username, password } = useSelector((state) => state.user.value)

    const theme = useSelector((state) => state.theme.value)

    const handleUpdate = async () => {
        await AsyncStorage.mergeItem('user', JSON.stringify({ username }));
        await AsyncStorage.mergeItem('user', JSON.stringify({ password }));
    }

    return (
        <View style={[styles.container, { backgroundColor: theme ? 'white' : DARK_THEME }]} >
            <Input label='Change Username'
                value={username} onChangeText={(text) => {
                    dispatch(setSignUpForm({ username: text }))
                }} />
            <Input label='Change Password' value={password} onChangeText={(text) => {
                dispatch(setSignUpForm({ password: text }))
            }} />
            <SignButton title='Update Profile' onPress={handleUpdate} />
        </View>
    )
}

export default EditProfileScreen