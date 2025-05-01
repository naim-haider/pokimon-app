import React from "react";
import { useFavorites } from "../contexts/FavoritesContext";
import FavoriteCard from "../components/FavoriteCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="text-center text-xl p-6">
        You have no favorite Pokémon yet!
      </div>
    );
  }

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Favorite Pokémon</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {favorites.map((name) => (
          <FavoriteCard key={name} name={name} />
        ))}
      </div>
    </div>
  );
}
