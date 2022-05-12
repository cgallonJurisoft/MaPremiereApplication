import React from 'react'
import { View, Button } from 'react-native'

const CustomButton = (props) => {
  return (
    <View style={{ marginVertical: 15 }}>
      <Button {...props} />
    </View>
  )
}

export default CustomButton
