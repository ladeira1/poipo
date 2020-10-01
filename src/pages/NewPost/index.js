import React, {useState, useLayoutEffect, useContext} from 'react'
import {useNavigation} from '@react-navigation/native'
import {
  Container,
  Input,
  Button,
  ButtonText,
} from './styles'

import {DatabaseContext} from '../../contexts/database'


export default NewPost = () => {
  const {postMessage} = useContext(DatabaseContext)
  const navigation = useNavigation()

  const [message, setMessage] = useState('')

  const handlePosting = () => {
    if(message === '') {
      alert("Your message must not be empty.")
      return
    }
    let result = postMessage(message)
    if(result) {
      setMessage('')
      navigation.goBack()
    }
  }

  useLayoutEffect(() => {
    const options = navigation.setOptions({
      headerRight: () => (
        <Button onPress = {handlePosting} >
          <ButtonText>Share</ButtonText>
        </Button>
      )
    })
  }, [navigation, message])

  return (
    <Container>
      <Input 
      value = {message} 
      onChangeText = {(text) => setMessage(text)}
      placeholder = 'Share your thoughts'
      textAlignVertical = 'top'
      multiline = {true}
      maxLength = {300} />
    </Container>
  )
}