import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#2b3034] flex gap-80 items-center my-10 mx-20 rounded-2xl p-5">
      <div className="pl-20 flex flex-col gap-10"> 
        <h1 className="text-6xl font-bold">Books to freshen up your bookshelf</h1>
        <button className="btn btn-primary w-50">View The List</button>
      </div>
      <img className="h-120 w-120 rounded-2xl" src="src/assets/cover.jpg" alt="" />
    </div>
  );
};

export default Banner;
