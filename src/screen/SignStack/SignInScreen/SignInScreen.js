import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, Text, Pressable } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { useSelector } from 'react-redux';

import SignButton from '../../../component/Button/SignButton'
import Input from '../../../component/Input';
import styles from './SignInScreen.style';
import { auth } from '../../../../firebase/firebase';

function SignIn() {

  const theme = useSelector((state) => state.theme.value);

  const [userPassword, setUserPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [userMail, setUserMail] = useState(null);

  const navigation = useNavigation();

  let count = 0;
  const handleSignIn = async () => {
    const userData = await AsyncStorage.getItem('user');
    const user = JSON.parse(userData);
    if (user.username !== username) {
      return Alert.alert('Username not found!');
    }
    if (user.mail !== userMail) {
      return Alert.alert('E-mail not found!');
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

    signInWithEmailAndPassword(auth, userMail, userPassword)

    if (user.username === username && user.password === userPassword)
      return navigation.navigate('BottomNavigation');

    return null;
  };

  const navigateSignUp = () => {
    navigation.navigate('SignUp')
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme ? 'white' : '#121212' }]}>
      <ScrollView>
        <Input label="Type your username" placeholder="username" onChangeText={setUsername} />
        <Input label="Type your Email" placeholder="Email" onChangeText={setUserMail} />
        <Input
          label="Type your password"
          secureTextEntry
          placeholder="*****"
          onChangeText={setUserPassword}
        />
        <Pressable onPress={navigateSignUp} style={styles.question_container}>
          <Text style={styles.question_text}>Don&apos;t have an account?</Text>
        </Pressable>
      </ScrollView>
      <SignButton title="Sign In" onPress={handleSignIn} />
    </SafeAreaView>
  );
}

export default SignIn;
