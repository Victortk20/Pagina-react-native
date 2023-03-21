import { Text, View, StyleSheet, Button,TextInput,ImageBackground,Image} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import logo3 from './../../assets/pictures/logo3.png';



export interface LoginScreenProps {
}

export function LoginScreen (props: LoginScreenProps) {
  
  const [ resultado, setResultado ] = useState<null|'logado'|'falhou'>(null);
  
  const handleLogin = async ({email, senha}:any) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (email.trim() == 'teste@teste.com' && senha.trim() == '123456') 
      setResultado('logado')
    else
      setResultado('falhou')
  }
  
  
  return (
    
    <View style={styles.conteiner}>
      <Formik
        initialValues={{email: '', senha: ''}}
        validationSchema={Yup.object().shape({
          email: Yup.string().required('Informe o email').email('E-mail não válido'),
          senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa ter 6 caracteres')
        })}
        onSubmit={handleLogin}>
        {({errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <>
          <ImageBackground style={styles.conteiner}>
          <Image source={logo3} style={styles.logo}> </Image>
          <Text style={styles.titulo}>Login</Text>
          <TextInput style={styles.input} placeholder="Digite seu email" onBlur={handleBlur('email')} onChangeText={handleChange('email')}/>
         { /* { errors.email && touched.email && <Text style={styles.fail}>{errors.email}</Text>}*/ } 
          <TextInput style={styles.input} placeholder="Digite sua senha"onBlur={handleBlur('email')} onChangeText={handleChange('senha')} secureTextEntry />
         { /* { errors.senha && touched.senha && <Text style={styles.fail}>{errors.senha}</Text>}*/ } 
          <Button color='#965D2C' style={styles.botao} title="Logar"onPress={() => handleSubmit()} disabled={isSubmitting} />
          </ImageBackground>
          { resultado == 'logado' && <Text style={styles.success}>Logado com sucesso</Text>}
          { resultado == 'falhou' && <Text style={styles.fail}>Email ou senha incorreto</Text>}
        </>
        )}
      </Formik>
    </View>
  )
}
    { /* #965D2C
        #D39142
        #ECD156*/ } 
const styles = StyleSheet.create({
  titulo: {
    color: '#965D2C',
    fontSize: 30,
    textAlign: 'center'
  },
  input: {
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    margin: 5,
    padding: 10,
    borderRadius: 100
  },
  botao:{
    backgroundColor: 'black',
    margin: 5,
    padding: 10,
    borderRadius: 100,
    textTransform: "uppercase"
  },
  logo:{
    padding: 10,
    width: 180, 
    height: 100,
    },
  conteiner:{
    backgroundColor:'#D5BEAA',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    

  }  
  
})