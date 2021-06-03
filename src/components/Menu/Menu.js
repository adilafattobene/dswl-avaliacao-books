import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 30px;
  width: 100%;
  text-align: center;
  background: aliceblue;
  border: 1px solid #add8e6;
`;

const Item = styled.li`
  display: inline-block;
  margin: 0;
  padding: 15px;
`;

export default function Menu() {
  return (
    <div>
      <nav>
        <List>
          <Item>
            <Link to="/consultar">LIVROS</Link>
          </Item>

          <Item>
            <Link to="/incluir">CADASTRAR</Link>
          </Item>

          <Item>
            <Link to="/deletar">DELETAR</Link>
          </Item>

          <Item>
            <Link to="/alterar">ALTERAR</Link>
          </Item>
        </List>
      </nav>
    </div>
  );
}
