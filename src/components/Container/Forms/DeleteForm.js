import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BooksContext } from "../../../context/BooksProvider";

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
      <input
        type="text"
        id="id"
        placeholder="Digite o id do livro a ser removido"
      />
      <input type="submit" value="Remover" />
    </form>
  );
}
