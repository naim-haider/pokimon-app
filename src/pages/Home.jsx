import React, { useState, useMemo, useCallback } from "react";
import usePaginatedPokemon from "../hooks/usePaginatedPokemon";
import PokemonCard from "../components/PokemonCard";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import TypeFilter from "../components/TypeFilter";
import SortSelect from "../components/SortSelect";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

const PER_PAGE_OPTIONS = [10, 20, 50];

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortBy, setSortBy] = useState("id");
  const [perPage, setPerPage] = useState(20);
  const [page, setPage] = useState(1);

  const { pokemons, loading, error } = usePaginatedPokemon();
  const navigate = useNavigate();

  const handleRandom = () => {
    const id = Math.floor(Math.random() * 150) + 1;
    navigate(`/pokemon/${id}`);
  };

  const filtered = useMemo(() => {
    let data = [...pokemons];
    if (search) {
      data = data.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (selectedTypes.length) {
      data = data.filter((p) =>
        selectedTypes.every((t) => p.types.includes(t))
      );
    }
    if (sortBy === "id") {
      data.sort((a, b) => a.id - b.id);
    } else if (sortBy === "name") {
      data.sort((a, b) => a.name.localeCompare(b.name));
    }
    return data;
  }, [pokemons, search, selectedTypes, sortBy]);

  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page, perPage]);

  const handlePageChange = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4">
        <SearchBar value={search} onChange={setSearch} />
        <TypeFilter selected={selectedTypes} onChange={setSelectedTypes} />
        <SortSelect value={sortBy} onChange={setSortBy} />
        <select
          className="border p-2 rounded"
          value={perPage}
          onChange={(e) => setPerPage(Number(e.target.value))}
        >
          {PER_PAGE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt} per page
            </option>
          ))}
        </select>
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
          onClick={handleRandom}
        >
          🎲 Random Pokémon
        </button>
      </div>
      {loading && <Loading />}
      {error && <ErrorMessage message={error.message} />}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {paginated.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalItems={filtered.length}
        itemsPerPage={perPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
