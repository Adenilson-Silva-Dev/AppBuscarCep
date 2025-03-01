import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {

    const navigation = useNavigation()
    return (
        <View style={styles.Container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Feather name={'menu'} size={24} color={'#fff'} />
            </TouchableOpacity>
            <Text style={{ color: '#fff', fontSize: 18, left: 18 }}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        top: 8,
        left: 16,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})