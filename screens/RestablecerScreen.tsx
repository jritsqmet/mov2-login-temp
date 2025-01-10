import { Button, StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
//FIREBASE
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/Config';

export default function RestablecerScreen() {

    const [correo, setcorreo] = useState("")

    function restablecer() {
        sendPasswordResetEmail(auth, correo)
            .then(() => {
                // Password reset email sent!
                // ..
                Alert.alert("Mensaje", "Se ha enviado un mensaje a su correo electrónico")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(errorCode, errorMessage)
                // ..
            });
    }

    return (
        <View>
            <Text>RestablecerScreen</Text>
            <TextInput
                placeholder='Ingresar un correo'
                style={styles.input}
                keyboardType='email-address'
                onChangeText={(texto) => setcorreo(texto)}
            />
            <Button title='Enviar' onPress={() => restablecer()} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 35,
        backgroundColor: "#6666"
    }
})