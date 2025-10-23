import { useEffect, useState } from "react";

interface LocationInfo {
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

interface LocationProps {
  locationId: string;
}
export function Location({ locationId }: LocationProps) {
  const [location, setLocation] = useState<LocationInfo | null>(null);

  useEffect(() => {
    if (!locationId) return;

    fetch(`http://localhost:8080/api/locations/${locationId}`)
      .then(res => res.json())
      .then(data => setLocation(data))
      .catch(err => console.error("Erro ao buscar localização:", err));
  }, [locationId]);

  if (!location) return <p>Carregando localização...</p>;

  return (
    <div className="p-4 rounded-md shadow-xl w-96">
      <div>
        <p><strong>Nome:</strong> {location.name}</p>
        <p><strong>Tipo:</strong> {location.type || "Desconhecido"}</p>
        <p><strong>Dimensão:</strong> {location.dimension || "Desconhecida"}</p>
        <p>Moradores totais nessa localização: {location.residents.length}</p>
      </div>
    </div>
  );
}