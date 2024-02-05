import React from 'react'
import useBebidas from '../hook/useBebidas'
import Bebida from './Bebida'
import Spiner from './Spinner'

const Bebidas = () => {
    const { busqueda,cargando } = useBebidas()

    if (cargando) return <Spiner />

    return (
        <>
            {busqueda.length > 0 ?
                <div className='px-2 flex flex-wrap flex-row justify-center'>

                    {busqueda.map(bebida => (
                        <Bebida key={bebida.idDrink} bebida={bebida} />
                    ))
                    }

                </div> :

                <h2>Vacio</h2>
            }
            
        </>

    )
}

export default Bebidas
