import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-2">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid"></div>
        <span className="text-xl text-gray-700 font-semibold">Loading...</span>
      </div>
    </div>
  );
}
