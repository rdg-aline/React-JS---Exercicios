class BancoLocal {
  constructor() {
    this.minhaLista = JSON.parse(localStorage.getItem("lista-de-compras")) || []
  }

  ler() {
    this.minhaLista = JSON.parse(localStorage.getItem("lista-de-compras"))
  }

  gravar(item) {
    let lista = this.minhaLista || []
    lista.push(item)
    localStorage.setItem("lista-de-compras", JSON.stringify(lista))

   
  }
  
  //implementar
  apagar() {
      localStorage.clear()

  }

}

// 1 pega a lista do construtor
// 2 transforma o array em string no metodo de gravar
// 3 chama metodo ler, que devolve o array em formato de array usando o json.parse 