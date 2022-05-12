import React from 'react'

const CounterContext = React.createContext()

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

const initialState = {
  counter: 0
}

/**
 * Reducer du contexte : On applique la logique associée à l'action
 * @param Object state : Etat précédent l'action
 * @param Object action : Action envoyée dans le contexte par la fonction dispatch
 * @returns state : État mis à jour
 */
const CounterReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        counter: state.counter - 1
      }
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

/**
 *
 * @param Object {children} : Enfants du contexte ;
 * @returns CounterProvider : Composant permettant l'accès à l'état global depuis les composants enfants
 */
const CounterProvider = ({ children }) => {
  // Similaire au useState() : On retourne l'état global et la méthode permettant sa mise à jour
  const [state, dispatch] = React.useReducer(CounterReducer, initialState)
  return <CounterContext.Provider value={{ state, dispatch }}>{children}</CounterContext.Provider>
}

const useCounter = () => {
  // => context = { state, dispatch } provenant du Provider
  const context = React.useContext(CounterContext)
  if (!context) throw new Error('useCounter must be used inside a CounterProvider')
  return context
}

export {
  useCounter,
  CounterProvider,
  actionTypes
}
