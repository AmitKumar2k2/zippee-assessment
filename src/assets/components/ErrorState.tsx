export default function ErrorState({ message }: { message: string }) {
return (
<div className="text-center p-6 bg-rose-50 rounded-xl border">
<p className="font-gilroy">Something went wrong.</p>
<p className="text-sm text-rose-700 mt-1">{message}</p>
</div>
);
}