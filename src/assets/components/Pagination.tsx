type Props = { page: number; total: number; perPage: number; onPage: (p: number) => void };
export default function Pagination({ page, total, perPage, onPage }: Props) {
const totalPages = Math.ceil(total / perPage);
return (
<div className="flex items-center justify-center gap-2 my-6">
<button className="px-3 py-1 font-gilroy rounded border" disabled={page<=1} onClick={() => onPage(page-1)}>Prev</button>
<span>Page {page} / {totalPages || 1}</span>
<button className="px-3 py-1  font-gilroy rounded border" disabled={page>=totalPages} onClick={() => onPage(page+1)}>Next</button>
</div>
);
}