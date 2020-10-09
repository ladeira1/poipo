import React, {useState, useLayoutEffect, useEffect, useContext} from 'react'
import {
  View,
  ActivityIndicator,
} from 'react-native'
import {
  Container,
  List,
} from './styles'
import colors from '../../../styles/colors'

import Post from '../../components/Post'

import {useNavigation} from '@react-navigation/native'

import {DatabaseContext} from '../../contexts/database'

export default UserPosts = ({route}) => {
  const {user, loadUserPosts, handleFollowing} = useContext(DatabaseContext)
  const navigation = useNavigation()

  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState(route.params.title)
  const [posts, setPosts] = useState([])


  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
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