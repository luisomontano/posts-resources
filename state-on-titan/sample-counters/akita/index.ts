import { Store, StoreConfig, Query } from '@datorama/akita'
window.addEventListener('load', () => {

  const counterDisplay = document.getElementById('counter')
  const incrementCounterButton = document.getElementById('incrementCounterButton')
  const decrementCounterButton = document.getElementById('decrementCounterButton')

  interface AppState {
    counter: number
  }

  function createInitialState(): AppState {
    return {
      counter: 0
    }
  }

  @StoreConfig({ name: 'counter' })
  class AppStore extends Store<AppState> {
    constructor() {
      super(createInitialState())
    }
  }

  const appStore = new AppStore();


  incrementCounterButton.addEventListener('click', () => {
    appStore.update(state => ({
      counter: state.counter + 1
    }));
  })
  decrementCounterButton.addEventListener('click', () => {
    appStore.update(state => ({
      counter: state.counter - 1
    }));
  })

  class AppQuery extends Query<AppState> {
    counter$ = this.select(state => state.counter);

    constructor(protected store: AppStore) {
      super(store);
    }
  }

  const appQuery = new AppQuery(appStore)
  appQuery.counter$.subscribe((counterValue) => counterDisplay.textContent = counterValue.toString())
})