
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
    apiKey: "AIzaSyByoTNMOAyhxJBZExsD_Mywv1PfgUAC8PU",
    authDomain: "appbuscarcep-d55de.firebaseapp.com",
    projectId: "appbuscarcep-d55de",
    storageBucket: "appbuscarcep-d55de.firebasestorage.app",
    messagingSenderId: "207850457055",
    appId: "1:207850457055:web:802d6054bcc3d1772f666a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export { db, auth }