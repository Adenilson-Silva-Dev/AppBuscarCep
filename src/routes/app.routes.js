import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Profile from "../pages/profile";
import CustonDrawer from "../components/CustonDrawer";


const Drawer = createDrawerNavigator();

export default function AppRoutes() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustonDrawer {...props} />} screenOptions={{
            headerShown: false, drawerInactiveTintColor: '#000', drawerInactiveBackgroundColor: '#fafafa',
            drawerActiveBackgroundColor: '#000',
            drawerInactiveBackgroundColor: '#fff',
            drawerActiveTintColor: '#fff',





        }



        }  >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}