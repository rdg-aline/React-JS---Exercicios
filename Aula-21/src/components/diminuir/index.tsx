import React from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Diminuir = () => {

  const dispatch = useDispatch()

  return (
  
      <button onClick={() => dispatch({ type: 'DIMINUIR_QTD'})}> - </button>
    
  );
}

export default Diminuir;