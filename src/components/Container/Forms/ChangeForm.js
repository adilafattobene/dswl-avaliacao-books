import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BooksContext } from "../../../context/BooksProvider";

export default function DeleteForm() {
  const history = useHistory();
  const { getBook, onBookChange } = useContext(BooksContext);
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState({});

  const handleSelectSubmit = (event) => {
    event.preventDefault();

    let oldBook = getBook(event.target.id.value);

    setOpen(true);
    setBook(oldBook);
  };

  const handleChangeSubmit = (event) => {
    event.preventDefault();

    console.log(book.id);
    onBookChange({
      id: book.id,
      name: event.target.name.value,
      author: event.target.author.value,
      pages: event.target.pages.value,
    });
    setOpen(false);
    //redirect
    history.push("/consultar");
  };

  return (
    <>
      <form onSubmit={handleSelectSubmit}>
        <input
          type="text"
          id="id"
          placeholder="Digite o id do livro a ser alterado"
        />
        <input type="submit" value="Alterar" />
      </form>
      <br />
      <br />
      <br />
      {open && (
        <form onSubmit={handleChangeSubmit}>
          <label for="name">Nome: </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={book.name}
            minlength="5"
            maxlength="50"
          />
          <br />
          <label for="name">Autor: </label>
          <input
            type="text"
            id="author"
            name="author"
            defaultValue={book.author}
          />
          <br />
          <label for="name">Páginas: </label>
          <input
            type="text"
            id="pages"
            name="pages"
            defaultValue={book.pages}
          />
          <br />
          <br />
          <button onClick={() => setOpen(false)}>Cancelar</button>
          <input type="submit" value="Alterar" />
        </form>
      )}
    </>
  );
}
