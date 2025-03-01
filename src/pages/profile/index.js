import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AuthContext } from "../../Contexts";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {

    const { user, logOut, imageProfile, image } = useContext(AuthContext);
    const navigation = useNavigation();


    async function handleImageProfile() {

        await imageProfile();
    }
    return (
        <View style={styles.Container}>
            <Header title={'Perfil'} />
            <View style={styles.AreaItens}>
                <TouchableOpacity onPress={handleImageProfile}>
                    <Image style={styles.Avatar} source={image === null ? require('../../../assets/avatar.jpg') : { uri: image }} />
                </TouchableOpacity>

                <Text numberOfLines={1} style={styles.Saudacao}>Olá, <Text style={{ fontWeight: '400', }}>{user.name}</Text></Text>

                <TouchableOpacity style={styles.ButtonNovaBusca} onPress={() => navigation.navigate('Home')}>
                    <Text style={{ fontSize: 20, fontWeight: '900', color: '#fff' }}>Nova busca</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ButtonSair} onPress={() => logOut()}>
                    <Text style={{ fontSize: 20, fontWeight: '900' }}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(12,12,12,.9)',
    },
    AreaItens: {

        width: '100%',
        position: "absolute",
        top: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Avatar: {
        width: 150,
        height: 150,
        padding: 4,


        borderRadius: 250 / 2 * 100
    },

    Saudacao: {
        width: '45%',
        marginTop: 18,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    ButtonNovaBusca: {
        width: '90%',
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 40,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center'
    },
    ButtonSair: {
        width: '90%',
        height: 50,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#EDDE6E',
        justifyContent: 'center'
    }
})