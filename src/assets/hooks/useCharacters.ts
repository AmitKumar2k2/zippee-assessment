import { useEffect, useState, useMemo } from "react";
import { listAllPeople, getPlanet, getSpecies } from "../lib/swapi";
import type { Person, Planet, Species } from "../types/swapi";

export type PersonWithExtras = Person & {
  _id: string;
  homeworldData?: Planet;
  speciesData?: Species[];
};

export function useCharacters(
  page: number,
  nameQuery: string,
  homeworldFilter = "",
  speciesFilter = ""
) {
  const [allChars, setAllChars] = useState<PersonWithExtras[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const PER_PAGE = 10;

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);
        const people = await listAllPeople();

        const enriched = await Promise.all(
          people.map(async (p) => {
            const _id = p.url.split("/").filter(Boolean).pop()!;
            const homeworldData = await getPlanet(p.homeworld);
            const speciesData = await Promise.all(
              (p.species || []).map(getSpecies)
            );
            return { ...p, _id, homeworldData, speciesData };
          })
        );

        if (active) {
          setAllChars(enriched);
          setLoading(false);
        }
      } catch (err: unknown) {
        if (active) {
          const message =
            err instanceof Error ? err.message : "Something went wrong";
          setError(message);
          setLoading(false);
        }
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  const filtered = useMemo(() => {
    let list = allChars;
    if (nameQuery)
      list = list.filter((c) =>
        c.name.toLowerCase().includes(nameQuery.toLowerCase())
      );
    if (homeworldFilter)
      list = list.filter((c) => c.homeworldData?.name === homeworldFilter);
    if (speciesFilter)
      list = list.filter((c) =>
        c.speciesData?.some((s) => s.name === speciesFilter)
      );
    return list;
  }, [allChars, nameQuery, homeworldFilter, speciesFilter]);

  const paginated = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return filtered.slice(start, start + PER_PAGE);
  }, [filtered, page]);

  return { data: paginated, count: filtered.length, loading, error, allChars };
}
