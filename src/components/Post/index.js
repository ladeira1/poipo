import React from 'react'
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

const Post = ({ data }) => {
  const formatTime = () => {
    const date = new Date(data.createdAt.seconds * 1000)
    return formatDistance(new Date(), date)
  }

  return(
    <Container>

      <Header>
        <Avatar 
        source = {data.avatarUrl? {uri: data.avatarUrl} : require('../../assets/avatar.png')} />
        <Name>{data?.author}</Name>
      </Header>

      <MessageView>
        <Message numberOfLines = {4} >{data.content}</Message>
      </MessageView>

      <ActionsView>
        <LikeButton>
          <Icon name = {data.likes > 0? 'cards-heart': 'heart-plus-outline'} 
          size = {20} 
          color = {colors.red} />
          <Like>{data.likes > 0? data.likes : ''}</Like>
        </LikeButton>
        <TimeText>{formatTime()}</TimeText>
      </ActionsView>
    </Container>
  )
}

export default Post