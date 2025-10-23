import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
//import { translateSpecies, translateStatus } from '../functions/translateText';

interface Episode {
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

export function EpisodeDetails() {
  const { id } = useParams<{ id: string }>();
  const [episode, setEpisode] = useState<Episode | null>(null);
  // const statusInfo = translateStatus(episode?.status || "");
  // const speciesInfo = translateSpecies(episode?.species || "");

  useEffect(() => {
    fetch(`http://localhost:8080/api/episodes/${id}`)
      .then((res) => res.json())
      .then((data) => setEpisode(data))
      .catch((err) => console.error('Erro ao buscar personagem:', err));
  }, [id]);

  if (!episode) 
  return (
    <main>
      <NavBar />
      <div className="flex items-center justify-center h-screen">
        <p className="text-4xl font-bold">Carregando...</p>
      </div>
    </main>
  );

  return (
    <main>
      <NavBar />
      <div className="flex m-10 flex-row gap-2 items-start">
        <div className="ml-4">
          <h2 className="text-3xl font-bold mb-2">Episódio - {episode.name}</h2>
          <p>Data de lançamento: <span className="text-green-700">{episode.air_date}</span></p>
          <p>Identificador: <span className="text-red-600">{episode.episode}</span></p>
          <p>Personagens: <span className="text-gray-600">{episode.characters.length}</span></p>
        </div>
      </div>
    </main>
  );
}