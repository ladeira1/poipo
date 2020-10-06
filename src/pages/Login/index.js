import React, {useState, useContext} from 'react'
import {
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native'
import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  Text,
  SignUpText,
} from './styles'
import colors from '../../../styles/colors'

import {DatabaseContext} from '../../contexts/database'

import * as Animatable from 'react-native-animatable'
const AnimatedTitle = Animatable.createAnimatableComponent(Title)


export default Login = () => {
  const {loadingAuth, signUp, signIn} = useContext(DatabaseContext)

  const [login, setLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const toggleLogin = () => {
    setLogin(!login)
    setName('')
    setEmail('')
    setPassword('')
  }

  const handleAuth = () => {
    Keyboard.dismiss()
    login? handleLogin() : handleRegistration()
  }

  const handleRegistration = () => {
    if(email === '' || password === '' || name === '') {
      alert('You need to fulfill all the spaces.')
      return
    }
    signUp(name, email, password)
    setPassword('')
  }

  const handleLogin = () => {
    if(email === '' || password === '') {
      alert('You need to fulfill all the spaces.')
      return
    }
    signIn(email, password)    
    setPassword('')
  }

  return (
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()} >
      <Container>
        <AnimatedTitle animation = 'flipInY' >poipo</AnimatedTitle>
        { login === false &&
          <Input placeholder = 'Name' 
          value = {name}
          onChangeText = {(text) => setName(text)}
          autoCorrect = {false} />
        }
        <Input placeholder = 'Email' 
        value = {email}
        onChangeText = {(text) => setEmail(text)}
        autoCorrect = {false}
        autoCapitalize = 'none' />

        <Input placeholder = '******' 
        secureTextEntry = {true}
        value = {password}
        onChangeText = {(text) => setPassword(text)}
        autoCorrect = {false}
        autoCapitalize = 'none' />

        <Button onPress = {handleAuth} >
          { loadingAuth? (
              <ActivityIndicator size = {20} color = {colors.white} />
          ) : (
<             ButtonText>{login? 'Login' : 'Create Account'}</ButtonText>
          )
          }
        </Button>

        <SignUpButton onPress = {() => toggleLogin()}>
          <Text>{login? "Don't have an account?" : 'Already have an account?'}</Text>
          <SignUpText>{login? ' Create one' : ' Login'}</SignUpText>
        </SignUpButton>

      </Container>
    </TouchableWithoutFeedback>
  )
}