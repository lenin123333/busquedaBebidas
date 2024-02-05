import './App.css';
import Bebidas from './components/Bebidas';
import Formulario from './components/Formulario';
import ModalBebida from './components/ModalBebida';
import { BebidasProvider } from './context/BebidasProvider';

function App() {
  return (
    <BebidasProvider>
      <header className='py-5 text-center bg-red-500 text-white'>
        <h1 className=' text-6xl font-bold'>Buscador de Bebidas</h1>
      </header>
      
      <Formulario />
      <Bebidas />
      <ModalBebida/>
    
    
    </BebidasProvider>
  );
}

export default App;
