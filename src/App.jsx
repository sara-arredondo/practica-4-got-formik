import { useState } from "react";

import charactersGOT from "./data.js";
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import AddCharacter from "./components/AddCharacter.jsx";
import ContainCard from "./components/ContainCard.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  const [characters, setCharacters] = useState(() => {
  const localData = localStorage.getItem("characters");
  return localData ? JSON.parse(localData) : charactersGOT;
});

  function createCharacter( {fullName, title, family, imageUrl} ) {

    const nuevoPersonaje = {
      id: crypto.randomUUID(),
      fullName: fullName,
      title: title,
      family: family,
      imageUrl: imageUrl,
    }

    const nuevoArray = [nuevoPersonaje, ...characters];
    localStorage.setItem("characters", JSON.stringify(nuevoArray))
    setCharacters(nuevoArray)
  }

  return (
  <>
    <Header />
    <Banner />
    <AddCharacter createCharacter={createCharacter} />
    <ContainCard characters={characters} />
    <Footer />
  </>
);

}

export default App;
