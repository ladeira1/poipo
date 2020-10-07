import React, {useContext, useRef, useState} from 'react'
import {
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'
import {
  Container,
  Header,
  Avatar,
  Name,
  MessageView,
  Message,
  ActionsView,
  LikeButton,
  Like,
  TimeText,
  ModalContainer,
  ButtonReturn,
  ButtonText,
  ButtonDelete,
  ModalText,
  Input,
  Button,
} from './styles'
import {formatDistance} from 'date-fns'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ModalIcon from 'react-native-vector-icons/Feather'
import colors from '../../../styles/colors'

import {DatabaseContext} from '../../contexts/database'
import {useNavigation} from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'
const AnimatedLike = Animatable.createAnimatableComponent(Icon)


const Post = ({ data, userId }) => {
  const {handleLike, user, deletePost, updatePost} = useContext(DatabaseContext)
  const navigation = useNavigation()

  const [details, setDetails] = useState(false)
  const [content, setContent] = useState(data.content)

  const likeRef = useRef(null)

  const formatTime = () => {
    const date = new Date(data.createdAt.seconds * 1000)
    return formatDistance(new Date(), date)
  }

  const handleLikePress = () => {
    handleLike(data.id, data.likes, userId)
    likeRef.current.rubberBand()
  }

  const handlePostDetails = () => {
    if(user.uid !== data.userId) return
    setDetails(true)
  }

  const handleReturn = () => {
    setDetails(false)
    setContent(data.content)
  }

  const handleDelete = () => {
    Alert.alert(
      'Confirm deletion',
      'Are you sure you want to delete this post?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Confirm',
          onPress: () => deletePost(data.id)
        }
      ]
    )
  }

  const handleUpdate = () => {
    if(content === data.content) return
    if(content === '' || content.length === 0) {
      alert("You can't post an empty message.")
      return
    }
  
    updatePost(data, content)
    Keyboard.dismiss()
    setDetails(false)
  }

  return(
    <Container>
      <TouchableOpacity onLongPress = {handlePostDetails} >

        <Header onPress = {() => navigation.navigate('UserPosts', {
          title: data.author,
          userId: data.userId
        })} >
          <Avatar 
          source = {data.avatarUrl? {uri: data.avatarUrl} : require('../../assets/avatar.png')} />
          <Name>{data?.author}</Name>
        </Header>

        <MessageView>
          <Message>{data.content}</Message>
        </MessageView>

        <ActionsView>
          <LikeButton onPress = {handleLikePress} >
            <AnimatedLike 
            name = {data.likes > 0? 'cards-heart': 'heart-plus-outline'} 
            size = {20} 
            color = {colors.primaryPurple}
            ref = {likeRef} />
            <Like>{data.likes > 0? data.likes : ''}</Like>
          </LikeButton>
          <TimeText>{formatTime()} ago</TimeText>
        </ActionsView>
      </TouchableOpacity>

      <Modal
      visible = {details} 
      animationType = 'fade' 
      transparent = {true} >
        <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()} >
          <ModalContainer>
            <ButtonReturn onPress = {handleReturn} >
              <ModalIcon 
              name = 'arrow-left' 
              size = {20} 
              color = {colors.white} />
              <ButtonText color = {colors.white} > Return</ButtonText>
            </ButtonReturn>
            <ButtonDelete onPress = {handleDelete} >
              <ModalIcon 
              name = 'trash' 
              size = {22} 
              color = {colors.red} />
            </ButtonDelete>
            <ModalText>Description</ModalText>
            <Input
            placeholder = {data.content}
            value = {content}
            onChangeText = {text => setContent(text)}
            textAlignVertical = 'top' />
            <Button colored = {true} onPress = {handleUpdate} >
                <ButtonText color = {colors.white}>Confirm</ButtonText>
            </Button>
          </ModalContainer>
        </TouchableWithoutFeedback>
      </Modal>
    </Container>

  )
}

export default Post