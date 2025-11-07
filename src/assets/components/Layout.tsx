export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-gilroy text-xl">Star Wars Characters</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>

      {/* Footer */}
      <footer className="text-center text-xs py-6 opacity-60">
        © 2025 Amit Kumar — SWAPI Assignment
      </footer>
    </div>
  );
}
