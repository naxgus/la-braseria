export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-black px-6 py-10 text-center">
      <p className="font-serif text-lg text-gold">La Brasería</p>
      <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-zinc-600 sm:text-xs sm:tracking-[0.3em]">
        © {new Date().getFullYear()} La Brasería
      </p>
    </footer>
  );
}
