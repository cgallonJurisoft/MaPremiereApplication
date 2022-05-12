import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, LogBox } from 'react-native'
import { getRestaurant } from '../services/Api'
import styles from '../components/styles/ListStyles'
import LoadingScreen from './LoadingScreen'
import DishesList from '../components/list/DishesList'

const IMAGE_URL = 'https://strapi.myidea.fr'

const RestaurantScreen = ({ route, navigation }) => {
  const [restaurant, setRestaurant] = useState(null)
  const { id } = route.params

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])

    const getData = async () => {
      const result = await getRestaurant(id)
      setRestaurant(result)
      navigation.setOptions({ title: result.title })
    }
    getData()
  }, [])

  if (restaurant) {
    return (
      <ScrollView style={{ paddingVertical: 30 }}>
        <View style={styles.bigCard}>
          <Image
            style={styles.bigImage}
            source={{ uri: `${IMAGE_URL}${restaurant.photos[0].url}` }}
          />
          <View>
            <Text style={styles.title}>{restaurant.title}</Text>
            <Text style={{ marginBottom: 10 }}>{restaurant.description}</Text>
            <Text style={styles.adresse}>{restaurant.adresse.adresse}</Text>
            <Text style={styles.adresse}>{restaurant.adresse.code_postal} {restaurant.adresse.ville}</Text>
            <Text style={styles.adresse}>{restaurant.adresse.phone}</Text>
          </View>
        </View>

        <DishesList dishes={restaurant.plats} />

        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Text style={{ textAlign: 'center', marginBottom: 20 }}>Retour à la liste des restaurants</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  } else {
    return <LoadingScreen />
  }
}

export default RestaurantScreen
