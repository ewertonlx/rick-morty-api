import { useEffect, useState } from "react";
import { monthsToPortuguese } from "../functions/translateText";

interface EpisodeInfo {
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

interface EpisodeProps {
  episodeId: string;
}
export function Episode({ episodeId }: EpisodeProps) {
  const [episode, setEpisode] = useState<EpisodeInfo | null>(null);

  useEffect(() => {
    if (!episodeId) return;

    fetch(`http://localhost:8080/api/episodes/${episodeId}`)
      .then(res => res.json())
      .then(data => setEpisode(data))
      .catch(err => console.error("Erro ao buscar episódio:", err));
  }, [episodeId]);

  if (!episode) return <p>Carregando episódio...</p>;

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="p-4 rounded-md shadow-xl w-96 max-md:w-70 ">
        <div className="ml-4">
          <h2 className="text-3xl font-bold mb-2 max-md:text-2xl">{episode.name}</h2>
          <p>Data de lançamento: <span className="text-green-700">{monthsToPortuguese(episode.air_date)}</span></p>
          <p>Identificador: <span className="text-red-600">{episode.episode}</span></p>
          <p>Personagens totais neste episódio: <span className="text-gray-600">{episode.characters.length}</span></p>
        </div>
      </div>
    </main>
  );
}