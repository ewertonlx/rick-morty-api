import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { CardCharacter } from '../components/Characters';
import { Episodes } from '../components/Episodes';

interface Episode {
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

export function Episode() {
  const [searchTerm, setSearchTerm] = useState("");
  const { id } = useParams<{ id: string }>();
  const [episode, setEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/episodes/${id}`)
      .then((res) => res.json())
      .then((data) => setEpisode(data))
      .catch((err) => console.error('Erro ao buscar episódio:', err));
  }, [id]);

  if (!episode) 
  return (
    <main>
      <NavBar onSearch={setSearchTerm}/>
      <div className="flex items-center justify-center h-screen">
        <p className="text-4xl font-bold">Carregando...</p>
      </div>
    </main>
  );

  if(searchTerm){
    return (
      <main>
        <NavBar onSearch={setSearchTerm}/>
        <CardCharacter searchTerm={searchTerm} />
      </main>
    )
  }

  return (
    <main>
      <NavBar onSearch={setSearchTerm} />
      <Episodes episodeId={id || ""} />
    </main>
  );
}