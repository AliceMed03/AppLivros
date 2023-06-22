import './App.css';
import MenuSuperior from './components/MenuSuperior';
import InclusaoLivros from './components/InclusaoLivros';

//function App() {
const App = () => {
  return ( //tudo que vai no return é o que aparece na aplicação
    <>
    <MenuSuperior/>
    <InclusaoLivros/>
    </>
  );
}
//Serão criados 2 componentes para essa aplicação
//MenuSuperior.js
//InclusaoLivros.js
export default App;
