import {  takeLatest, all } from "redux-saga/effects"
import{HeroTypes} from './herois/types'
import{getHerois} from './herois/saga'


export default function* rootSaga() : any {
  return yield all([
    takeLatest(HeroTypes.GET_HERO_REQUEST,getHerois),
  ])
}


