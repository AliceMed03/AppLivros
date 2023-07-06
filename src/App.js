import './App.css';
import MenuSuperior from './components/MenuSuperior';
import InclusaoLivros from './components/InclusaoLivros';
import ManutencaoLivros from './components/ManutencaoLivros';
import ResumoLivros from './components/ResumoLivros';
import InclusaoAutores from './components/InclusaoAutores';
import ManutencaoAutores from './components/ManutencaoAutores';
import InclusaoEditora from './components/InclusaoEditora';
import ManutencaoEditora from './components/ManutencaoEditora';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return(  //tudo que vai aqui no return é o que aparece na aplicação
    <>
      <MenuSuperior/>
      <Routes>
        <Route path="/" element={<InclusaoLivros/>}/>
        <Route path="/manutencao" element={<ManutencaoLivros/>}/>
        <Route path="/resumo" element={<ResumoLivros/>}/>
        <Route path="/autores" element={<InclusaoAutores/>}/>
        <Route path="/manutencaoAutores" element={<ManutencaoAutores/>}/>
        <Route path="/editora" element={<InclusaoEditora/>}/>
        <Route path="/manutencaoEditora" element={<ManutencaoEditora/>}/>
      </Routes>
    </>
  )
}
//Serão criados 2 componentes para essa aplicação
//MenuSuperior.js
//InclusaoLivros.js
export default App;