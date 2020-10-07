import React, {useContext, useState, useEffect} from 'react'
import {
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
  Modal,
  Platform,
} from 'react-native'
import {
  Container,
  DetailContainer,
  UploadAvatarButton,
  Avatar,
  DetailTextContainer,
  Name,
  Email,
  DescriptionContainer,
  Description,
  Button,
  ButtonText,
  ModalContainer,
  ButtonReturn,
  ModalText,
  Input,
} from './styles'
import {DatabaseContext} from '../../contexts/database'
import Icon from 'react-native-vector-icons/Feather'
import colors from '../../../styles/colors'

import Header from '../../components/Header'

import ImagePicker from 'react-native-image-picker'

export default Profile = () => {
  const {
    user, 
    updateUser, 
    signOut, 
    uploadAvatarImage,
    loadAvatar,
  } = useContext(DatabaseContext)

  const [name, setName] = useState(user?.name)
  const [description, setDescription] = useState(user?.description)
  const [avatar, setAvatar] = useState(null)
  const [update, setUpdate] = useState(false)

  const handleUpdateAvatar = () => {
    const options = {
      noData: true,
      mediaType: 'photo'
    }

    ImagePicker.launchImageLibrary(options, response => {
      if(response.didCancel) return
      if(response.error) {
        alert(response.error)
        return
      }
      const source = Platform.OS === 'android'? response.path : response.uri
      uploadAvatarImage(source)
      setAvatar(response.uri)
    })
  }

  const handleUpdate = () => {
    if(name === '') {
      alert('You must type a valid name.')
      return
    }

    updateUser(name, description)
    setUpdate(false)
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

  const handleReturn = () => {
    setUpdate(false)
    setDescription(user?.description)
  }

  useEffect(() => {
    const loadImage = async () => {
      try {
        response = await loadAvatar()
        setAvatar(response)
      }
      catch(err) {
        console.log(err)
      }
    }
    loadImage()
  }, [])

  return (
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <DetailContainer>
          <UploadAvatarButton onPress = {handleUpdateAvatar} >
            { avatar? (
              <Avatar source = {{uri: avatar}} />
            ) : (
              <Avatar source = {require('../../assets/avatar.png')} />
            )
            }
          </UploadAvatarButton >
          <DetailTextContainer>
            <Name numberOfLines = {1} >{user?.name}</Name>
            <Email numberOfLines = {1} >{user.email}</Email>
          </DetailTextContainer>
        </DetailContainer>
        <DescriptionContainer>
          <Description 
          numberOfLines = {8} 
          text = {user?.description} >{user?.description}</Description>
        </DescriptionContainer>
        <Button colored = {true} onPress = {() => setUpdate(true)} >
          <ButtonText color = {colors.primaryBlack}>Edit profile</ButtonText>
        </Button>
        <Button colored = {false} onPress = {handleSignOut} >
          <ButtonText color = {colors.primaryBlack}>Logout</ButtonText>
        </Button>

        <Modal 
        visible = {update} 
        animationType = 'slide' 
        transparent = {true} >
          <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()} >
            <ModalContainer behavior = {Platform.OS === 'android'? '' : 'padding'} >
              <ButtonReturn onPress = {handleReturn} >
                <Icon 
                name = 'arrow-left' 
                size = {20} 
                color = {colors.white} />
                <ButtonText color = {colors.white} > Return</ButtonText>
              </ButtonReturn>
              <ModalText>Name</ModalText>
              <Input 
              placeholder = {name}
              value = {name}
              onChangeText = {(text) => setName(text)}
              height = '45px' />
              <ModalText>Description</ModalText>
              <Input 
              placeholder = {description}
              value = {description}
              onChangeText = {(text) => setDescription(text)}
              maxLength = {250}
              multiline = {true}
              textAlignVertical = 'top'
              height = '60px' />
              <Button colored = {true} onPress = {handleUpdate} >
                <ButtonText color = {colors.white}>Confirm</ButtonText>
              </Button>
            </ModalContainer>
          </TouchableWithoutFeedback>
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}