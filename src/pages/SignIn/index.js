import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AuthContext } from "../../Contexts";
import Header from "../../components/Header";

export default function SignIn() {
    const { signUp, signIn, loadingAuth } = useContext(AuthContext)
    const [ sigIn, setSigIn ] = useState(true);
    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');


    function toogleButton() {
        setSigIn(!sigIn)
        setNome("");
        setEmail("");
        setPassword("")
    }


    async function handleSigUp() {

        if (nome === '' || email === '' || password === '') return;

        await signUp(email, password, nome)
    }

    async function handleSignIn() {
        if (email === '' || password === '') {
            alert('Preencha todos os campos!!');
            return;
        }

        await signIn(email, password)
    }

    if (sigIn) {
        return (


            <View style={styles.Container}>

                <View style={styles.areaForm}>
                    <Image source={require('../../imgs/logo.png')} />
                    <Text style={{ fontSize: 50, color: "#fff", top: -25 }}>SigIn</Text>
                    <TextInput

                        value={email}
                        onChangeText={(value) => setEmail(value)}
                        style={styles.input} placeholder="Seu E-mail..." />
                    <TextInput
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        style={styles.input} placeholder="Sua senha..." />

                    <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                        {loadingAuth ? (
                            <ActivityIndicator size={24} color={'#121212'} />
                        ) : (
                            <Text style={styles.textButton}>Acessar</Text>
                        )}

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonLink} onPress={toogleButton}>
                        {loadingAuth ? (
                            <ActivityIndicator size={24} color={'#121212'} />
                        ) : (
                            <Text style={{ color: '#fff' }}>Criar uma conta</Text>
                        )}

                    </TouchableOpacity>


                </View>
            </View>
        )
    }
    return (
        <View style={styles.Container}>
            <View style={styles.areaForm}>
                <Image source={require('../../imgs/logo.png')} />
                <Text style={{ fontSize: 50, color: "#fff", top: -25 }}>SignUp</Text>

                <TextInput
                    value={nome}
                    onChangeText={(value) => setNome(value)}
                    style={styles.input} placeholder="Seu nome" />
                <TextInput
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                    style={styles.input} placeholder="Seu E-mail..." />
                <TextInput
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                    style={styles.input} placeholder="Sua senha..." />

                <TouchableOpacity style={styles.button} onPress={handleSigUp}>
                    <Text

                        style={styles.textButton}>Criar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonLink} onPress={toogleButton}>
                    <Text style={{ color: '#fff' }}>Já tenho uma conta</Text>
                </TouchableOpacity>


            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(12,12,12,.9)',
        justifyContent: 'center'
    },
    areaForm: {
        width: '90%',
        alignItems: 'center',

    },

    input: {
        width: '100%',
        height: 50,
        marginTop: 14,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    button: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        margin: 14,
        backgroundColor: '#EDDE6E'
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    buttonLink: {
        width: '100%',
        alignItems: 'center'
    }
})

