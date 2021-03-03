import { call, put } from "redux-saga/effects"
import HeroisService from '../../../services/herois-service'
import { getHeroSuccess, getHeroFailure } from './actions'
import toast from 'react-hot-toast'


export function* getHerois(action: any): any{

  try {
    const response: any = yield call(HeroisService.getHerois, action.payload)
      yield put(getHeroSuccess(response.data.results))
      toast.success('Heroi encontrado com sucesso!');
    
  }
  catch (erro) {
    
    yield put(getHeroFailure())
    toast.error('Erro ao buscar herois')
  }
}



