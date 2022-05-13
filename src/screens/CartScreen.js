import React from 'react'
import { View, Text } from 'react-native'
import { useCart } from '../contexts/CartContext'
import globalStyles from '../theme/Styles'

const CartView = () => {
  // On récupère la valeur de notre état global
  const { state } = useCart()

  return (
    <View>
      <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 20 }}>Panier :</Text>
      <Text>{JSON.stringify(state.cartContent)}</Text>
    </View>
  )
}

const CartScreen = () => {
  return (
    <View style={globalStyles.container}>
      <CartView />
    </View>
  )
}

export default CartScreen
