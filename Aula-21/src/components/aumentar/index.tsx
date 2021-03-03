import React from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Aumentar = () => {

  const dispatch = useDispatch()

  return (
          <button onClick={() => dispatch({ type: 'INCLUIR_QTD'})}> + </button>

  );
}

export default Aumentar;