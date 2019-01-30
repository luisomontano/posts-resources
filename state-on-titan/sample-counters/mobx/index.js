/* global mobx */
function init () {
  const { observable } = mobx
  let state = observable.box(0)

  function updateCounter (value) {
    const counterElement = document.getElementById('counter')
    counterElement.textContent = value
  }

  const incrementCounter = mobx.action(() => {
    state.set(state.get() + 1)
  })

  const decrementCounter = mobx.action(() => {
    state.set(state.get() - 1)
  })

  mobx.reaction(
    () => state.get(),
    (count, reaction) => {
      updateCounter(count)
    }
  )

  document.getElementById('incrementCounterButton')
    .addEventListener('click', incrementCounter)

  document.getElementById('decrementCounterButton')
    .addEventListener('click', decrementCounter)
}
window.addEventListener('load', init)
