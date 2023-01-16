import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { GlobalStateContext } from "../../global/GlobalContex";
import { goToPokedex } from "../../routes/coordinator";
import { MainContainerPokemon } from "./styled";

function PokemonListScreen () {
    const {pokemons} = useContext(GlobalStateContext)
    const navigate = useNavigate()
    return(
        <MainContainerPokemon>
            <Header showButtonPokedex/>
            <>
            {
                    pokemons.map((pokemon) => {
                        return <PokemonCard 
                        key={pokemon.name}
                        pokemon={pokemon} 
                        />
                    })
                }
            </>
                
        </MainContainerPokemon>
    )
}

export default PokemonListScreen