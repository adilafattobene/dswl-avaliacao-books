import React, { useState } from "react";

export const BooksContext = React.createContext();

const BooksProvider = (props) => {
  const [books, setBooks] = useState([
    {
      id: 0,
      name: "A liberdade é uma luta constante",
      author: "Angela Davis",
      pages: "144",
      timestamp: Date(),
    },
    {
      id: 1,
      name: "Multidão: guerra e democracia na era do império",
      author: "Antonio Negri e Michael Hardt",
      pages: "540",
      timestamp: Date(),
    },
    {
      id: 2,
      name: "A liberdade é uma luta constante",
      author: "Angela Davis",
      pages: "144",
      timestamp: Date(),
    },
  ]);

  console.log("[BooksProvider]");
  console.log(books);

  const onBookSubmit = (book) => {
    let newBooks = [
      ...books,
      {
        id: books.length,
        name: book.name,
        author: book.author,
        pages: book.pages,
        timestamp: Date(),
      },
    ];
    setBooks(newBooks);
  };

  const onBookDelete = (id) => {
    let newBooks = books.slice();

    newBooks.splice(id, 1);
    setBooks(newBooks);
  };

  const getBook = (id) => {
    let newBooks = books.slice();

    return newBooks[id];
  };

  const onBookChange = (book) => {
    let id = Number(book.id);

    let newBooks = books.slice();

    newBooks[id] = {
      id: id,
      name: book.name,
      author: book.author,
      pages: book.pages,
      timestamp: Date(),
    };

    setBooks(newBooks);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        onBookSubmit,
        onBookDelete,
        getBook,
        onBookChange,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
