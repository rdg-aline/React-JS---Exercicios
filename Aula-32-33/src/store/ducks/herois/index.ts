import { HeroArray, HeroTypes } from "./types"


const INITIAL_STATE: HeroArray = {
arrayHeroi: [],
 loading: false,
 erro:"sem erro",
}



const reducerHerois = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case HeroTypes.GET_HERO_REQUEST:
      return { 
        ...state, 
        loading: true
      } 
    case HeroTypes.GET_HERO_SUCCESS:
      return { 
        ...state, 
        arrayHeroi: action.payload,
        loading: false,
        erro: ""
      } 
    case HeroTypes.GET_HERO_FAILURE:
      return { 
        ...state, 
        loading: false,
        erro: action.payload.data
      } 
    default:
      return state
  }
}

export default reducerHerois
