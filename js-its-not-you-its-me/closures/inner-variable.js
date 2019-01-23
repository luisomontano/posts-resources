/* global cheve */
/* cheve se inicializa sin declarar y se convierte en global,
  pero myCheve solo esta declarada dentro de la función huerco */
function papaluchon () {
  function huerco () {
    const myCheve = 'Corona'
    console.log(cheve, myCheve)
  }
  cheve = 'Tecate'
  return huerco
}

const huerco = papaluchon()
huerco()
console.log(cheve)
