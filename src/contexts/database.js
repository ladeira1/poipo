import React, {useState, createContext, useEffect} from 'react'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

import AsyncStorage from '@react-native-community/async-storage'

export const DatabaseContext = createContext({})

const DatabaseProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [user, setUser] = useState(null)

  //firebase - auth
  const signUp = async (name, email, password) => {
    setLoadingAuth(true)
    await auth().createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid

        await firestore().collection('users').doc(uid).set({
          name: name
        })
        .then(() => {
          let data = {
            uid: uid,
            name: name,
            email: value.user.email
          }

          setUser(data)
          setStorageUser(data)
          setLoadingAuth(false)
        })
      })
      .catch((err) => {
        alert(err)
        setLoadingAuth(false)
      })
  }

  const signIn = async (email, password) => {
    setLoadingAuth(true)
    await auth().signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid

        const currentUser = await firestore().collection('users').doc(uid).get()

        let data = {
          uid: uid,
          name: currentUser.data().name,
          email: value.user.email,
        }

        setUser(data)
        setStorageUser(data)
        setLoadingAuth(false)
      })
      .catch((err) => {
        alert(err)
        setLoadingAuth(false)
      })
  }

  const signOut = async () => {
    await auth().signOut()
    deleteStorageUser()
  }

  //firebase- app
  const postMessage = async (message) => {
    let avatarUrl
    try {
      let response = await storage().ref('users').child(user?.uid).getDownloadURL()
      avatarUrl = response
    }
    catch(err) {
      avatarUrl = null
    }

    await firestore().collection('posts').add({
      createdAt: new Date(),
      content: message,
      author: user.name,
      likes: 0,
      avatarUrl,
      userId: user.uid
    })
      .catch((err) => {
        alert(err)
        return false
      })
  }

  const loadPosts = async (setPosts, setLoadingHome) => {
    firestore().collection('posts').orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const postList = []

        snapshot.forEach((document) => {
          postList.push({
            id: document.id,
            ...document.data(),
          })
        })

        setPosts(postList)
        setLoadingHome(false)
      })
  }

  //async storage
  const setStorageUser = async (data) => {
    await AsyncStorage.setItem('@user', JSON.stringify(data))
  }

  const deleteStorageUser = async () => {
    await AsyncStorage.clear()
      .then(() => {
        setUser(null)
      })
  }

  //getStorageUser
  useEffect(() => {
    const getStorageUser = async () => {
      const storageUser = await AsyncStorage.getItem('@user')

      if(storageUser) {
        setUser(JSON.parse(storageUser))
      }
      setLoading(false)
    }

    getStorageUser()
  }, [])

  return (
    <DatabaseContext.Provider value = {{
      loading,
      loadingAuth,
      signed: !!user,
      user,
      signUp,
      signIn,
      signOut,
      postMessage,
      loadPosts,
    }} >
      {children}
    </DatabaseContext.Provider>
  )
}

export default DatabaseProvider