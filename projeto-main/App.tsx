import { Text, View, StyleSheet, Button,TextInput,ImageBackground,Image} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import { CadastroScreen } from './src/screens/cadastro'
import { LoginScreen } from './src/screens/login'
import { HomeScreen } from './src/screens/home /index'
import logo3 from './src/assets/pictures/logo3.png'
{/* */}

export default function App() {
  return(
    <View style={{flex:1}}>
      <LoginScreen/>
    </View>
  )
}
