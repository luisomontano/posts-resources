/* global fetch */
class API {
  get (url) {
    return fetch(url)
      .then(response => response.json())
  }
}
module.exports = API
/*
  La única tarea de nuestra clase API debería solo obtener recurso
  Debería tener solo esa responsabilidad, esa responsabilidad pudiera incluir otras piezas
  Pero no debería limitar a quien usa esta clase
  En la linea 5 estamos obteniendo el recurso y transformandolo a JSON
  Pero ¿que tal si no quisieramos eso, si quieramos otro formato?
  Al tener más de una responsabilidad hacemos a nuestro código menos flexible
*/
