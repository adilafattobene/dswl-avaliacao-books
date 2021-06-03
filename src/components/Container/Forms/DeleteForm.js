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

export default function DeleteForm() {
  const history = useHistory();
  const { onBookDelete } = useContext(BooksContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    onBookDelete(event.target.id.value);

    //redirect
    history.push("/consultar");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="id"
        placeholder="Digite o id do livro a ser removido"
      />
      <Button type="submit">REMOVER</Button>
    </form>
  );
}
