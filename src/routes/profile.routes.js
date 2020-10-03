import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Profile from '../pages/Profile'
import UpdateProfile from '../pages/UpdateProfile'

import colors from '../../styles/colors'

const Stack = createStackNavigator()

const ProfileStackScreen = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name = 'Profile' 
      component = {Profile}
      options = {{
        headerShown: false
      }} />
      <Stack.Screen 
      name = 'Update Profile' 
      component = {UpdateProfile}
      options = {{
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.primaryGray
        }
      }} />
    </Stack.Navigator>
  )
}

export default ProfileStackScreen