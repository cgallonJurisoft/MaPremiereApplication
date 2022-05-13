import React from 'react'
import { View, Text, Image, SafeAreaView, FlatList } from 'react-native'
import Button from '../Button'
import styles from '../styles/ListStyles'
import globalStyles from '../../theme/Styles'
import { actionTypes, useCart } from '../../contexts/CartContext'

const IMAGE_URL = 'https://strapi.myidea.fr'

const categoriesTrad = {
  starter: 'Entrées',
  dish: 'Plats',
  dessert: 'Dessert',
  drink: 'Boissons'
}

const DishItem = ({ item }) => {
  const { state, dispatch } = useCart()

  const handleAddToCart = (item) => {
    // Appel de la méthode dispatch pour mettre à jour l'état global
    // On y ajoute le type d'action désiré
    dispatch({
      type: actionTypes.ADDTOCART,
      data: {
        id: item._id,
        nom: item.nom,
        quantite: 1
      }
    })
  }

  // const handleChangeQuantity = (item, PlusOrMinus) => {
  //   // Appel de la méthode dispatch pour mettre à jour l'état global
  //   // On y ajoute le type d'action désiré
  //   dispatch({
  //     type: actionTypes.CHANGEQUANTITY,
  //     data: {
  //       id: item._id,
  //       quantite: 1 + PlusOrMinus
  //     }
  //   })
  // }

  return (
    <View style={styles.smallCard}>
      {item.photos[0] && (
        <Image
          style={styles.smallImage}
          source={{ uri: `${IMAGE_URL}${item.photos[0].url}` }}
        />
      )}
      <Text style={styles.title}>{item.nom}</Text>
      <Text>{item.description}</Text>
      <View style={styles.containerPrice}>
        <Text style={styles.containedPrice}>{item.price.toFixed(2)} €</Text>
      </View>
      {
        state.cartContent.filter((i) => i.id === item._id).length < 1
          ? <Button title='Ajouter au panier' onPress={() => handleAddToCart(item)} />
          : (
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Button color='crimson' title='-' style={{ marginRight: 15 }} />
              <Button title='+' />
            </View>
            )
      }

    </View>
  )
}

const DishesList = ({ dishes, header }) => {
  const categories = [...new Set(dishes.map(p => p.category))]
  return (
    <SafeAreaView>
      {
        categories.map((c, i) => {
          return (
            <FlatList
              key={i}
              ListHeaderComponent={
                <Text style={{ ...globalStyles.heading, marginTop: 30, marginBottom: 0 }}>{categoriesTrad[c]}</Text>
              }
              data={dishes.filter(p => p.category === c)}
              keyExtractor={item => item._id}
              renderItem={({ item }) => <DishItem item={item} />}
            />
          )
        })
      }
    </SafeAreaView>
  )
}

export default DishesList
