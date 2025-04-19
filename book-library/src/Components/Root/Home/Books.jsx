import React from "react";
import BookCard from "./BookCard";

const Books = ({ booksData }) => {
  return (
    <div>
      <div>
        <h1 className="text-5xl text-center">Books</h1>
      </div>

      <div className="grid grid-cols-3 gap-10 m-20">
        {booksData.map((bookData, index) => (
          <BookCard key={index} bookData={bookData}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
