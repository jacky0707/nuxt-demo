<template>
    <v-row justify="center">
        <v-col>
            <v-row>
                <v-col 
                    v-for="pokemon in getPokemonsList"                         
                    :key="pokemon.number"
                    md="4"
                    sm="6"
                    xs="6"
                >
                    <PokemonCard 
                        :name="pokemon.name"
                        :number="pokemon.number"
                        :classification="pokemon.classification"
                        :maxWeight="pokemon.weight.maximum"
                        :minWeight="pokemon.weight.minimum"
                    ></PokemonCard>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
<script>
import { mapGetters } from "vuex";
import PokemonCard from "@/components/PokemonCard.vue"

export default {
    layout:'notHomePage',
    computed:{
        ...mapGetters({
            getPokemonsList:'pokemons/getPokemonsList'
        })
    },
    components:{
        PokemonCard
    }
}
</script>