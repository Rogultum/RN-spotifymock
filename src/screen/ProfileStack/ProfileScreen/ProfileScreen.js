/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Input from '../../../component/Input';
import styles from './ProfileScreen.style';

import { SPOTIFY_BLACK } from '../../../colours/spotifycolours';
import ProfileButton from '../../../component/Button/ProfileButton/ProfileButton';

function ProfileScreen() {

    const navigation = useNavigation();

    const theme = useSelector((state) => state.theme.value);

    useEffect(() => {
        getUser();
    }, []);

    const [userImageUrl, setUserImageUrl] = useState();
    const [user, setUser] = useState({});

    const getUser = async () => {
        const userData = await AsyncStorage.getItem('user');
        setUser(JSON.parse(userData));
    };

    useEffect(() => {
        getUser();
    }, [getUser]);

    const handleLogout = async () => {
        setUser(null);
        await AsyncStorage.removeItem('user');
        navigation.navigate('SignIn');
    };

    const navigateEditProfile = () => {
        navigation.navigate('EditProfile');
    };

    const navigateTheme = () => {
        navigation.navigate('Theme');
    };

    return (
        <View style={{ flex: 1, backgroundColor: theme ? 'white' : SPOTIFY_BLACK }}>
            <View style={styles.image_container}>
                {userImageUrl ? (
                    <Image style={styles.image} source={{ uri: userImageUrl }} />
                ) : (
                    <Input
                        label="Please provide an image URL for your profile picture."
                        placeholder="Paste only URL."
                        onChangeText={setUserImageUrl}
                    />
                )}
                <View style={styles.username_container}>
                    <Text style={{ color: theme ? 'grey' : 'white' }}>Username:</Text>
                    {user ? (
                        <Text style={{ color: theme ? 'grey' : 'white' }}>{user.username}</Text>
                    ) : (
                        <Text style={{ color: theme ? 'grey' : 'white' }} onPress={getUser}>
                            Press here to get your info!
                        </Text>
                    )}
                </View>

                <ProfileButton title='THEME' onPress={navigateTheme} />
                <ProfileButton title='EDITPROFILE' onPress={navigateEditProfile} />
                <ProfileButton title='LOGOUT' onPress={handleLogout} />

            </View>
        </View>
    );
}

export default ProfileScreen;
