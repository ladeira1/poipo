import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeStackScreen from './home.routes'
import Profile from '../pages/Profile'
import Search from '../pages/Search'

import colors from '../../styles/colors'
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator()

const AppRoutes = () => {

  const getTabBarVisibility = (route) => {
    const routeName = route.state? route.state.routes[route.state.index] : ''
    console.log(routeName)
    if(routeName === 'Update Profile') 
      return false

    return true
  }

  return (
    <Tab.Navigator 
    tabBarOptions = {{
      keyboardHidesTabBar: true,
      showLabel: false,
      style: {
        backgroundColor: colors.primaryBlack,
        borderTopWidth: 0,
      },
      activeTintColor: colors.secondaryPurple,
    }} >

      <Tab.Screen 
      name = 'Home' 
      component = {HomeStackScreen} 
      options = {{tabBarIcon: ({color, size}) => {
        return <Feather name = 'home' color = {color} size = {size} />
      }}} />

      <Tab.Screen 
      name = 'Search' 
      component = {Search}
      options = {{tabBarIcon: ({color, size}) => {
        return <Feather name = 'search' color = {color} size = {size} />
      }}} />

      <Tab.Screen 
      name = 'Profile' 
      component = {Profile}
      options = {{tabBarIcon: ({color, size}) => {
        return <Feather name = 'user' color = {color} size = {size} />
      }}} />

    </Tab.Navigator>
  )
}

export default AppRoutes