import React from 'react'
import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../styles/InputStyle'

const Input = (props) => {
  return (
    <View style={styles.textInputContainer}>
      {
        props.icon &&
        (
          <View style={styles.iconContainer}>
            <Icon name={props.icon} size={20} />
          </View>
        )
      }
      <TextInput
        {...props}
        style={styles.textInput}
      />
    </View>
  )
}

export default Input
