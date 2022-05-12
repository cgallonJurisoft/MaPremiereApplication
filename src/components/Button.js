import React from 'react'
import { Text, Pressable } from 'react-native'
import styles from './styles/ButtonStyles'

const CustomButton = (props) => {
  const { onPress, title = 'Enregistrer', color = '#0bc' } = props
  return (
    <Pressable
      onPress={onPress}
      style={{ ...styles.button, backgroundColor: color }}
      android_ripple={{ color: 'lightgrey' }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton
