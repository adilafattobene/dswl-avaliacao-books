import React, { useEffect, useState } from "react";

export const BooksContext = React.createContext();

const BooksProvider = (props) => {
  const [books, setBooks] = useState([]);

  console.log("[BooksProvider]");

  useEffect(() => {
    console.log("[BooksProvider]", books);

    setBooks([
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
  }, [books]);

  return (
    <BooksContext.Provider
      value={{
        books,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
