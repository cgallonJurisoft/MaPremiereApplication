import React from 'react'
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/ListStyles'
import { useNavigation } from '@react-navigation/native'

const IMAGE_URL = 'https://strapi.myidea.fr'

const RestaurantItem = ({ item }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => { navigation.navigate('RestaurantDetails', { id: item._id }) }}>
        <Image
          style={styles.image}
          source={{ uri: `${IMAGE_URL}${item.photos[0].url}` }}
        />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.description.substring(0, 90) + '…'}</Text>
          {/* <Text>{item.adresse.ville}</Text> */}
        </View>
      </TouchableOpacity>
    </View>
  )
}

const RestaurantsList = ({ restaurants }) => {
  return (
    <SafeAreaView>
      <FlatList
        style={{ paddingVertical: 30 }}
        data={restaurants}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <RestaurantItem item={item} />}
      />
    </SafeAreaView>
  )
}

export default RestaurantsList
