import { GET_POKEMONS } from '~/graphql/queries'

export const state = () => ({
    pokemonsList: []
})

export const actions = {
    fetchPokemons ({ commit }, variable) {
        return new Promise((resolve,reject)=>{
            // config in nuxt.config.js
            this.$graphql.request(GET_POKEMONS,variable).then(data=>{
                commit('saveList',data.pokemons)
                resolve()
            }).catch(error=>{
                reject(error)
            })
        })
    }
}

export const mutations = {
    saveList (state, list) {
        state.pokemonsList = list
    }
}

export const getters = {
    getPokemonsList: state => state.pokemonsList,
}