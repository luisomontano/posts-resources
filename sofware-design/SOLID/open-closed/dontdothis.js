/* global fetch */
class API {
  get (url) {
    return fetch(url)
  }
}
module.exports = API
/*
  En este ejemplo podemos ver que nuestra clase API usando fetch de manera nativa
  Pero, ¿este comportamiento es correcto?, ¿Qué pasaría si fetch cambia?
  ¿Qué pasaría si usa esta módulo en lugares que no son el front donde fetch no existe de manera nativa?
*/
