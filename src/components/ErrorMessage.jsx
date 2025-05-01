import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <div className="p-4 mb-4 bg-red-100 text-red-700 rounded border border-red-500">
      <h2 className="font-bold text-lg">Something went wrong!</h2>
      <p className="mt-2">{message}</p>
    </div>
  );
}
