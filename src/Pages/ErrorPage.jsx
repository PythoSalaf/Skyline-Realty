import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full my-[3.5rem] flex items-center flex-col justify-center">
      <h1 className="my-6 text-3xl font-bold">Oops!</h1>
      <p className="mb-3 text-2xl font-semibold">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-2xl font-semibold"> Page not found</p>

      <div className="bg-primary mt-5 rounded-xl text-white px-3 py-1">
        <Link to="/" className="uppercase text-lg md:text-xl">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
