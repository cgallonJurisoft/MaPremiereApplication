/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  useColorScheme
} from 'react-native'
import { AuthProvider } from './contexts/AuthContext'

// import Clock from './components/Clock';
// import ClockFunction from './components/ClockFunction'
import MainNavigation from './navigation/Navigator'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthProvider>
        <NavigationContainer>
          {/* <ClockFunction interval={1000} />
          <ClockFunction interval={3000} />
          <ClockFunction interval={5000} />
          <ClockFunction interval={10000} /> */}
          <MainNavigation />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  )
}

export default App
