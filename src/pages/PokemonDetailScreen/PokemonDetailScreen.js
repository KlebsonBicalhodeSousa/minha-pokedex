import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalContex";
import {
  ImagesContainer,
  ImgWrapper,
  MovesContainer,
  PokeInfosContainer,
  StatsContainer,
  TitleContainer,
  TypeAndMovesContainer,
  TypesContainer,
} from "./styled";

function PokemonDetailScreen() {
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const { name } = useParams();
  const { pokemons } = useContext(GlobalStateContext);
  // console.log(name)

  useEffect(() => {
    const currentPokemon = pokemons.find((item) => item.name === name);
    setSelectedPokemon(currentPokemon);
  }, []);
  return (
    <div>
      <Header />
      <PokeInfosContainer>
        {selectedPokemon && selectedPokemon.sprites &&
        <ImagesContainer>
          <ImgWrapper src={selectedPokemon.sprites.front_default}/>
          <ImgWrapper src={selectedPokemon.sprites.back_default}/>
        </ImagesContainer>
        }
        <StatsContainer>
          <TitleContainer>Poderes</TitleContainer>
          {
            selectedPokemon &&
                selectedPokemon.stats &&
                selectedPokemon.stats.map((stat) => {
                return (
                    <p key={stat.stat.name}>
                    <strong>{stat.stat.name}</strong> {stat.base_stat}
                    </p>
                );
                })
            }
        </StatsContainer>
        <TypeAndMovesContainer>
            <TypesContainer>
                {selectedPokemon &&
                selectedPokemon.types &&
                selectedPokemon.types.map((type) => {
                return (
                    <p key={type.type.name}>{type.type.name}</p>
                );
                })}
            </TypesContainer>
            <MovesContainer>
              <TitleContainer>Principais ataques</TitleContainer>
              {selectedPokemon &&
                selectedPokemon.moves &&
                selectedPokemon.moves.map((move, index) => {
                return (
                    index < 5 && <p key={move.move.name}>{move.move.name}</p>
                );
                })}
            </MovesContainer>
        </TypeAndMovesContainer>
        
      </PokeInfosContainer>
    </div>
  );
}

export default PokemonDetailScreen;
