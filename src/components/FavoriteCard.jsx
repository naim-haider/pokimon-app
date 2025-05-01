import React, { useEffect, useState } from "react";

export default function FavoriteCard({ name }) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        setPokemon({
          name: data.name,
          image: data.sprites.front_default,
          abilities: data.abilities.map((a) => a.ability.name),
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [name]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error)
    return (
      <div className="text-red-600 text-center">Failed to load {name}</div>
    );

  return (
    <div className="bg-white border shadow-md rounded-xl p-4 hover:shadow-lg transition">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-24 h-24 mx-auto mb-2"
      />
      <h2 className="text-lg font-semibold text-center capitalize">
        {pokemon.name}
      </h2>
      <div className="mt-2">
        <h3 className="text-sm font-medium">Abilities:</h3>
        <ul className="list-disc list-inside text-sm">
          {pokemon.abilities.map((ability, index) => (
            <li key={index} className="capitalize">
              {ability}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
