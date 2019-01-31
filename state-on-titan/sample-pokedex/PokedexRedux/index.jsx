import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import App from './App.jsx'

function PokedexRedux (props) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default PokedexRedux
