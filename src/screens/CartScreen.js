import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import { useCart } from '../contexts/CartContext'
import styles from '../components/styles/ListStyles'

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
  const { state } = useCart()

  return (
  // <View style={globalStyles.container}>
    <SafeAreaView>
      {state.cartContent &&
        <FlatList
          style={{ paddingVertical: 30 }}
          data={state.cartContent}
          keyExtractor={item => item._id}
          renderItem={({ item }) => <CartItem item={item} />}
        />}
    </SafeAreaView>
  // </View>
  )
}

export default CartScreen
