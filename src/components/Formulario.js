import React from 'react'
import useBebidas from '../hook/useBebidas'
import Alerta from './Alerta'

const Formulario = () => {
    const {bebidas,setNombre,setCategoria,nombre,categoria,mostrarAlerta,alerta,submitFormulario} = useBebidas()
   

    const handleSubmit=  e =>{
        e.preventDefault()

        if([nombre,categoria].includes('')){
            mostrarAlerta({
                msg:'Todos los campos son Obligatorios',
                type: 'error'
              })
              return
        }
        submitFormulario()
    }

    const {msg} = alerta
    return (

        <form onSubmit={handleSubmit} className=' p-5 mx-5 space-y-5'>
             {msg && <Alerta alerta={alerta} />}
            <div className='flex  space-x-5'>
                <div className=' flex flex-col w-1/2 '>
                    <label className='text-lg'>Nombre bebida</label>
                    <input
                    onChange={e=>setNombre(e.target.value)}
                        type="text"
                        className="p-2 border border-gray-700 rounded-lg"
                        placeholder="Ingresa Nombre de Bebida"
                    />
                </div>
                <div className=' flex flex-col w-1/2'>
                    <label className='text-lg'>Categoria bebida</label>
                    <select
                    onChange={e=>setCategoria(e.target.value)}
                    className="p-2 border border-gray-700 rounded-lg text-center">
                        <option>-- Seleciona --</option>
                        {bebidas.map(bebida => (
                             <option key={bebida.index} value={bebida.strCategory}>{bebida.strCategory}</option>
                        ))}
                    </select>
                </div>
            </div>
            
            <div className='flex justify-end'>
            <input
                type='submit'
                className= '  bg-red-500 hover:bg-red-600 py-2 text-white font-bold text-md my-3 w-1/3 rounded-lg  '
                value="Buscar Bebidas"
            />
            </div>
        </form>

    )
}

export default Formulario
