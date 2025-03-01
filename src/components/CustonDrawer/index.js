import React, { useContext } from "react";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, Image, StyleSheet } from "react-native";
import { AuthContext } from "../../Contexts";

export default function CustonDrawer(props) {
    const { user, image } = useContext(AuthContext)
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.Container}>
                <Image style={styles.Avatar} source={image === null ? require('../../../assets/avatar.jpg') : { uri: image }} />
                <Text numberOfLines={1} style={{ fontWeight: '900', width: '40%', marginBottom: 16 }}>Olá, <Text style={{ fontWeight: '400' }}>{user.name}</Text></Text>
            </View>
            <DrawerItemList {...props}>

            </DrawerItemList>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Avatar: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderRadius: 100,
        marginBottom: 20
    }
})