import React from 'react'
import { View } from 'react-native'
import Input from './Input'
import Button from '../Button'

const RegisterForm = ({ credentials, setCredentials, onSubmit }) => {
  return (
    <View>
      <Input
        icon='person'
        onChangeText={(text) => setCredentials({ ...credentials, username: text })}
        value={credentials.username}
      />
      <Input
        icon='mail'
        onChangeText={(text) => setCredentials({ ...credentials, email: text })}
        value={credentials.email}
      />
      <Input
        icon='lock-closed'
        secureTextEntry
        onChangeText={(text) => setCredentials({ ...credentials, password: text })}
        value={credentials.password}
      />
      <Button title={'S\'inscrire'} onPress={onSubmit} />
    </View>
  )
}

export default RegisterForm
