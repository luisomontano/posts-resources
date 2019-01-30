/* global Redux */
function init () {
  const { createStore } = Redux

  function updateCounter (value) {
    const counterElement = document.getElementById('counter')
    counterElement.textContent = value
  }

  function counterReducer (state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }

  let store = createStore(counterReducer)

  store.subscribe(() => updateCounter(store.getState()))

  function incrementCounter () {
    store.dispatch({ type: 'INCREMENT' })
  }

  function decrementCounter () {
    store.dispatch({ type: 'DECREMENT' })
  }

  document.getElementById('incrementCounterButton')
    .addEventListener('click', incrementCounter)

  document.getElementById('decrementCounterButton')
    .addEventListener('click', decrementCounter)
}
window.addEventListener('load', init)
