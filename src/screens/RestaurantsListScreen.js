import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import RestaurantsList from '../components/list/RestaurantsList'
import { getRestaurants } from '../services/Api'
// import globalStyles from '../theme/Styles'

const RestaurantsListScreen = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const getData = async () => {
      const result = await getRestaurants()
      setRestaurants(result)
    }
    getData()
  }, [])

  return (
    <View>
      <RestaurantsList restaurants={restaurants} />
    </View>
  )
}

export default RestaurantsListScreen
