import React from 'react'
import {
  Container,
  Text,
} from './styles'
import {useNavigation} from '@react-navigation/native'


export default SearchList = ({data}) => {
  const navigation = useNavigation()

  return (
    <Container onPress = {() => navigation.navigate('UserPosts', {
      title: data.name,
      userId: data.id,
    })} >
      <Text>{data.name}</Text>
    </Container>
  )
}
