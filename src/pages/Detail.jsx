import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext";

export default function Detail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites();

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();

        setPokemon({
          name: data.name,
          id: data.id,
          image: data.sprites.other["official-artwork"].front_default,
          types: data.types.map((type) => type.type.name),
          stats: data.stats,
          abilities: data.abilities,
          moves: data.moves.slice(0, 5), // Show only 5 moves for simplicity
        });
      } catch (err) {
        setError("Failed to load Pokémon details");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [name]);

  const isFavorite = favorites.includes(name);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-8">
        <button
          onClick={() => navigate("/")}
          className="bg-gray-800 text-white p-2 rounded-lg shadow-md hover:bg-gray-700 transition-all"
        >
          Back to List
        </button>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-64 h-64 rounded-xl shadow-lg"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-center text-gray-800">
              {pokemon.name}
            </h1>
            <p className="text-lg text-center text-gray-600">{`#${pokemon.id}`}</p>
            <div className="flex justify-center gap-2 mt-4">
              {pokemon.types.map((type) => (
                <span
                  key={type}
                  className="text-sm text-white px-4 py-1 rounded-full bg-black/50"
                >
                  {type}
                </span>
              ))}
            </div>
            <button
              onClick={() => toggleFavorite(name)}
              className={`mt-4 p-2 rounded-full text-white border-2 border-gray-300 ${
                isFavorite ? "bg-yellow-400" : "bg-gray-300"
              }`}
            >
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="stats-section">
            <h2 className="text-2xl font-bold text-gray-800">Stats</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {pokemon.stats.map((stat) => (
                <div
                  key={stat.stat.name}
                  className="p-4 bg-gray-100 rounded-lg shadow-md"
                >
                  <h3 className="text-center text-xl text-gray-800">
                    {stat.stat.name}
                  </h3>
                  <p className="text-center text-lg text-gray-600">
                    {stat.base_stat}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="abilities-section">
            <h2 className="text-2xl font-bold text-gray-800">Abilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              {pokemon.abilities.map((ability) => (
                <li
                  key={ability.ability.name}
                  className="text-lg text-gray-700"
                >
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="moves-section">
            <h2 className="text-2xl font-bold text-gray-800">Moves</h2>
            <ul className="list-disc pl-5 space-y-2">
              {pokemon.moves.map((move) => (
                <li key={move.move.name} className="text-lg text-gray-700">
                  {move.move.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
