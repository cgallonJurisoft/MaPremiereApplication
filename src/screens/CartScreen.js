import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import { actionTypes, useCart } from '../contexts/CartContext'
import styles from '../components/styles/ListStyles'
import Button from '../components/Button'

const CartItem = ({ item }) => {
  // On récupère la valeur de notre état global

  return (
    <View style={styles.smallCard}>
      {/* <Text>{JSON.stringify(item, null, 2)}</Text> */}
      <Text>{item.item.nom}</Text>
    </View>
  )
}

const CartScreen = () => {
  const { state, dispatch } = useCart()

  const handleEmptyCart = () => {
    dispatch({
      type: actionTypes.EMPTYCART
    })
  }

  return (
    <SafeAreaView>
      {state.cartContent && (
        <>
          <Button title='Vider le panier' color='crimson' onPress={() => handleEmptyCart()} />
          <FlatList
            style={{ paddingVertical: 30 }}
            data={state.cartContent}
            keyExtractor={item => item._id}
            renderItem={({ item }) => <CartItem item={item} />}
          />
        </>
      )}
    </SafeAreaView>
  )
}

export default CartScreen
