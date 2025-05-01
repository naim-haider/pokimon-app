import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-red-500 text-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Pokédex Explorer
          </Link>
          <nav className="flex gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/favorites" className="hover:underline">
              Favorites
            </Link>
            <Link to="/compare" className="hover:underline">
              Compare
            </Link>
          </nav>
        </div>
      </header>
      <main className="py-6 px-4">{children}</main>
    </div>
  );
}
