import React, { useContext } from "react";
import { BooksContext } from "../../context/BooksProvider";
import BookCardComponent from "../Book/BookCard/BookCard";

export default function BooksContainer() {
  const { books } = useContext(BooksContext);

  return (
    <div>
      {books.map((book, index) => {
        return (
          <div>
            <BookCardComponent
              id={book.id}
              name={book.name}
              author={book.author}
              pages={book.pages}
            >
              component_description
            </BookCardComponent>
          </div>
        );
      })}
    </div>
  );
}