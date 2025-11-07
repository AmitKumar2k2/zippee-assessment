export type SwapiList<T> = {
count: number;
next: string | null;
previous: string | null;
results: T[];
};


export type Person = {
name: string;
height: string; // e.g., "172"
mass: string; // e.g., "77"
hair_color: string;
skin_color: string;
eye_color: string;
birth_year: string; // e.g., "19BBY"
gender: string;
homeworld: string; // URL
films: string[]; // URLs
species: string[]; // URLs
vehicles: string[];
starships: string[];
created: string; // ISO date
edited: string;
url: string; // e.g., https://swapi.dev/api/people/1/
};


export type Planet = {
name: string;
climate: string;
terrain: string;
population: string;
url: string;
};


export type Species = {
name: string;
classification: string;
language: string;
url: string;
};