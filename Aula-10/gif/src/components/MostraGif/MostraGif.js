import React, { useState } from 'react'
//import React from 'react'  

function MostraGif() {
    const [gif, incluirGif] = useState(false)

    const mostrarGif = () => {
        incluirGif(true)
    }


    const mostrarBtn = () => {
        incluirGif(false)
    }

    const img = <img src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif" onClick={mostrarBtn} />
    return (
        <>
            {gif === true ? img : <button onClick={mostrarGif}>  Mostrar Gif  </button>}

        </>
    );
}
export default MostraGif

