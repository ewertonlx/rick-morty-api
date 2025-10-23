import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { translateStatus, translateSpecies } from '../functions/translateText';

interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  species: string;
  episode: string[];
}

interface CardCharacterProps {
  searchTerm: string;
}

export function CardCharacter({ searchTerm }: CardCharacterProps) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(null);

    let url = "";

    if (searchTerm.trim() !== "") {
      url = `http://localhost:8080/api/characters/search/${encodeURIComponent(searchTerm)}?page=${page}`;
    } else {
      url = `http://localhost:8080/api/characters?page=${page}`;
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Erro na requisição");
        return res.json();
      })
      .then((data) => {
        const results = data.results || [];

        if (!results || results.length === 0) {
          setError("Nenhum personagem encontrado aqui.");
          setCharacters([]);
          setNextPage(null);
          return;
        }

        setCharacters(results);
        setNextPage(data.info.next);
      })
      .catch(() => setError("Nenhum personagem encontrado."))
      .finally(() => setLoading(false));
  }, [page, searchTerm]);

  if (loading) {
    return <p className="text-center text-gray-500 mt-10">Carregando personagens...</p>;
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-gray-600 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {characters.map((character) => {
            const statusInfo = translateStatus(character.status);
            const speciesInfo = translateSpecies(character.species);
            return (
          <div key={character.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{character.name}</h3>
            <p className="text-gray-600">Status: <span className={statusInfo.color}>{statusInfo.text}</span></p>
            <p className="text-gray-600">Espécie: <span className={speciesInfo.color}>{speciesInfo.text}</span></p>
            <p className="text-gray-600">Participou de {character.episode.length} episódios</p>

            <button className="text-blue-500 cursor-pointer rounded" onClick={() => navigate(`/character/${character.id}`)}>Ler mais</button>
          </div>
        );
    })}
      </div>
        <div className="flex justify-between mt-4 mb-5">
          <button className={`bg-blue-500 text-white px-4 py-2 rounded transition ${
            page === 1 ? "bg-blue-950 cursor-not-allowed opacity-70": "bg-blue-500 hover:bg-blue-600 cursor-pointer"
            }`}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Anterior
          </button>

          <span className="flex justify-center mt-4">
            <p className="text-gray-600">Página {page}</p>
          </span>
          <button className={`bg-blue-500 text-white px-4 py-2 rounded transition ${
            !nextPage ? "bg-blue-950 cursor-not-allowed opacity-70" : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
            }`}
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!nextPage}
          >
            Próxima
          </button>
        </div>
    </div>
  );
}