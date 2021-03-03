import React from 'react';
import { useSelector } from 'react-redux'
import {InterfaceEstadoInicial} from '../../types/InterfaceEstadoInicial'


const Ler  = () => {

  const quantidade = useSelector((state: InterfaceEstadoInicial) => state.qtd)

  return (

    <span>Quantidade: {quantidade}</span>
  );
}

export default Ler;