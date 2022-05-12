import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import globalStyles from '../theme/Styles'
import pageStyles from './styles/LoginScreenStyle'

import LoginForm from '../components/form/LoginForm'
import { useAuth } from '../contexts/AuthContext'
import Images from '../images/Images'

const LoginScreen = ({ navigation }) => {
  const { loginUser, state: { error } } = useAuth()

  const [credentials, setCredentials] = useState({
    identifier: 'nouvo@mail.fr',
    password: 'nouvonouvo'
  })

  const handleSubmit = async () => {
    await loginUser(credentials)
  }

  return (
    <View style={globalStyles.container}>
      <Image source={Images.logo} style={pageStyles.logo} />
      <Text style={globalStyles.heading}>Connexion</Text>
      <LoginForm
        credentials={credentials}
        setCredentials={setCredentials}
        onSubmit={handleSubmit}
      />
      {error && <Text style={globalStyles.error}>Identifiant ou mot de passe invalide</Text>}
      <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
        <Text style={{ textAlign: 'center' }}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen
