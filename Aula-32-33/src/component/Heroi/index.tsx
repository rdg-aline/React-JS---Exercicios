import React, { useRef } from 'react';
import { Input, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { Herois } from '../../store/ducks/herois/types'
import { getHeroRequest } from '../../store/ducks/herois/actions'
import { Toaster } from 'react-hot-toast'


function Heroi() {

    const meu_heroi = useRef<HTMLInputElement>(null)

    const dispatch = useDispatch()

    const buscaHerois = () => {
        dispatch(getHeroRequest(meu_heroi?.current?.value))
    }

    const { loading, arrayHeroi } = useSelector((state: any) => state.reducerHerois)



    return (
        <div>

            <div>
                <h2>Herois </h2>

                <input type="text" placeholder="busque seu heroi" ref={meu_heroi} />
                <br />


                <Button
                    color="primary"
                    variant="outlined"
                    onClick={buscaHerois}>
                    Ver meu Heroi
            </Button>

            </div>

            <Toaster />

            { loading && <p>Aguarde ...</p>}



            {
                arrayHeroi !==null &&
                arrayHeroi.map((item: Herois) => (
                    <div key={item.id}>
                        <h3> {item.name}</h3>
                        <p>Trabalho:{item.work.occupation}</p>
                        <p>
                            <img src={item.image.url} alt="heroi img" />

                        </p>
                        <p>{item.biography.fullName}</p>
                        <p> {item.biography.placeofbirth}</p>

                    </div>

                ))

            }

        </div>
    )
}


export default Heroi
