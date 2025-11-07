import { getCached, setCached } from "./cache";
import type { SwapiList, Person, Planet, Species } from "../types/swapi";

const API = "https://swapi.dev/api";

async function fetchJSON<T>(url: string): Promise<T> {
  const cached = getCached<T>(url);
  if (cached) return cached;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  setCached(url, data);
  return data;
}

export async function listAllPeople() {
  const cacheKey = "all_people";
  const cached = getCached<Person[]>(cacheKey);
  if (cached) return cached;

  let all: Person[] = [];
  let next = `${API}/people/?page=1`;

  while (next) {
    const res = await fetch(next);
    const json = await res.json();
    all = [...all, ...json.results];
    next = json.next;
  }

  setCached(cacheKey, all);

  return all;
}


export function listPeople(page: number) {
  return fetchJSON<SwapiList<Person>>(`${API}/people/?page=${page}`);
}

export async function getPlanet(url: string) {
  return fetchJSON<Planet>(url);
}

export async function getSpecies(url: string) {
  return fetchJSON<Species>(url); 
}
