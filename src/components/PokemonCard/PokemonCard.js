import React from "react";
import { useNavigate } from "react-router";
import { goToPokemonDetail } from "../../routes/coordinator";
import { ButtonCapture, ButtonDetail, CardButton, CardPokemon, ImageContainer, ImgPokemon } from "./styled";

const PokemonCard = ({pokemon}) => {
    const navigate = useNavigate()

    return(
        <CardPokemon>
            <ImageContainer>
                <ImgPokemon 
                    src={pokemon.sprites && pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
            </ImageContainer>
            <CardButton>
                <ButtonCapture >Capiturar Pokémom</ButtonCapture>
                <ButtonDetail onClick={() => goToPokemonDetail(navigate, pokemon.name)}>Ver Detalhe</ButtonDetail>
            </CardButton>
        </CardPokemon>
    )
}

export default PokemonCard