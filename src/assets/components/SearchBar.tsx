export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string)=>void }) {
return (
<input
className="font-gilroy w-full md:w-80 border rounded-xl px-4 py-2"
placeholder="Search by name…"
value={value}
onChange={e=>onChange(e.target.value)}
/>
);
}