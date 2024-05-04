import React from "react";

const ErrorPage = () => {
  return (
    <div className="w-full  flex items-center flex-col justify-center absolute top-[45%]">
      <h1 className="mb-6 text-3xl font-bold">Oops!</h1>
      <p className="mb-3 text-2xl font-semibold">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-2xl font-semibold"> Page not found</p>
    </div>
  );
};

export default ErrorPage;
