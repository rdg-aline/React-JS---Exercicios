class Lista {
  constructor() {
    this.inputItem = document.querySelector("#item")
    this.botaoAdicionar = document.querySelector("#adicionar")
    this.lista = document.querySelector("#lista")
    this.botaoApagar = document.querySelector("#apagar")

  }

  apagarLista() {
    //implementar apagar do html
    lista.innerHTML = null

  }

  adicionarNaLista(minhaLista) {
    
    let listaHTML = ''
    
   minhaLista.map(valoresLocalStore => listaHTML += `<ul>  <li> ${valoresLocalStore}  </li>   </ul> <br> `)
    
   this.lista.innerHTML = listaHTML

    // minhaLista é o array que estou vem da lista 
    // quando vai no map ele transforma o paramatro valoresLocalStore em um novo array
    // e este novo array que imprimo no html
   


  }
}