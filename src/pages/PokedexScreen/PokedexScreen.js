import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../global/GlobalContex";
import { ContainerPokedex } from "./styled";

function PokedexScreen() {
  const {pokedex} = useContext(GlobalStateContext)
  return (
    <div>
      <Header screenPokedex/>
      <ContainerPokedex>
        {
          pokedex && pokedex.map((pokemon)=> {
            return(
              <PokemonCard 
              key={pokemon.name} 
              isPokedex 
              pokemon={pokemon}
              />
            )
          })
        }
      </ContainerPokedex>
    </div>
  );
}

export default PokedexScreen;