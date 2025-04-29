import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-500 to-yellow-500 p-4 shadow-md text-white text-center">
      <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
        <span>🔴</span> Pokédex
      </h1>
    </header>
  );
}
