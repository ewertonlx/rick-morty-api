export function translateStatus(status: string) {
  switch (status.toLowerCase()) {
    case "alive":
      return { text: "Vivo", color: "text-green-600" };
    case "dead":
      return { text: "Morto", color: "text-red-600" };
    default:
      return { text: "Desconhecido", color: "text-yellow-600" };
  }
}

export function translateSpecies(species: string) {
    switch (species.toLowerCase()) {
      case "human":
        return { text: "Humano", color: "text-gray-800" };
      case "alien":
        return { text: "Alienígena", color: "text-green-800" };
      case "mythological creature":
        return { text: "Criatura Mitológica", color: "text-purple-600" };
      case "humanoid":
        return { text: "Humanoide", color: "text-indigo-600" };
      case "cronenberg":
        return { text: "Cronenberg", color: "text-pink-600" };
      case "disease":
          return { text: "Doença", color: "text-red-600" };
      case "robot":
        return { text: "Robô", color: "text-cyan-600" };
      default:
        return { text: "Desconhecido", color: "text-yellow-600" };
    }
}