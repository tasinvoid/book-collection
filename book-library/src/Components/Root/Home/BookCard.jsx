import React from "react";
import { NavLink } from "react-router";

const BookCard = ({ bookData }) => {
 
  let { author, bookName, rating, category, tags, image, bookId } = bookData;
  return (
    <NavLink
      to={`books/${bookId}`}
      className="border border-gray-400 rounded-lg p-5"
    >
      <div className=" bg-gray-600 py-10 flex justify-center rounded-3xl">
        <img className="h-63 w-48 " src={image} alt="" />
      </div>
      <div className="flex gap-5 py-5">
        {tags.map((tag, index) => (
          <button key={index} className="btn btn-outline btn-info rounded-4xl ">
            {tag}
          </button>
        ))}
      </div>

      <p className="text-2xl font-bold"> {bookName}</p>
      <p className="text-xl font-semibold border-b-2 pb-5">By : {author}</p>
      <div className="flex justify-between py-4">
        <p className="text-lg">{category}</p>
        <p>
          <i className="fa-solid fa-star pr-2"></i>
          {rating}
        </p>
      </div>
    </NavLink>
  );
};

export default BookCard;
