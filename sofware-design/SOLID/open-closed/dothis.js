/* global fetch */
class FetchAbstract {
  get (url) {
    return fetch(url)
  }
}
class API {
  constructor () {
    this.fetch = new FetchAbstract()
  }

  get (url) {
    return this.fetch.get(url)
  }
}

module.exports = API
/*
  La clase API sigue teniendo una sola responsabilidad
  Ahora depende solo de FetchAbstract
  Con esto podemos configurar la forma en que se procesan las respuestas sin afectar a la clase API
*/
