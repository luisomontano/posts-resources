/* global fetch */
class API {
  get (url) {
    return fetch(url)
  }
}
module.exports = API
/*
  Ahora la clase API solo tiene la responsabilidad de obtener un recurso
  No va mas allá, quizás al final generemos muchos archivos, pero el testing será más sencillo
  Las partes a modificar son menos y si algo cambia serán modificaciones que se pueden manejar
*/
