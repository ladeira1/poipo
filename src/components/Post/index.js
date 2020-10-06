import React, {useContext, useRef} from 'react'
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
} from './styles'
import {formatDistance} from 'date-fns'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../../styles/colors'

import {DatabaseContext} from '../../contexts/database'
import {useNavigation} from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'
const AnimatedLike = Animatable.createAnimatableComponent(Icon)


const Post = ({ data, userId }) => {
  const {handleLike} = useContext(DatabaseContext)
  const navigation = useNavigation()

  const likeRef = useRef(null)

  const formatTime = () => {
    const date = new Date(data.createdAt.seconds * 1000)
    return formatDistance(new Date(), date)
  }

  const handleLikePress = () => {
    handleLike(data.id, data.likes, userId)
    likeRef.current.rubberBand()
  }

  return(
    <Container>

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
    </Container>
  )
}

export default Post