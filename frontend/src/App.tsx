import { useState } from "react";
import { CardCharacter } from "./components/CardCharacter";
import { NavBar } from "./components/NavBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <NavBar onSearch={setSearchTerm} />

      <section className="text-center mt-20">
        <h1>Rick & Morty</h1>
        <h3 className="text-gray-600 ml-10 mr-10">Acompanhe malucas viagens no tempo-espaço e por universos paralelos com Rick, um cientista com problemas com a bebida, e seu neto Morty, um adolescente não tão brilhante quanto o avô.</h3>
      </section>

      <section className="text-start mt-15 mx-5">
        <h2 className="text-2xl font-bold">Personagens</h2>
        <CardCharacter searchTerm={searchTerm} />
      </section>
    </main>
  );
}

export default App;