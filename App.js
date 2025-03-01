import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import AuthProvaider from './src/Contexts';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvaider>
        <StatusBar backgroundColor='#121212' barStyle={'light-content'} />
        <Routes />
      </AuthProvaider>
    </NavigationContainer>
  )
}