/* global fetch */
import { FETCH_POKEMONS } from '../types'
import { addPokemons } from '../actions'
import { call, put, takeEvery } from 'redux-saga/effects'

export function * fetchPokemonsSaga () {
  const response = yield call(fetch, 'http://localhost:3000/pokemons')
  const pokemons = yield response.json()
  yield put(addPokemons(pokemons))
}

export default function * rootSaga () {
  yield takeEvery(FETCH_POKEMONS, fetchPokemonsSaga)
}
