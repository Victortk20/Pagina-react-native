import * as React from 'react'
import {TextInput, View, Text, Button, ActivityIndicator, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native';
import bg from './../../assets/pictures/bg.png';
import logo3 from './../../assets/pictures/logo3.png';
import bordado1 from './../../assets/pictures/bordado1.png';
import bordado2 from './../../assets/pictures/bordado2.png';
import bordado3 from './../../assets/pictures/bordado3.png';
import bordado4 from './../../assets/pictures/bordado4.png';
import bordado5 from './../../assets/pictures/bordado5.png';
{/*import { IMaskInput } from "react-imask";*/}
{/*import InputMask from 'react-input-mask';*/}

export interface HomeScreenProps {
}

export function HomeScreen (props: HomeScreenProps) {
return(
  <>
  <ImageBackground style={styles.conteiner}>
        <Image source={logo3} style={styles.logo}>  </Image>
        <TextInput style={styles.input} placeholder="Buscar Produto" />
        <ScrollView>
        <View style={{flexDirection: 'row' , justifyContent: 'space-around' }}>
          <View style={{width: 120 , height: 150, }}><Image source={bordado1} style={styles.produto}> </Image></View>
          <Text style={styles.titulo}>Bord-Charlote <br></br>R$150,00<br></br> </Text>
        </View>

        <View style={{flexDirection: 'row' , justifyContent: 'space-around' }}>
          <View style={{width: 120 , height: 150, }}><Image source={bordado2} style={styles.produto}> </Image></View>
          <Text style={styles.titulo}>Bord-Plantas<br></br>R$250,00<br></br> </Text>
        </View>
        <View style={{flexDirection: 'row' , justifyContent: 'space-around' }}>
          <View style={{width: 120 , height: 150, }}><Image source={bordado3} style={styles.produto}> </Image></View>
          <Text style={styles.titulo}>Bord-Flores<br></br>R$330,00<br></br> </Text>
        </View>
        <View style={{flexDirection: 'row' , justifyContent: 'space-around' }}>
          <View style={{width: 120 , height: 150, }}><Image source={bordado4} style={styles.produto}> </Image></View>
          <Text style={styles.titulo}>Bord-Flor G. <br></br>R$550,00<br></br> </Text>
        </View>
        <View style={{flexDirection: 'row' , justifyContent: 'space-around' }}>
          <View style={{width: 120 , height: 150, }}><Image source={bordado5} style={styles.produto}> </Image></View>
          <Text style={styles.titulo}>Bord-KCKS <br></br>R$1120,00<br></br> </Text>
        </View>
        
        
        </ScrollView>

        
     </ImageBackground>
  </>
)
    

        
    
}
const styles = StyleSheet.create({
  input: {
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    marginBottom:10,
    padding: 4,
    borderRadius: 20,
    fonteSize:18,
    textAlign: 'center',
    width: "80%",
  },
  
  logo:{
    padding: 10,
    width: 180, 
    height: 100,
  },
  produto:{
    padding: 10,
    width: 140, 
    height: 127,
  },
  titulo: {
    color: 'black',
    padding: 30,
    
    
    
    
  },
  conteiner:{
    backgroundColor:'#D5BEAA',
    justifyContent: 'start',
    alignItems: 'center',
    width: '100%', 
    height: '100%',
    padding:'20',
    flex: 1,

  }  
  
})