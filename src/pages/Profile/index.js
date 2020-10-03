import React, {useContext, useState} from 'react'
import {
  TouchableOpacity,
  Alert
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

import Header from '../../components/Header'

export default Profile = () => {
  const {user, signOut} = useContext(DatabaseContext)
  const [avatar, setAvatar] = useState(null)

  const handleAvatarUpdate = () => {
    alert('To do')
  }
  
  const handleNameUpdate = () => {
    alert('To do')
  }

  const handleUpdateConfirmation = () => {
    alert('To do')
  }

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
    <Container>
    <Header />
      <UploadAvatarButton onPress = {handleAvatarUpdate} >
        <UploadText>+</UploadText>
        { avatar? (
          <Avatar source = {{uri: avatar}} />
        ) : (
          <Avatar source = {require('../../assets/avatar.png')} />
        )
        }
      </UploadAvatarButton>
      <TouchableOpacity onPress = {handleNameUpdate}>
        <Name numberOfLines = {1} >{user.name}</Name>
      </TouchableOpacity>
      <Email numberOfLines = {1} >{user.email}</Email>
      <Button colored = {true} onPress = {handleUpdateConfirmation} >
        <ButtonText>Update profile</ButtonText>
      </Button>
      <Button colored = {false} onPress = {handleSignOut} >
        <ButtonText>Logout</ButtonText>
      </Button>
    </Container>
  )
}