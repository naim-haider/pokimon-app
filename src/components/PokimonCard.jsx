import React from "react";
export default function PokemonCard({ pokemon }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 text-center transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-200">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-24 h-24 mx-auto drop-shadow-sm"
      />
      <h2 className="capitalize text-xl font-semibold mt-2">{pokemon.name}</h2>
      <p className="text-gray-500 text-sm">ID: #{pokemon.id}</p>
      <div className="flex justify-center flex-wrap gap-2 mt-3">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getTypeColor(
              type
            )}`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

// Utility to color-type badges
function getTypeColor(type) {
  const colors = {
    fire: "bg-red-200 text-red-700",
    water: "bg-blue-200 text-blue-700",
    grass: "bg-green-200 text-green-700",
    electric: "bg-yellow-200 text-yellow-700",
    poison: "bg-purple-200 text-purple-700",
    bug: "bg-lime-200 text-lime-700",
    normal: "bg-gray-200 text-gray-700",
    ground: "bg-amber-200 text-amber-700",
    fairy: "bg-pink-200 text-pink-700",
    fighting: "bg-orange-200 text-orange-700",
    psychic: "bg-rose-200 text-rose-700",
    rock: "bg-stone-200 text-stone-700",
    ghost: "bg-indigo-200 text-indigo-700",
    dragon: "bg-violet-200 text-violet-700",
    ice: "bg-cyan-200 text-cyan-700",
    dark: "bg-zinc-200 text-zinc-700",
    steel: "bg-slate-200 text-slate-700",
    flying: "bg-sky-200 text-sky-700",
  };
  return colors[type] || "bg-gray-200 text-gray-700";
}
