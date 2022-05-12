import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import Button from '../components/Button'
import { useAuth } from '../contexts/AuthContext'
import globalStyles from '../theme/Styles'

const HomeScreen = () => {
  const { logout } = useAuth()
  const devices = useCameraDevices()
  const device = devices.back

  useEffect(() => {
    const getPermissions = async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus()
      if (cameraPermission !== 'authorized') {
        await Camera.requestCameraPermission()
      }
      const microphonePermission = await Camera.getMicrophonePermissionStatus()
      if (microphonePermission !== 'authorized') {
        await Camera.requestMicrophonePermission()
      }
    }
    getPermissions()
  }, [])

  return (
    <View style={globalStyles.container}>
      <Text style={{ textAlign: 'center' }}>WELCOME</Text>
      <Button title='Se déconnecter' onPress={logout} color='crimson' />
      {device && (
        <Camera
          device={device}
          isActive
          style={{ height: '50%' }}
        />
      )}
    </View>
  )
}

export default HomeScreen
