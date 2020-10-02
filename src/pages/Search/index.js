import React, {useState, useContext, useEffect} from 'react'
import {
  Container,
  InputArea,
  Input,
  List,
} from './styles'
import Icon from 'react-native-vector-icons/Feather'
import colors from '../../../styles/colors'

import SearchList from '../../components/SearchList'

import {DatabaseContext} from '../../contexts/database'

export default Search = () => {
  const {searchUser} = useContext(DatabaseContext)

  const [person, setPerson] = useState('')
  const [possibleUsers, setPossibleUsers] = useState([])

  useEffect(() => {
    if(person === '' || person === undefined) {
      setPerson('')
      return
    }

    const searcher = searchUser(person, setPossibleUsers)

    return () => searcher
  }, [person])

  return (
    <Container>
      <InputArea>
        <Icon name = 'search' color = {colors.secondaryPurple} size = {22} />
        <Input 
        placeholder = 'Searching for someone?'
        value = {person}
        onChangeText = {(text) => setPerson(text)} />
      </InputArea>
      <List
      showsVerticalScrollIndicator = {false}
      data = {possibleUsers}
      keyExtractor = {(item) => item.id}
      renderItem = {({item}) => (
        <SearchList data = {item} />
      )} />

    </Container>
  )
}