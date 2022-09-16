/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Alert, Pressable, SafeAreaView, ScrollView, Text } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { useDispatch, useSelector } from 'react-redux';

import { setSignUpForm } from '../../../redux/slice/userSlice';

import SignButton from '../../../component/Button/SignButton';
import Input from '../../../component/Input';

import { auth } from '../../../../firebase/firebase'

import styles from './SignUpScreen.style';


function SignUp() {

  const dispatch = useDispatch()

  const { email, password } = useSelector((state) => state.user.value)

  const theme = useSelector((state) => state.theme.value);

  const navigation = useNavigation();

  const [userMail, setUserMail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userPasswordCheck, setUserPasswordCheck] = useState(null);
  const [username, setUsername] = useState(null);

  // eslint-disable-next-line consistent-return
  const handleSignUp = async () => {
    if (userPassword !== userPasswordCheck) {
      return Alert.alert("Passwords don't match.");
    }
    if (
      userPassword === null ||
      userMail === null ||
      userPasswordCheck === null ||
      username === null
    ) {
      return Alert.alert('Missing Information');
    }

    await AsyncStorage.setItem(
      'user',
      JSON.stringify({
        mail: userMail,
        password: userPassword,
        username,
      })
    );

    createUserWithEmailAndPassword(auth, userMail, password)

    navigation.navigate('SignIn');
  };

  const navigateSignIn = () => {
    navigation.navigate('SignIn')
  }

  // TODO why redux state gives error missing e-mail
  // const handleFirebase = () => {
  //   createUserWithEmailAndPassword(auth, email, password).then(response => { console.log(response.user); })
  //     .catch((error) => (console.error(error)));
  // }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme ? 'white' : '#121212' }]}>
      <ScrollView>
        <Input
          label="Type your e-mail"
          placeholder="example@example.com"
          value={email}
          onChangeText={(text) => {
            dispatch(setSignUpForm({ email: text }))
            setUserMail(text)
          }}
        />
        <Input
          label="Type your password"
          secureTextEntry
          placeholder="*****"
          value={password}
          onChangeText={(text) => {
            dispatch(setSignUpForm({ password: text }))
            setUserPassword(text)
          }}
        />
        <Input
          label="Re-Type your password"
          secureTextEntry
          placeholder="*****"
          onChangeText={setUserPasswordCheck}
        />
        <Input label="Type your username" placeholder="username" onChangeText={setUsername} />
        <Pressable onPress={navigateSignIn} style={styles.question_container}>
          <Text style={styles.question_text}>Already have an account?</Text>
        </Pressable>
      </ScrollView>
      <SignButton title="Sign Up" onPress={handleSignUp} />
    </SafeAreaView>
  );
}

export default SignUp;
