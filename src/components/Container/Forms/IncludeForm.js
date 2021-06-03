import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { BooksContext } from "../../../context/BooksProvider";

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
      <input
        type="text"
        id="name"
        placeholder="Digite o nome do livro"
        minlength="5"
        maxlength="50"
        required
      />
      <input
        type="text"
        id="author"
        placeholder="Digite o nome da(o) autora(o)"
        minlength="3"
        maxlength="100"
        required
      />
      <input
        type="number"
        id="pages"
        placeholder="Digite o número de páginas"
      />
      <input type="submit" value="Cadastrar" />
    </form>
  );
}
