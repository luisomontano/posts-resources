/* global fetch */

export function getNativeFetch () {
  if (window) {
    return window.fetch
  } else {
    return require('fetch') // Suponiendo que hay un módulo fetch
  }
}

export class FetchAbstract {
  constructor (nativeFetch) {
    this.fetch = nativeFetch
  }

  get (url) {
    return fetch(url)
  }
}

export class API {
  constructor (fetch) {
    this.fetch = fetch
  }

  get (url) {
    return this.fetch(url)
  }
}

/*
  La clase API sigue teniendo una sola responsabilidad
  FetchAbstract ahora solo es una abstracción que recibe un objeto nativo que implementa una interfaz fetch
  Y gracias al método para obtener el fetch nativo podemos obtener el objeto que implementa una interfaz fetch
  Al momento de hacer testing como todos los objetos requeridos son parametros, podemos hacer mocks más fáciles
*/
