import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { changeTheme } from '../../../redux/slice/themeSlice'
import styles from './ThemeScreen.style';

function ThemeScreen() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        dispatch(changeTheme());
    };
    const theme = useSelector((state) => state.theme.value);

    const dispatch = useDispatch();

    return (
        <View style={[styles.container, { backgroundColor: theme ? 'white' : '#121212' }]}>
            <Switch
                trackColor={{ false: '#1DB954', true: '#f4f3f4' }}
                thumbColor={isEnabled ? '#1DB954' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <Text style={[styles.text, { color: theme ? 'black' : 'white' }]}>{theme ? 'LIGHT SABER' : 'DARK VADER'}</Text>
        </View>
    );
}

export default ThemeScreen;
