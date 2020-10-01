import React, {useContext} from 'react'
import {
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'
import colors from '../../styles/colors'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

import {DatabaseContext} from '../contexts/database'


const Routes = () => {
  const {loading, signed} = useContext(DatabaseContext)

  return (
    <>
    {loading? (
      <View style = {styles.loadingBackground} >
        <ActivityIndicator  color = {colors.primaryPurple} size = {50}  />
      </View>
    ) : (
      signed? <AppRoutes /> : <AuthRoutes />
    )
    }
    </>
  )
}

const styles = StyleSheet.create({
  loadingBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryGray,
  }
})

export default Routes