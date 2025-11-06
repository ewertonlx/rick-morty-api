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

export function monthsToPortuguese(month: string) {
  const monthSplit = month.split(" ");
  console.log(monthSplit);
  switch (monthSplit[0].toLowerCase()) {
    case "january":
      return `${monthSplit[1]} de Janeiro de ${monthSplit[2]}`;
    case "february":
      return `${monthSplit[1]} de Fevereiro de ${monthSplit[2]}`;
    case "march":
      return `${monthSplit[1]} de Março de ${monthSplit[2]}`;
    case "april":
      return `${monthSplit[1]} de Abril de ${monthSplit[2]}`;
    case "may":
      return `${monthSplit[1]} de Maio de ${monthSplit[2]}`;
    case "june":
      return `${monthSplit[1]} de Junho de ${monthSplit[2]}`;
    case "july":
      return `${monthSplit[1]} de Julho de ${monthSplit[2]}`;
    case "august":
      return `${monthSplit[1]} de Agosto de ${monthSplit[2]}`;
    case "september":
      return `${monthSplit[1]} de Setembro de ${monthSplit[2]}`;
    case "october":
      return `${monthSplit[1]} de Outubro de ${monthSplit[2]}`;
    case "november":
      return `${monthSplit[1]} de Novembro de ${monthSplit[2]}`;
    case "december":
      return `${monthSplit[1]} de Dezembro de ${monthSplit[2]}`;
    default:
      return month;
  }
}

export function tranlateGender(gender: string) {
  switch (gender.toLowerCase()) {
    case "male":
      return { text: "Masculino", color: "text-blue-600" };
    case "female":
      return { text: "Feminino", color: "text-pink-600" };
   default:
      return { text: "Desconhecido", color: "text-yellow-600" };
  }
}