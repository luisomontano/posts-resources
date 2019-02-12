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
  En este ejemplo podemos ver que nuestra clase API esta usando FetchAbstract directamente
  Pero estoy dependiendo directamente de una clase y aunque en cierto punto esta bien depender de abstracciones
  Lo ideal es no depender directamente de una clase sino de una abstracción que reciba como parametro
  No me importa su implementación solo sus métodos
  Y tambien hay que reescribir FetchAbstract para que sea una capa entre la implementación nativa y una abstracción
*/
