import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { tranlateGender, translateSpecies, translateStatus } from '../functions/translateText';
import { Location } from '../components/Location';
import { getIdFromUrl } from '../functions/getIdFromUrl';
import { CardCharacter } from '../components/CardCharacter';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: { name: string };
  location: { url: string };
  episode: string[];
}

export function CharacterDetails() {
  const [searchTerm, setSearchTerm] = useState("");
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const statusInfo = translateStatus(character?.status || "");
  const speciesInfo = translateSpecies(character?.species || "");

  useEffect(() => {
    fetch(`http://localhost:8080/api/characters/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .catch((err) => console.error('Erro ao buscar personagem:', err));
  }, [id]);

  if (!character) 
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
      <NavBar onSearch={setSearchTerm}/>
      <div className="flex m-10 flex-row gap-2 items-start max-sm:flex-col max-sm:items-center max-sm:m-2">
        <img src={character.image} alt={character.name} className="border p-4 shadow-md rounded-lg w-64 mb-4 max-sm:w-42" />
        <div className="ml-4">
          <h2 className="text-3xl font-bold mb-2">{character.name}</h2>
          <p>Status: <span className={statusInfo.color}>{statusInfo.text}</span></p>
          <p>Espécie: <span className={speciesInfo.color}>{speciesInfo.text}</span></p>
          <p>Gênero: <span className={tranlateGender(character.gender).color}>{tranlateGender(character.gender).text}</span></p>
          <p>Origem: {character.origin.name}</p>
        </div>
      </div>
      <div className="m-10 max-sm:m-2">
        <h3 className="text-2xl font-bold mb-2">Localização</h3>
        <Location locationId={getIdFromUrl(character.location.url)!} />
      </div>
      <div className="m-10 max-sm:m-2">
        <h3 className="text-2xl font-bold mb-2">Episódios em que esse personagem esteve presente</h3>
        <ul className="flex flex-wrap gap-4 list-none p-2 m-2">
          {character.episode?.map((epUrl) => {
            const episodeId = getIdFromUrl(epUrl);
            return (
              <li key={episodeId}>
                <a href={`/episode/${episodeId}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"> Episódio {episodeId} </a>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}