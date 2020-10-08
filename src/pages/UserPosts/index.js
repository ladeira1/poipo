import React, {useState, useLayoutEffect, useEffect, useContext} from 'react'
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text
} from 'react-native'
import {
  Container,
  List,
} from './styles'
import colors from '../../../styles/colors'
import Icon from 'react-native-vector-icons/Feather'

import Post from '../../components/Post'

import {useNavigation} from '@react-navigation/native'

import {DatabaseContext} from '../../contexts/database'

export default UserPosts = ({route}) => {
  const {user, loadUserPosts} = useContext(DatabaseContext)
  const navigation = useNavigation()

  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState(route.params.title)
  const [posts, setPosts] = useState([])

  const handleFriend = () => {
    alert('to do')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => (
        <TouchableOpacity onPress = {handleFriend} style = {{marginRight: 10}} >
          <Icon name = 'user-plus' size = {25} color = {colors.primaryPurple} />
        </TouchableOpacity>
      )
    })
  }, [title, navigation])

  useEffect(() => {
    const user = loadUserPosts(route.params.userId, setPosts, setLoading)
    return () => (
      user
    )
  }, [])

  return (
    <Container>
      { loading? (
          <View style = {{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center'
            }} >
            <ActivityIndicator size = {50} color = {colors.primaryPurple} />
          </View>
        ) : (
            <List 
            showsVerticalScrollIndicator = {false}
            data = {posts}
            renderItem = {({item}) => (
              <Post data = {item} userId = {user.uid} />
            )} />
        )
      }
    </Container>
  )
}