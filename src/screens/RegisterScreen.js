import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import globalStyles from '../theme/Styles'
import pageStyles from './styles/LoginScreenStyle'
import Images from '../images/Images'

import RegisterForm from '../components/form/RegisterForm'
import { useAuth } from '../contexts/AuthContext'

const RegisterScreen = ({ navigation }) => {
  const { registerUser } = useAuth()

  const [credentials, setCredentials] = useState({
    username: 'nouvo',
    email: 'nouvo@mail.fr',
    password: 'nouvonouvo'
  })

  const handleSubmit = async () => {
    await registerUser(credentials)
  }

  return (
    <View style={globalStyles.container}>
      <Image source={Images.logo} style={pageStyles.logo} />
      <Text style={globalStyles.heading}>Inscription</Text>
      <RegisterForm
        credentials={credentials}
        setCredentials={setCredentials}
        onSubmit={handleSubmit}
      />
      <TouchableOpacity onPress={() => { navigation.goBack() }}>
        <Text style={{ textAlign: 'center' }}>J'ai déjà un compte</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegisterScreen
