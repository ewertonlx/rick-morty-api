interface NavBarProps {
  onSearch: (query: string) => void;
}

export function NavBar({ onSearch }: NavBarProps) {
  return (
    <nav className="navbar bg-[#02afc5] p-4 flex justify-between items-center">
      <a className="text-white text-2xl font-bold" href="/">Rick&Morty</a>
      <input
        type="text"
        placeholder="Pesquisar personagem..."
        className="p-2 rounded-md w-60 outline-none"
        onChange={(e) => onSearch(e.target.value)}
      />
    </nav>
  );
}