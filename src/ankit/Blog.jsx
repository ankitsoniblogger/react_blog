import React from "react";

const Blog = () => {
  return (
    <>
      <div className=" w-96 mx-auto p-4 border rounded-md border-gray-700">
        <img
          className="h-72 w-full rounded-md"
          src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b"
          alt="blog Images"
        />
        <h2 className="mt-2 mb-4 font-text  font-medium text-base">
          Ready to see the world? Let us help you plan your next adventure.
        </h2>
        <hr className="rounded-full" />
        <div className="flex items-center justify-between">
          <div className="mt-2 flex items-center">
            <img
              className="h-6 w-6 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
              alt="avatar"
            />
            <p className="font-text mx-2 text-xs">ankitsoniblogger</p>
          </div>
          <div className=" mt-2 flex items-center">
            <i className="fa-regular fa-comments"></i>
            <p className="font-text mx-2 text-xs"> 25 comments</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
