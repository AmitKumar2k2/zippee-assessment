import type { PersonWithExtras } from "../hooks/useCharacters";

type FiltersProps = {
  allChars: PersonWithExtras[];
  homeworld: string;
  species: string;
  onHomeworldChange: (value: string) => void;
  onSpeciesChange: (value: string) => void;
};

export default function Filters({
  allChars,
  homeworld,
  species,
  onHomeworldChange,
  onSpeciesChange,
}: FiltersProps) {
  // Get unique homeworlds and species for dropdowns
  const homeworlds = Array.from(
    new Set(allChars.map((c) => c.homeworldData?.name).filter(Boolean))
  );

  const speciesList = Array.from(
    new Set(
      allChars
        .flatMap((c) => c.speciesData?.map((s) => s.name))
        .filter(Boolean)
    )
  );

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {/* Homeworld Filter */}
      <select
        value={homeworld}
        onChange={(e) => onHomeworldChange(e.target.value)}
        className="p-2 rounded-lg border dark:bg-gray-800 dark:text-white"
      >
        <option value="">🌍 All Homeworlds</option>
        {homeworlds.map((h) => (
          <option key={h} value={h}>
            {h}
          </option>
        ))}
      </select>

      {/* Species Filter */}
      <select
        value={species}
        onChange={(e) => onSpeciesChange(e.target.value)}
        className="p-2 rounded-lg border dark:bg-gray-800 dark:text-white"
      >
        <option value="">🧬 All Species</option>
        {speciesList.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}
