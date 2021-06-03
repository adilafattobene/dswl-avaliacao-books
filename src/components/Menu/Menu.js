import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

export default function Menu() {
  return (
    <header>
      <nav>
        <List>
          <li>
            <Link to="/consultar">|| Livros ||</Link>
            <Link to="/incluir"> Cadastrar ||</Link>
            <Link to="/deletar"> Deletar ||</Link>
            <Link to="/alterar"> Alterar ||</Link>
          </li>
        </List>
      </nav>
    </header>
  );
}
