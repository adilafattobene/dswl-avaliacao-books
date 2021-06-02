import React from "react";
import styled from "styled-components";

const BookCard = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  background-color: beige;
`;

export default function BookCardComponent(props) {
  return (
    <BookCard>
      <div>
        <p>{props.name}</p>
        <p>{props.author}</p>
        <p>{props.pages}</p>
        {props.children}
      </div>
    </BookCard>
  );
}
