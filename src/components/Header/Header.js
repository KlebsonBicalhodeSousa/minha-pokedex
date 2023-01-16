import React from "react";
import { ButtonPokedex, ButtonPokemons, ContainerButton, ContainerImg, NavBar } from "./Styled";
import LogoPokemon from "../../assets/LogoPokemon.png"
import { goToPokedex, goToPokemonList } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const Header = ({title, screenListPokemon, screenPokedex, showButtonPokedex}) => {
  const navigate = useNavigate()

  const currentButtonTitle = () => {
    switch (title) {
      case "Lista de Pokémons":
        return "Ir para Pokedex";
      case "Pokédex":
        return "Voltar para lista de pokémons";
        default:
          return "voltar"
    }
  }

  return(
    <NavBar>
      <ContainerButton>
        {screenPokedex && 
        <ButtonPokemons onClick={() => goToPokemonList(navigate)}>
          Todos Pokémons
        </ButtonPokemons>}
      </ContainerButton>
      {/* {screenListPokemon && <ButtonPokemons onClick={() => goToPokedex(navigate)}>Pokédex</ButtonPokemons>} */}
      
      <ContainerImg>
        <img src={LogoPokemon}/>
      </ContainerImg>
      <ContainerButton>
        {showButtonPokedex && 
        <ButtonPokedex onClick={() => goToPokedex(navigate)}>Ir para Pokedex</ButtonPokedex>
      }
      </ContainerButton>
      
    </NavBar>
  )
}
export default Header;
