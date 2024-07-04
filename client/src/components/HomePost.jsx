import React from "react";

const HomePost = () => {
  return (
    <div className="w-full flex mt-8 space-x-2">
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          src="https://via.placeholder.com/300/09f/fff.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 Uses of Artificial Intelligence in Day to Day Life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@snehahishdev</p>
          <div className="flex space-x-2">
            <p>12/43/3434</p>
            <p>12:34</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          consequuntur doloremque libero unde voluptate tenetur natus, placeat
          recusandae, nulla in quam dolorum corrupti ducimus. Ipsam, voluptas
          nesciunt? Ipsa, nemo facilis!
        </p>
      </div>
    </div>
  );
};

export default HomePost;
