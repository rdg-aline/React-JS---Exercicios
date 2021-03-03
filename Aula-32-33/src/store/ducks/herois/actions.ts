import { action } from "typesafe-actions"
import { HeroTypes,Herois } from "./types"


export const getHeroRequest = (nome_heroi: any) => action(HeroTypes.GET_HERO_REQUEST, nome_heroi)
export const getHeroSuccess = (data: Herois[]) => action(HeroTypes.GET_HERO_SUCCESS,data)
export const getHeroFailure = () => action(HeroTypes.GET_HERO_FAILURE)






