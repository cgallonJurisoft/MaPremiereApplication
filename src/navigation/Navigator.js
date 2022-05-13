import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/HomeScreen'
import RestaurantsListScreen from '../screens/RestaurantsListScreen'
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import { useAuth } from '../contexts/AuthContext'
import LoadingScreen from '../screens/LoadingScreen'
import CartScreen from '../screens/CartScreen'
import CounterScreen from '../screens/CounterScreen'
import { useCart } from '../contexts/CartContext'
// On instancie le navigation empilée
const AuthNavigator = createNativeStackNavigator()

// On instancie le navigation empilée
const RestaurantsNavigator = createNativeStackNavigator()

// On instancie le navigation par onglets
const TabNavigator = createBottomTabNavigator()

const AuthNavigation = () => {
  return (
    <AuthNavigator.Navigator screenOptions={{ headerShown: false }}>
      <AuthNavigator.Group>
        {/* <AuthNavigator.Screen name='Counter' component={CounterScreen} /> */}
        <AuthNavigator.Screen name='Login' component={LoginScreen} />
        <AuthNavigator.Screen name='Register' component={RegisterScreen} />
      </AuthNavigator.Group>
    </AuthNavigator.Navigator>
  )
}

const RestaurantsNavigation = () => {
  return (
    <RestaurantsNavigator.Navigator
      initialRouteName='RestaurantsList'
      // screenOptions={{ headerShown: false }}
    >
      <RestaurantsNavigator.Group>
        <RestaurantsNavigator.Screen
          name='RestaurantsListScreen'
          component={RestaurantsListScreen}
          options={{ title: 'Restaurants' }}
        />
        <RestaurantsNavigator.Screen
          name='RestaurantDetails'
          component={RestaurantDetailsScreen}
          options={{ title: 'Chargement…' }}
        />
      </RestaurantsNavigator.Group>
    </RestaurantsNavigator.Navigator>
  )
}

// On créé notre navigateur avec nos écrans
const MainNavigation = () => {
  const { state } = useCart()

  return (
    <TabNavigator.Navigator
      initialRouteName='Restaurants'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline'
              break
            case 'Restaurants':
              iconName = focused ? 'restaurant' : 'restaurant-outline'
              break
            case 'Counter':
              iconName = focused ? 'add-circle' : 'add-circle-outline'
              break
            default:
              break
          }
          if (route.name.startsWith('Panier')) {
            iconName = focused ? 'cart' : 'cart-outline'
          }
          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#0bc',
        tabBarInactiveTintColor: '#aaa'
      })}
    >
      <TabNavigator.Group>
        <TabNavigator.Screen name='Home' component={HomeScreen} />
        <TabNavigator.Screen name='Counter' component={CounterScreen} />
        <TabNavigator.Screen
          options={{ headerShown: false }}
          name='Restaurants'
          component={RestaurantsNavigation}
        />
        <TabNavigator.Screen name={`Panier (${state.cartContent.length})`} component={CartScreen} />
      </TabNavigator.Group>
    </TabNavigator.Navigator>
  )
}

const Navigator = () => {
  const { state: { loading, user, token } } = useAuth()

  if (loading) {
    return <LoadingScreen />
  } else {
    return (user && token) ? <MainNavigation /> : <AuthNavigation />
  }
}

export default Navigator
