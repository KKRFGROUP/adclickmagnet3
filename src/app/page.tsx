"use client";
import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-6xl font-extrabold text-red-500">404</h1>
        <h2 className="text-2xl mt-4 text-gray-800">Oops! Page not found.</h2>
        <p className="mt-4 text-gray-600 text-lg">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white border-t-blue-500 border-b-blue-500 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
