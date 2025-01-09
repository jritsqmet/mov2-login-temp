import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../config/Config';

export default function WelcomeScreen({navigation}: any) {

    function logout(){

        signOut(auth).then(() => {
            // Sign-out successful.
            navigation.navigate('Login')
          }).catch((error) => {
            // An error happened.
          });

       
    }

  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title='Cerra sesión' onPress={()=>logout()}/>
    </View>
  )
}

const styles = StyleSheet.create({})