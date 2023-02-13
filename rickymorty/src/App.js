import imageRickMorty from  "./img/rick-morty.png";
import './App.css';
import { useState } from "react"
import Characters from "./components/Characters.jsx";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json();
  
    setCharacters(characterApi.results);
};



  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {/*cuando character contenga algo (?) me va a cargar tal componente y 
        cuando no (:) quiero que se cargue el img y el button, que esta encapsulado en el fragment <></>*/}
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <> 
              <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Search Characters
            </button>
            
          </>

        )}
        
      </header>
    </div>
  );
}

export default App;
