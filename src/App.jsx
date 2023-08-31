
import Secao from './compoentes/Secao'
import Rodape from './compoentes/Rodape'
import viteLogo from './assets/vite.svg'
import Lista from './compoentes/Lista'


export default function App(){

  let viteAtl = 'Vite Logo'

  let nomes = ['Leo','Yuuki','Santos'];

  return(
    <>
      <Lista />
        <Secao  viteLogoProps={viteLogo} viteAtlProps={viteAtl} nomesProps={nomes}/>
      <Rodape />
      
    </>
  );

}
