export function metersFromCm(value: string) {
const cm = parseFloat(value);
if (isNaN(cm)) return 'N/A';
return (cm / 100).toFixed(2);
}


export function kgFromString(value: string) {
const n = parseFloat(value.replace(',', ''));
return isNaN(n) ? 'N/A' : n.toString();
}


export function formatDateDDMMYYYY(iso: string) {
const d = new Date(iso);
const dd = String(d.getDate()).padStart(2, '0');
const mm = String(d.getMonth() + 1).padStart(2, '0');
const yyyy = d.getFullYear();
return `${dd}-${mm}-${yyyy}`;
}


export function idFromUrl(url: string) {
// e.g., https://swapi.dev/api/people/1/ -> 1
const parts = url.split('/').filter(Boolean);
return parts[parts.length - 1];
}