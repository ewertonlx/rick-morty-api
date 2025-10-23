import { useEffect, useState } from "react";

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
    <div className="p-4 rounded-md shadow-xl w-96">
      <div>
        <p><strong>Nome:</strong> {episode.name}</p>
        <p><strong>Data de lançamento:</strong> {episode.air_date || "Desconhecida"}</p>
        <p><strong>Identificador:</strong> {episode.episode || "Desconhecida"}</p>
        <p>Personagens totais nesse episódio: {episode.characters.length}</p>
      </div>
    </div>
  );
}