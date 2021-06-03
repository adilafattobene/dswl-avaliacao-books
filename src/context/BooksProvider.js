import React, { useState } from "react";

export const BooksContext = React.createContext();

const BooksProvider = (props) => {
  const [books, setBooks] = useState([
    {
      id: 0,
      name: "A liberdade é uma luta constante",
      author: "Angela Davis",
      pages: "144",
    },
    {
      id: 1,
      name: "Multidão: guerra e democracia na era do império",
      author: "Antonio Negri e Michael Hardt",
      pages: "540",
    },
    {
      id: 2,
      name: "A liberdade é uma luta constante",
      author: "Angela Davis",
      pages: "144",
    },
  ]);

  console.log("[BooksProvider]");

  const onBookSubmit = (book) => {
    let newBooks = [
      ...books,
      {
        id: books.length,
        name: book.name,
        author: book.author,
        pages: book.pages,
      },
    ];
    setBooks(newBooks);
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        onBookSubmit,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
