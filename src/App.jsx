
import Secao from './compoentes/Secao'
import Rodape from './compoentes/Rodape'
import viteLogo from './assets/vite.svg'
import Lista from './compoentes/Lista'
import { Outlet } from 'react-router-dom';


export default function App(){

  return(
    <>
      <Lista />
        <Outlet/>
      <Rodape />
      
    </>
  );

}
