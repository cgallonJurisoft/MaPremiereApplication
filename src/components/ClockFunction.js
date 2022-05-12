import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

const ClockFunction = ({ interval }) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      tick()
    }, interval)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const tick = () => {
    setDate(new Date())
  }

  return (
    <View>
      <Text>Il est : {date.toLocaleTimeString()}</Text>
    </View>
  )
}

export default ClockFunction
