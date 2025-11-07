import { metersFromCm, kgFromString, formatDateDDMMYYYY } from "../lib/format";
import type { PersonWithExtras } from "../hooks/useCharacters";

export default function CharacterModal({
  person,
  onClose,
}: {
  person: PersonWithExtras | null;
  onClose: () => void;
}) {
  if (!person) return null;

  const { name, height, mass, created, birth_year, films, homeworldData } =
    person;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 px-3 py-1 border rounded"
        >
          Close
        </button>

        <h2 className="text-2xl font-gilroy  mb-4">{name}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><b>Height:</b> {metersFromCm(height)} m</p>
            <p><b>Mass:</b> {kgFromString(mass)} kg</p>
            <p><b>Birth Year:</b> {birth_year}</p>
            <p><b>Date Added:</b> {formatDateDDMMYYYY(created)}</p>
            <p><b>Films:</b> {films.length}</p>
          </div>

          <div>
            <p className="font-gilroy mb-1">Homeworld:</p>
            <div className="border rounded-xl p-3 bg-gray-50">
              <p><b>Name:</b> {homeworldData?.name}</p>
              <p><b>Climate:</b> {homeworldData?.climate}</p>
              <p><b>Terrain:</b> {homeworldData?.terrain}</p>
              <p><b>Population:</b> {homeworldData?.population}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
