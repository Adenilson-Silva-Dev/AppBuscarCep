import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from "react-native";

import Feather from "@expo/vector-icons/Feather"
import ModalCep from "../../components/ModalCep";
import { AuthContext } from "../../Contexts";
import Header from "../../components/Header";

export default function Home() {
    const { getCep, loadingDataCep, dadosCep, visibleButtonIsInput, setVisibleButtonIsInput } = useContext(AuthContext);
    const [ inputCep, setInputCep ] = useState('');


    async function handleGetCep() {

        if (inputCep === '') {
            alert('Favor! Digite um cep!');
            return
        }
        await getCep(inputCep);
        setInputCep('')
        setVisibleButtonIsInput(false);


    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.Container}>
                <Header title={''} />
                <View style={styles.AreaDados}>
                    {visibleButtonIsInput && (
                        <TextInput
                            value={inputCep}
                            onChangeText={(value) => setInputCep(value)}
                            style={styles.Input} placeholder="Ex: 12345678" />
                    )}
                    {visibleButtonIsInput && (
                        <TouchableOpacity style={styles.Search} onPress={handleGetCep}>
                            {loadingDataCep ? (
                                <ActivityIndicator size={24} color={'#000'} />
                            ) : (
                                <Feather name="search" size={24} color={'#000'} />
                            )}
                        </TouchableOpacity>
                    )}
                </View>

                <ModalCep data={dadosCep} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121212'
    },
    AreaDados: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: ''
    },
    Input: {
        width: '75%',

        fontSize: 18,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    Search: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#fff'
    },

})