import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BooksContext } from "../../../context/BooksProvider";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred";
  background: aliceblue;
  border-radius: 3px;
`;

const Button = styled.button`
  background: #add8e6;
  margin: 1em;
  padding: 0.5em;
  border: 2px solid #add8e6;
  border-radius: 3px;
`;

export default function IncludeForm() {
  const history = useHistory();
  const { onBookSubmit } = useContext(BooksContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    onBookSubmit({
      name: event.target.name.value,
      author: event.target.author.value,
      pages: event.target.pages.value,
    });

    //redirect
    history.push("/consultar");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="name"
        placeholder="Digite o nome do livro"
        minlength="5"
        maxlength="50"
        required
      />
      <Input
        type="text"
        id="author"
        placeholder="Digite o nome da(o) autora(o)"
        minlength="3"
        maxlength="100"
        required
      />
      <Input
        type="number"
        id="pages"
        placeholder="Digite o número de páginas"
      />
      <Button type="submit">CADASTRAR</Button>
    </form>
  );
}
