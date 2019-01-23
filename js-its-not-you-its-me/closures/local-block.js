/* Esta función fallará porque la variable cheve solo esta disponible dentro de if */
function papaluchon () {
  if (false) {
    const cheve = 'Heineken'
  }
  return function huerco () {
    console.log(cheve)
  }
}

const huerco = papaluchon()
huerco()
