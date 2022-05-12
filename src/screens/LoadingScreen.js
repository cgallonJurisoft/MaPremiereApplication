import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import globalStyles from '../theme/Styles'

const LoadingScreen = () => {
  return (
    <View style={globalStyles.container}>
      <ActivityIndicator size='large' color='#0bc' />
    </View>
  )
}

export default LoadingScreen
