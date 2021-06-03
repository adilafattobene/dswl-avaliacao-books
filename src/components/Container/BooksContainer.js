import React, { useContext } from "react";
import { BooksContext } from "../../context/BooksProvider";
import BookCardComponent from "../Book/BookCard/BookCard";
import RootContainer from "./RootContainer";

export default function BooksContainer() {
  const { books } = useContext(BooksContext);

  return (
    <RootContainer>
      {books.map((book, index) => {
        return (
          <div key={book.id}>
            <BookCardComponent
              id={book.id}
              name={book.name}
              author={book.author}
              pages={book.pages}
            />
          </div>
        );
      })}
    </RootContainer>
  );
}
