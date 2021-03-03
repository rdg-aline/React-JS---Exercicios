import api from "./api"

const HeroisService = {
  getHerois: (nome_heroi :any ) => api.get(`/search/${nome_heroi}`)
}

export default HeroisService




