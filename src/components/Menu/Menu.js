import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/consultar"> Livros </Link>
            <Link to="/incluir"> Cadastrar </Link>
            <Link to="/deletar"> Deletar </Link>
            <Link to="/alterar"> Alterar </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
