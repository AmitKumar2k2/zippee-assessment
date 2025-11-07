import { colorForSpeciesName } from "../lib/speciesColors";
import { idFromUrl } from "../lib/format";
import type { PersonWithExtras } from "../hooks/useCharacters";

export default function CharacterCard({
  person,
  onOpen,
}: {
  person: PersonWithExtras;
  onOpen: (p: PersonWithExtras) => void;
}) {
  const id = idFromUrl(person.url);
  const speciesName = person.speciesData?.[0]?.name;
  const bg = colorForSpeciesName(speciesName);

  return (
    <button
      onClick={() => onOpen(person)}
      className={`rounded-xl text-left p-4 shadow ${bg} hover:shadow-lg transition`}
    >
      <img
        src={`https://picsum.photos/seed/${id}/400/240`}
        alt={person.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />

      <h3 className="text-lg font-gilroy">{person.name}</h3>
      <p className="text-sm opacity-70">
        {speciesName || "Unknown species"}
      </p>
    </button>
  );
}
