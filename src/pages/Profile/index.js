import React, {useContext} from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'
import {DatabaseContext} from '../../contexts/database'


export default Profile = () => {
  const {signOut} = useContext(DatabaseContext)

  return (
    <View>
      <Text>SignIn</Text>
      <Button title ='logout' onPress = {signOut} ></Button>
    </View>
  )
}