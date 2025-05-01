import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";

export default function PokemonCard({ pokemon }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.includes(pokemon.name);

  return (
    <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition relative">
      <button
        className="absolute right-2 top-2 text-xl"
        onClick={() => toggleFavorite(pokemon.name)}
      >
        {isFav ? "⭐" : "☆"}
      </button>
      <Link to={`/pokemon/${pokemon.name}`}>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-24 h-24 mx-auto"
        />
        <h3 className="text-center text-lg font-semibold capitalize mt-2">
          #{pokemon.id} {pokemon.name}
        </h3>
        <div className="flex justify-center gap-2 mt-2">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className="px-2 py-1 rounded text-sm bg-gray-200 capitalize"
            >
              {type}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
}
