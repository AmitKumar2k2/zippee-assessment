const MAP: Record<string, string> = {
human: 'bg-blue-100',
droid: 'bg-gray-100',
wookiee: 'bg-amber-100',
twilek: 'bg-purple-100',
};


function hashToColor(key: string) {
const colors = ['bg-rose-100','bg-sky-100','bg-emerald-100','bg-yellow-100','bg-fuchsia-100','bg-lime-100'];
let sum = 0;
for (let i=0;i<key.length;i++) sum += key.charCodeAt(i);
return colors[sum % colors.length];
}


export function colorForSpeciesName(name?: string) {
if (!name) return 'bg-slate-100';
const k = name.toLowerCase();
return MAP[k] || hashToColor(k);
}