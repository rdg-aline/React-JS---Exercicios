import React ,{useState,useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsuario } from '../store/ducks/Usuario/actions'
import { InterfaceUserState } from '../store/ducks/Usuario/types'


function useReducerUser () {
  const dispatch = useDispatch()
  const { name }= useSelector((state:InterfaceUserState) => state.user)

  useEffect(() => {
      dispatch({ type: 'GET_USER' }); 
      }, []);

  return [name]
}
export default useReducerUser


