import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, Text, View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import SignButton from '../../../component/Button/SignButton'
import Input from '../../../component/Input';
import styles from './SignInScreen.style';

function SignIn() {

  const theme = useSelector((state) => state.theme.value);

  const [userPassword, setUserPassword] = useState(null);
  const [username, setUsername] = useState(null);

  const navigation = useNavigation();

  let count = 0;
  const handleSignIn = async () => {
    const userData = await AsyncStorage.getItem('user');
    const user = JSON.parse(userData);
    if (user.username !== username) {
      return Alert.alert('Username not found!');
    }
    if (user.password !== userPassword) {
      count += 1;
      if (count >= 3) {
        return Alert.alert('Do you want to reset your password?');
      }
      return Alert.alert('Your Password is wrong!');
    }
    if (count >= 3) {
      return Alert.alert('Do you want to reset your password?');
    }
    if (user.username === username && user.password === userPassword)
      return navigation.navigate('BottomNavigation');

    return null;
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme ? 'white' : '#121212' }]}>
      <ScrollView>
        <Input label="Type your username" placeholder="username" onChangeText={setUsername} />
        <Input
          label="Type your password"
          secureTextEntry
          placeholder="*****"
          onChangeText={setUserPassword}
        />
        <View style={styles.question_container}>
          <Text style={styles.question_text}>Don&apos;t have an account?</Text>
        </View>
      </ScrollView>
      <SignButton title="Sign In" onPress={handleSignIn} />
    </SafeAreaView>
  );
}

export default SignIn;
