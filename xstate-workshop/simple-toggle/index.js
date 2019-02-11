const { Machine, interpret } = require('xstate')
const toggleMachineConfig = {
  id: 'toggle',
  initial: 'inactive',
  context: {
    terms: false
  },
  states: {
    active: {
      on: {
        TOGGLE: 'inactive'
      }
    },
    inactive: {
      on: {
        TOGGLE: {
          target: 'active',
          cond: (ctx, event) => ctx.terms
        }
      }
    }
  }
}

const toggleMachine = Machine(toggleMachineConfig)

const serviceToggleMachine = interpret(toggleMachine).start()

module.exports = {
  toggleMachine,
  serviceToggleMachine
}
