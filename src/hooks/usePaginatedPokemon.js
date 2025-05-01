import { useEffect, useState } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=150";

export default function usePaginatedPokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        const data = await res.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (p) => {
            const res = await fetch(p.url);
            const details = await res.json();
            return {
              name: details.name,
              id: details.id,
              types: details.types.map((t) => t.type.name),
              image: details.sprites.front_default,
              stats: details.stats,
              abilities: details.abilities,
              moves: details.moves,
            };
          })
        );

        if (!cancelled) {
          setPokemons(pokemonDetails);
        }
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, []);

  return { pokemons, loading, error };
}
