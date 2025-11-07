import { useState, useEffect } from "react";
import { useCharacters } from "../../hooks/useCharacters";
import useDebounce from "../../hooks/useDebounce";

import Filters from "../../components/Filters";
import CharacterCard from "../../components/CharacterCard";
import CharacterModal from "../../components/CharacterModal";
import SearchBar from "../../components/SearchBar";
import Pagination from "../../components/Pagination";
import SkeletonCard from "../../components/SkeletonCard";

import type { PersonWithExtras } from "../../hooks/useCharacters";

const PER_PAGE = 10;

export default function CharactersPage() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<PersonWithExtras | null>(null);
  const [homeworldFilter, setHomeworldFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");

  const debouncedQuery = useDebounce(query, 400);
  const { data, loading, count, allChars } = useCharacters(
    page,
    debouncedQuery,
    homeworldFilter,
    speciesFilter
  );

  useEffect(() => {
    setPage(1);
  }, [debouncedQuery, homeworldFilter, speciesFilter]);

  return (
    <div className="px-4 pb-10">
      <div className="mb-4">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <Filters
        allChars={allChars}
        homeworld={homeworldFilter}
        species={speciesFilter}
        onHomeworldChange={setHomeworldFilter}
        onSpeciesChange={setSpeciesFilter}
      />

      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <>
          {data.length === 0 ? (
            <p className="text-center font-gilroy text-gray-500 dark:text-gray-400 mt-10">
              No characters found.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {data.map((person) => (
                <CharacterCard
                  key={person._id}
                  person={person}
                  onOpen={setActive}
                />
              ))}
            </div>
          )}

          {data.length > 0 && (
            <Pagination
              page={page}
              total={count}
              perPage={PER_PAGE}
              onPage={setPage}
            />
          )}
        </>
      )}

      <CharacterModal person={active} onClose={() => setActive(null)} />
    </div>
  );
}
