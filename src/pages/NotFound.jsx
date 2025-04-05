import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <img
        src="https://i.imgur.com/qIufhof.png" // You can replace this with your own image URL
        alt="404 Not Found"
        className="w-80 mb-6"
      />
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-2xl text-gray-600">Oops! Page not found</p>
      <p className="mt-2 text-gray-500">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
