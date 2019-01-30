/* global XState, XStateInterpreter */
const { Machine, assign } = XState
const { interpret } = XStateInterpreter
window.addEventListener('load', () => {
  const counterDisplay = document.getElementById('counter')
  const incrementCounterButton = document.getElementById('incrementCounterButton')
  const decrementCounterButton = document.getElementById('decrementCounterButton')

  const counterMachine = Machine({
    id: 'counter',
    context: {
      count: 0
    },
    initial: 'counting',
    states: {
      counting: {
        onEntry: ['display'],
        on: {
          INC: { actions: 'increment', target: 'counting' },
          DEC: { actions: 'decrement', target: 'counting' }
        }
      }
    }
  }, {
    actions: {
      display: (ctx, event) => {
        counterDisplay.textContent = ctx.count
      },
      increment: assign({ count: ctx => ctx.count + 1 }),
      decrement: assign({ count: ctx => ctx.count - 1 })
    }
  })

  const counterService = interpret(counterMachine)
    .start()

  incrementCounterButton.addEventListener('click', () => {
    counterService.send('INC')
  })
  decrementCounterButton.addEventListener('click', () => {
    counterService.send('DEC')
  })
})
