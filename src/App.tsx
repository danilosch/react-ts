import React, { FunctionComponent } from "react";
import PokemonSearch from "./components/PokemonSearch";
import "./App.css";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <PokemonSearch name="Ash" numberOfPokemons={52} />
    </div>
  );
};

export default App;
