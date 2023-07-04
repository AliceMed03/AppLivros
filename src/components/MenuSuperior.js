import { Link } from "react-router-dom";


const MenuSuperior = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">Controle Pessoal de Livros e Autores</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Inclusão de Livros</Link>
          </li>
          <li className="nav-item">
            <Link to="/autores" className="nav-link">Inclusão de Autores</Link>
          </li>
          <li className="nav-item">
            <Link to="/manutencao" className="nav-link">Manutenção Livros</Link>
          </li>
          <li className="nav-item">
            <Link to="/manutencaoAutores" className="nav-link">Manutenção Autores</Link>
          </li>
          <li className="nav-item">
            <Link to="/resumo" className="nav-link">Resumo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default MenuSuperior;
