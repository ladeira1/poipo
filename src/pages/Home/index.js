import React, {useState, useEffect, useContext} from 'react'
import {
  View,
  ActivityIndicator
} from 'react-native'
import {
  Container,
  ButtonPost,
  ListPosts,
} from './styles'
import {useNavigation} from '@react-navigation/native'
import Header from '../../components/Header'
import Post from '../../components/Post'

import {DatabaseContext} from '../../contexts/database'


import Feather from 'react-native-vector-icons/Feather'
import colors from '../../../styles/colors'

export default Home = () => {
  const {user, loadPosts} = useContext(DatabaseContext)
  const navigation = useNavigation()

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loader = loadPosts(setPosts, setLoading)

    return () => {
      loader
    }
  }, [])

  return (
    <Container>
      <Header />
      { loading? (
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator color = {colors.primaryPurple} size = {50} />
          </View>
        ) : (
          <ListPosts 
          showsVerticalScrollIndicator = {false}
          data = {posts} 
          renderItem = {({item}) => (
            <Post data = {item} userId = {user.uid} />
          )} />
        )
      }
      <ButtonPost onPress = {() => navigation.navigate('New Post')} >
        <Feather name = 'edit-2' color = {colors.secondaryPurple} size = {25} />
      </ButtonPost>
    </Container>
  )
}