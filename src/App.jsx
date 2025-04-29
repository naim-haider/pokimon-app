import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import PokemonCard from "./components/PokimonCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        const data = await res.json();

        const promises = data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();

          return {
            id: details.id,
            name: details.name,
            image: details.sprites.front_default,
            types: details.types.map((t) => t.type.name),
          };
        });
        const results = await Promise.all(promises);
        console.log(results);
        setPokemonList(results);
        setFilteredList(results);
        setTypes(Array.from(new Set(results.flatMap((p) => p.types))).sort());
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch Pokémon.");
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    let filtered = pokemonList;

    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter((p) => p.types.includes(selectedType));
    }

    setFilteredList(filtered);
  }, [searchTerm, selectedType, pokemonList]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        types={types}
      />
      {loading && (
        <p className="text-center mt-10 text-lg">Loading Pokémon...</p>
      )}
      {error && <p className="text-center mt-10 text-red-500">{error}</p>}
      {!loading && !error && filteredList.length === 0 && (
        <p className="text-center mt-10 text-gray-600">No Pokémon found.</p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {filteredList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
