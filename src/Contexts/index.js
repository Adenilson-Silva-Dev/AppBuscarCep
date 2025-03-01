import React from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { createContext, useEffect, useState } from 'react';
import { auth } from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';
import * as ImagePicker from 'expo-image-picker';


export const AuthContext = createContext({});

export default function AuthProvaider({ children }) {
    const [ user, setUser ] = useState(null);
    const [ loadingAuth, setLoadingAuth ] = useState(false);
    const [ visibleModal, setVisibleModal ] = useState(false);
    const [ dadosCep, setDadosCep ] = useState([]);
    const [ loadingDataCep, setLoadingDataCep ] = useState(false);
    const [ visibleButtonIsInput, setVisibleButtonIsInput ] = useState(true);

    const [ image, setImage ] = useState(null);


    useEffect(() => {
        async function loadStorange() {
            const userStorange = await AsyncStorage.getItem('@devcep');

            if (userStorange) {
                setUser(JSON.parse(userStorange));
            }
        }

        loadStorange();
    }, []);

    useEffect(() => {
        async function loadImage() {
            const savedImageUri = await AsyncStorage.getItem(`@userImage_${user.uid}`);

            if (savedImageUri) {
                setImage(savedImageUri)
            }


        }
        loadImage()
    }, [ user.uid ])

    async function signUp(email, password, name) {
        setLoadingAuth(true);

        try {
            const useCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            );

            const user = useCredential.user;
            await updateProfile(user, {
                displayName: name,
            });

            const data = {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                createdAt: new Date(),
            };
            setUser(data);
            storangeUser(data);
            setLoadingAuth(false);
        } catch (err) {
            console.log('Erro ao cadastrar usuario: ', err.code);
            setLoadingAuth(false);
        }
    }

    async function signIn(email, password) {
        setLoadingAuth(true);
        try {

            const useCredential = await signInWithEmailAndPassword(auth, email, password);

            const user = useCredential.user;


            const data = {
                uid: user.uid,
                email: user.email,
                name: user.displayName

            }

            setUser(data);
            storangeUser(data);
            setLoadingAuth(false);

        } catch (err) {
            console.log('Erro ao logar usuario: ', err.code);
            setLoadingAuth(false);
        }
    }

    async function logOut() {

        await AsyncStorage.clear()
            .then(() => {
                setUser(null)
            }).catch(() => {
                console.log('Erro ao sair da conta!')
            })
    }
    async function storangeUser(data, id) {
        await AsyncStorage.setItem('@devcep', JSON.stringify(data));

    }

    async function getCep(cep) {
        setLoadingDataCep(true);

        try {


            const response = await api.get(`${cep}/json/`);
            setDadosCep(response.data);
            setVisibleModal(true);
            setLoadingDataCep(false);

        } catch (err) {
            alert('Cep inválido ', err.code);
            setLoadingDataCep(false);
            visibleButtonIsInput(true)
        }
    }

    async function imageProfile() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: [ 'images' ],
            allowsEditing: true,
            aspect: [ 4, 4 ],
            quality: 1
        });

        if (!result.canceled) {
            const uri = result.assets[ 0 ].uri;
            setImage(uri);


            await AsyncStorage.setItem(`@userImage_${user.uid}`, uri)

        }
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, logOut, loadingAuth, setVisibleModal, visibleModal, getCep, dadosCep, loadingDataCep, visibleButtonIsInput, setVisibleButtonIsInput, imageProfile, image }}>
            {children}
        </AuthContext.Provider>
    );
}
