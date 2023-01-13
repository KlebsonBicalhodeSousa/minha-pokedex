export const goToPokemonList = (navigate) => {
    navigate('/')
}
export const goToPokemonDetail = (navigate, name) => {
    navigate(`/pokemon/${name}`)
}
export const goToPokedex = (navigate) => {
    navigate('/pokedex')
}