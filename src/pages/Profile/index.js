import React, {useContext, useState} from 'react'
import {
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
} from 'react-native'
import {
  Container,
  UploadAvatarButton,
  UploadText,
  Avatar,
  Name,
  Email,
  Button,
  ButtonText,
} from './styles'
import {DatabaseContext} from '../../contexts/database'
import {useNavigation} from '@react-navigation/native'

import Header from '../../components/Header'

export default Profile = () => {
  const {user, signOut} = useContext(DatabaseContext)
  const navigation = useNavigation()

  const [avatar, setAvatar] = useState(null)

  const handleSignOut = () => {
    Alert.alert(
      'Confirm logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Confirm',
          onPress: () => signOut()
        }
      ]
    )
  }
  return (
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <UploadAvatarButton onPress = {() => navigation.navigate('Update Profile')} >
          <UploadText>+</UploadText>
          { avatar? (
            <Avatar source = {{uri: avatar}} />
          ) : (
            <Avatar source = {require('../../assets/avatar.png')} />
          )
          }
        </UploadAvatarButton >
          <Name>{user.name}</Name>
        <Email numberOfLines = {1} >{user.email}</Email>
        <Button colored = {true} onPress = {() => navigation.navigate('Update Profile')} >
          <ButtonText>Edit profile</ButtonText>
        </Button>
        <Button colored = {false} onPress = {handleSignOut} >
          <ButtonText>Logout</ButtonText>
        </Button>
      </Container>
    </TouchableWithoutFeedback>
  )
}