import React from 'react';
import {
  StatusBar,
  LogBox,
} from 'react-native';
import colors from './styles/colors.js'
import 'react-native-gesture-handler'

import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes'

import DatabaseProvider from './src/contexts/database'

LogBox.ignoreAllLogs(true)

const App = () => {
  return (
    <NavigationContainer>
      <DatabaseProvider>
        <StatusBar 
        backgroundColor = {colors.primaryGray}
        barStyle = 'light-content'
        translucent = {false} />
        <Routes />
      </DatabaseProvider>
    </NavigationContainer>
  )
}

export default App