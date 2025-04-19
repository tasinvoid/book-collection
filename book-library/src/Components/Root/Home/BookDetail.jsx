import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetail = () => {
  let data = useLoaderData();
  let { Id } = useParams();
  const currentBookId = parseInt(Id);

  let selectedBook = data.find((book) => book.bookId === currentBookId);

  let {
    image,
    author,
    bookName,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = selectedBook;
  return (
    <div className="  rounded-lg py-10 px-30 flex gap-60">
      <div className="h-fit w-full bg-gray-800 p-20 rounded-4xl">
        <img className="" src={image} alt="" />
      </div>

      <div>
        <p className="text-4xl font-bold pb-10"> {bookName}</p>
        <p className="text-xl font-semibold border-b-2 border-gray-700 pb-5">
          By : {author}
        </p>
        <p className="text-lg pt-5 border-b-2 border-gray-700 pb-5">
          {category}
        </p>
        <div className="flex gap-5 py-5">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="btn btn-outline btn-info rounded-4xl "
            >
              {tag}
            </button>
          ))}
        </div>
        <p className="py-10">
          <span className="text-xl font-bold pr-5">Review:</span>
          {review}
        </p>

        <div className="flex justify-between py-4"></div>

        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <tbody>
              <tr>
                <td className="text-xl">Rating :</td>
                <td className="text-xl">{rating}</td>
              </tr>
              <tr>
                <td className="text-xl">Pages :</td>
                <td className="text-xl">{totalPages} </td>
              </tr>
              <tr>
                <td className="text-xl">Publisher :</td>
                <td className="text-xl">{publisher}</td>
              </tr>
              <tr>
                <td className="text-xl">Year :</td>
                <td className="text-xl">{yearOfPublishing}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex gap-5 my-10">
          <button class="btn btn-active btn-info">Buy Now</button>
          <button class="btn btn-active btn-info">Wish List</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
