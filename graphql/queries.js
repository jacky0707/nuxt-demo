export const GET_POKEMONS = `
  query pokemons($first:Int!)  {
    pokemons(first:$first){
      name
      weight{
        minimum
        maximum
      }
      classification
      number
    }
  }
`;