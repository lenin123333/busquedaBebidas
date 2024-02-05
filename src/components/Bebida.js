import React from 'react'
import useBebidas from '../hook/useBebidas'

const Bebida = ({bebida}) => {

    const{handleModalBebida} = useBebidas()
  return (
    <div className='mx-2 my-2 p-2 border w-1/5 '>
      <img src={bebida.strDrinkThumb} alt={bebida.strDrink} />
      <p className=' text-center text-2xl font-bold truncate ' >{bebida.strDrink}</p>
      <button
        className='w-full bg-amber-500 hover:bg-amber-600 p-2 text-white font-bold text-lg '
        onClick={()=>handleModalBebida(bebida.idDrink)}
      >Ver Receta</button>
    </div>
  )
}

export default Bebida
