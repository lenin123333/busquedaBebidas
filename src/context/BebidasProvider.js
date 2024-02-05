import { useState,useEffect,createContext } from "react";
import axios from "axios";

const BebidasContext = createContext()
const BebidasProvider = ({children}) => {


    const[bebidas,setBebidas] = useState([])
    const[nombre,setNombre] = useState('')
    const[categoria,setCategoria] = useState('')
    const [alerta, setAlerta] = useState({})
    const [busqueda,setBusqueda] = useState([])
    const [modalBebida, setModalBebida] = useState(false)
    const[idBebida,setIdBebida]= useState('')
    const[mostrarBebida,setMostrarBebida] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        if([idBebida].includes('') ){
            const consultarAPI = async()=>{
                const url= 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
                const {data} = await axios(url)
                setBebidas(data.drinks)
            }
            consultarAPI()
            return
        }else{
            
            const consultarBebida = async()=>{
                
                try {
                    const url= `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idBebida}`
                    const {data} = await axios(url)
                    setMostrarBebida(data.drinks[0])
                    
                } catch (error) {
                    console.log(error)
                }
               
            }
            consultarBebida()

        }
       
      },[idBebida]);
    
    const mostrarAlerta = alerta => {
        setAlerta(alerta)

    }

    const submitFormulario= async ()=>{
        setCargando(true)
        const url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
        try {
            const {data} = await axios(url)
            setBusqueda(data.drinks)
            
        } catch (error) {
            console.log(error)
            
        }finally{
            setCargando(false)
        }
    }

    const handleModalBebida = bebida => {
        setAlerta({})
        setIdBebida(bebida)
        setMostrarBebida({})
        setModalBebida(!modalBebida)
    }


    return(
        <BebidasContext.Provider
            value={{
               bebidas,
               setNombre,
               setCategoria,
               nombre,
               categoria,
               alerta,
               mostrarAlerta,
               submitFormulario,
               busqueda,
               handleModalBebida,
               modalBebida,
               mostrarBebida,
               cargando
            }}

        >
            {children}
        </BebidasContext.Provider>
    )
}

export{
    BebidasProvider
}

export default BebidasContext
