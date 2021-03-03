const bancoLocal = new BancoLocal()
const lista = new Lista()


lista.botaoAdicionar.addEventListener("click", () => {
  bancoLocal.gravar(lista.inputItem.value)
  bancoLocal.ler()
  lista.adicionarNaLista(bancoLocal.minhaLista) // metodo para incluir no html
})

lista.botaoApagar.addEventListener("click", () => {
  // implementar 2 metodos : para apagar a lista e o local storage
    lista.apagarLista()
    bancoLocal.apagar()
})



window.addEventListener("DOMContentLoaded", () => {
  bancoLocal.ler()
  lista.adicionarNaLista(bancoLocal.minhaLista)
})