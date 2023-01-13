import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PokemonListScreen from "../pages/PokemonListScreen/PokemonListScreen"
import PokedexScreen from "../pages/PokedexScreen/PokedexScreen";
import PokemonDetailScreen from "../pages/PokemonDetailScreen/PokemonDetailScreen";

export const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<PokemonListScreen />} />
          <Route path="/pokemon/:name" element={<PokemonDetailScreen />} />
          <Route path="/pokedex" element={<PokedexScreen />} />
        </Routes>
      </BrowserRouter>
    );
  };
  export default Router