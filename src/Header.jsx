import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h2 className="logo">Restaurante das + +</h2>

      <nav className="nav">
        <button className="btn-acao" onClick={() => navigate("/listarreservas")}>
          Consultar Reservas
        </button>

        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/cadastro" className="nav-link">Cadastro</Link>
        <Link to="/perfil" className="nav-link">Perfil</Link>
        <Link to="/reservarmesas" className="nav-link">Reservar mesas</Link>
        <Link to="/cadastrarmesas" className="nav-link">Cadastrar mesas</Link>
        <Link to="/buscarmesas" className="nav-link">Buscar mesas</Link>
        <Link to="/listarreservas" className="nav-link">Listar reservas</Link>
        <Link to="/consultarmesas" className="nav-link">Consultar mesas</Link>
        <Link to="/cardapio" className="nav-link">Cardapio</Link>
      </nav>
    </header>
  );
}

export default Header;
