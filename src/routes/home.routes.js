import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../pages/Home'
import NewPost from '../pages/NewPost'
import UserPosts from '../pages/UserPosts'

import colors from '../../styles/colors'

const Stack = createStackNavigator()

const HomeRoutes = ({navigation, route}) => {
  if(route.state && route.state.index > 0) {
    navigation.setOptions({
      tabBarVisible: false
    })
  }
  else {
    navigation.setOptions({
      tabBarVisible: true
    })
  }
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name = 'Home' 
      component = {Home}
      options = {{
        headerShown: false
      }} />
      <Stack.Screen 
      name = 'New Post' 
      component = {NewPost}
      options = {{
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.primaryBlack
        }
      }} />
      <Stack.Screen 
      name = 'UserPosts' 
      component = {UserPosts}
      options = {{
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.primaryBlack
        }
      }} />
    </Stack.Navigator>
  )
}

export default HomeRoutes