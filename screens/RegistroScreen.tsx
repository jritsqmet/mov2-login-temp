import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';

export default function RegistroScreen( {navigation}:any) {
    const [correo, setcorreo] = useState("")
    const [contrasenia, setcontrasenia] = useState("")

    function registro() {
        createUserWithEmailAndPassword(auth, correo, contrasenia)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                navigation.navigate('Welcome')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                
                // ..
            });

            
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40 }}>REGISTRO</Text>

            <TextInput
                placeholder='Ingresar correo'
                style={styles.input}
                onChangeText={(texto) => setcorreo(texto)}
            />

            <TextInput
                placeholder='Ingresar contraseña'
                style={styles.input}
                onChangeText={(texto) => setcontrasenia(texto)}
            />

            <Button title='Login' color={'green'} onPress={() => registro()} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 35,
        height: 55,
        backgroundColor: "#6666",
        borderRadius: 20,
        margin: 10,
        paddingHorizontal: 20,
        width: "85%"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})